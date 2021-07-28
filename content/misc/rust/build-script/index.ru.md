---
title: Скрипт сборки
---

Скрипт сборки используется для выполнения действий до сборки модуля:

- Сборка Си-кода и сторонних библиотек для статической линковки
- Генерация Rust-кода для последующей сборки в проекте

Код скрипта сборки необходимо сохранить в файле `/src/build.rs` и прописать в `Cargo.toml`:

```toml
[package]
build = "src/build.rs"
```

## Сборка Си-кода

В `Cargo.toml` необходимо добавить:

```toml
[build-dependencies]
cc = "1.0"
```

Скрипт `src/build.rs`:

```rust
fn main() {
    println!("cargo:rerun-if-changed=src/hello.c");
    cc::Build::new()
        .file("src/hello.c")
        .compile("hello");
}
```

## Генерация кода

Генерацию кода удобно использовать для формирования информации о версии.

В `Cargo.toml` необходимо добавить:

```toml
[build-dependencies]
chrono = "0.4"
```

Скрипт `src/build.rs`:

```rust
use {
    std::{
        env,
        fs::File,
        io::Write,
        process::Command,
    },

    chrono::offset::Local,
};

fn main() {
    let n = env::var("OUT_DIR").unwrap() + "/build.rs";
    let mut f = File::create(&n).unwrap();

    let output = Command::new("git")
        .arg("rev-parse")
        .arg("--short=8")
        .arg("HEAD")
        .output().unwrap();
    let commit = String::from_utf8(output.stdout).unwrap();
    let commit = commit.trim_end();

    let dt = Local::now();

    let s = format!(
        "pub static BUILD_COMMIT: &'static str = \"{}\";\n",
        commit
    );
    f.write(s.as_bytes()).unwrap();

    let s = format!(
        "pub static BUILD_DATE: &'static str = \"{}\";\n",
        dt.format("%Y-%m-%d")
    );
    f.write(s.as_bytes()).unwrap();
}
```

В исходном файле `src/main.rs` или любом другом можно подключить созданный код:

```rust
include!(concat!(::std::env!("OUT_DIR"), "/build.rs"));

fn main() {
    println!("app-name {} commit:{}", BUILD_DATE, BUILD_COMMIT);
}
```
