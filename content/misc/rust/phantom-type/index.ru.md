---
title: Фантомный тип
---

Фантомный тип - универсальный тип данных, объявляется, но не используется.

## Указатели

```rust
struct RawPointer<'a, T> {
    ptr: *const T,
    phantom: std::marker::PhantomData<&'a T>,
}
```

Фантомный тип необходим для связи времени жизни объекта RawPointer с объектом по указателю `ptr`

## Обобщённые типы

```rust
struct TimeUnit<T> {
    value: u64,
    phantom: std::marker::PhantomData<T>,
}

struct MillisecondType;
type Millisecond = TimeUnit<MillisecondType>;

struct NanosecondType;
type Nanosecond = TimeUnit<NanosecondType>;

impl<T> TimeUnit<T> {
    fn new(value: u64) -> Self {
        Self {
            value,
            phantom: std::marker::PhantomData,
        }
    }
}

impl<T> std::ops::Add for TimeUnit<T> {
    type Output = Self;
    fn add(self, other: Self) -> Self {
        Self::new(self.value + other.value)
    }
}
```

Фантомный тип позволяет реализовать объекты одинаковые по сути, но различные по типу. Например интерфейс `std::ops::Add` реализованный для `TimeUnit<T>` - позволяет складывать объекты одинаковых типов, но исключает ошибочное сложение различных типов.
