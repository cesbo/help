---
title: Static image
description: Streaming static image
sidebar:
    order: 1
---

Чтобы добавить профиль, перейдите на вкладку **ffmpeg profiles**.

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof-tab.png)

Далее нажмите **add profile**.

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof.png)

Затем настройте имя.

![](https://cesbo.b-cdn.net/senta/help/streamer/supname.png)

Далее настройте команду. В этом примере мы создаем команду, которая непрерывно транслирует статический файл (например, для создания тестовой таблицы). В этой команде ffmpeg входной поток заменен переменной `${i}`, а выходной поток - переменной `${o}`. Затем сохраните её.

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

![](https://cesbo.b-cdn.net/senta/help/streamer/promt.png)

Профиль будет добавлен.

![](https://cesbo.b-cdn.net/senta/help/streamer/profile-added.png)

Далее вы можете добавить этот профиль к потоку. Установите входные и выходные параметры. В этом примере мы загружаем ts-файл на сервер и указываем путь в поле ввода, затем устанавливаем udp-поток как выходной.

![](https://cesbo.b-cdn.net/senta/help/streamer/set-prof.png)

Вы можете увидеть результат в VLC!

![](https://cesbo.b-cdn.net/senta/help/streamer/matras.png)