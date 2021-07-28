---
title: Асинхронное программирование
---

## Введение

Асинхронность - выполнение методов при определённом событии.

В расте два уровня асинхронного кода:

1. Уровень интерфейсов [Future](https://doc.rust-lang.org/std/future/trait.Future.html), AsyncRead, Stream, и тп.
2. Уровень приложения, тут всё просто async функции и их вызов с await атрибутом

Атрибут `await` является подобием бесконечного цикла вызвыающего метод `Future::poll`. Метод `Future::poll` возвращает один из двух вариантов [enum Poll](https://doc.rust-lang.org/std/task/enum.Poll.html):

1. `Poll::Pending` - операция не закончена, переход в начало await-цикла и ожидание события. Понятие цикла тут условно, просто прерывается выполнение кода до наступления события
2. `Poll::Ready` - операция закончена, внутри `Poll::Ready` результат выполнения функции, await-цикл прерывается

Событие формирует подобие сигнала для перехода к выполнению poll-метода. Событием может быть результат выполнения системного обработчика событий (epoll в Linux) или завершение операции в отдельном потоке.
Событие и poll-метод связывет [Waker](https://doc.rust-lang.org/std/task/struct.Waker.html).
При наступлении события вызывается метод `Waker::wake()`. Метод добавит в очередь планировщика задач выполнение связанного метода `Future::poll`.

Планировщик задач - блокирующая синхронная функция, основной цикл приложения. Реализована в рантайме [Tokio](https://tokio.rs) основная задача, синхронизация и распределение задач между потоками, обработка системных событий, и выполнение poll-методов в порядке очереди.

## Интерфейс AsyncRead

[AsyncRead](https://docs.rs/tokio/latest/tokio/io/trait.AsyncRead.html) это асинхронный аналог интерфейса [std::io::Read](https://doc.rust-lang.org/std/io/trait.Read.html). Описывает метод `poll_read`. Используется для чтения данных из объекта. Его реализуют такие объекты как `File`, `TcpStream`, `UdpSocket`, и тд.
[AsyncReadExt](https://docs.rs/tokio/latest/tokio/io/trait.AsyncReadExt.html) подключается автоматически для всех объектов реализующих `AsyncRead`. Интерфейс реализует конечные методы используемые в приложении: `read`, `read_to_string`, и тд. По аналогии с методом `std::io::Read`.

Связь между интерфейсами и методами:

1. При вызове метода `source.read(&mut buf).await` выполняется метод `AsyncReadExt::read`, метод формирует объект `Read`. Объект `Read` содержит ссылку на объект `source` и реализует интерфейс `Future`;
2. При вызове функции `Future::poll` в await-цикле вызывается метод `AsyncRead::poll_read` для объекта `source` методу передаётся указатель на буфер обёрнутый в объект [ReadBuf](https://docs.rs/tokio/latest/tokio/io/struct.ReadBuf.html);
3. Метод `AsyncRead::poll_read` производит чтение данных в буфер. Если данные ещё не готовы возвращает `Poll::Pending`, await-цикл продолжается. В случае выполнения операции или ошибки возвращает `Poll::Ready`, await-цикл прерывается;
4. Метод `Future::poll` после завершения await-цикла возвращает результат и количество прочитаннных байтов или ошибку.

## Интерфейс Stream

[Stream](https://docs.rs/futures-core/latest/futures_core/stream/trait.Stream.html) это асинхронный аналог интерфейса [std::iter::Iterator](https://doc.rust-lang.org/std/iter/trait.Iterator.html). Описывает метод `poll_next`. Используется для чтения данных из объекта, но в отличии от `AsyncRead` возвращает не последовательность байт, а данные определённого типа.
Например объект возвращает 64-битное число, в случае метода `AsyncRead` необходимо прочитать 8 байт в буфер, затем преобразовать в число. Если объект реализует интерфейс `Stream` можно сразу получить число, без дополнительных преобразований.
[StreamExt](https://docs.rs/futures/latest/futures/stream/trait.StreamExt.html) подключается автоматически для всех объектов реализующих `Stream`. Интерфейс реализует метод `next`, `skip`, и тд. По аналогии с методом `std::iter::Iterator`.

Связь между интерфейсами и методами:

1. При вызове метода `source.next().await` Выполняется метод `StreamExt::next`, метод формирует объект `Next`. Объект `Next` содержит ссылку на объект `source` и реализует интерфейс `Future`;
2. При вызове функции `Future::poll` в await-цикле вызывается метод `Stream::poll_next` для объекта `source`;
3. Метод `Stream::poll_next` получает данные определённого типа. Если данные ещё не готовы возвращает `Poll::Pending`, await-цикл продолжается. В случае выполнения операции или ошибки возвращает `Poll::Ready`, await-цикл прерывается;
4. Метод `Future::poll` после завершения await-цикла возвращает результат.

## Интерфейс AsyncWrite

TODO:...

## Интерфейс Sink

TODO:...

## Ожидание нескольких событий

Некоторые задачи требуют асинхронной обработки сразу нескольких событий.
Для ожидания двух событий необходимо использовать макрсо [tokio::select!](https://docs.rs/tokio/latest/tokio/macro.select.html).
Макрос необходим для вызова в await-цикле сразу нескольких poll-методов. Метод вернувший `Poll::Ready` раньше других запустит выполнение соответствующего блока кода.

Необходимый паттерн - завершение асинхронной задачи по команде. Для передачи команды используется объект [Notify](https://docs.rs/tokio/latest/tokio/sync/struct.Notify.html).

```rust
let stop_tx = std::sync::Arc::new(tokio::sync::Notify::new());
let stop_rx = stop.clone();

tokio::spawn(async move {
    let delay = tokio::time::Duration::from_secs(1);
    loop {
        tokio::select! {
            _ = tokio::time::sleep(delay) => (),
            _ = stop_rx.notified() => break,
        }
        println!("beep");
    }
    println!("stop task");
});

stop_tx.stop.notify_one();
```

Другой пример - прокси, ожидание данных от произвольного источника и ожидание завершения закрытия TCP подключения получателя. После закрытия подключения данные от источника уже не имеют смысла и цикл задачи может быть завершён.

```rust
let mut buf: [u8; 1024] = [0; 1024];

loop {
    tokio::select! {
        size = source.read(&mut buf) => {
            let size = size.unwrap();
            receiver.write_all(&buf[.. size]).await.unwrap();
        }
        _ = receiver.readable() => {
            match socket.try_read(&mut buf) {
                // Connection closed
                Ok(0) => { break }
                // Drop received data if not needed
                Ok(_) => {}
                // On first call returns this error. Just ignore it
                Err(ref e) if e.kind() == ::std::io::ErrorKind::WouldBlock => {}
                // Some error happened
                Err(e) => panic!("{}", e),
            }
        }
    };
}
```
