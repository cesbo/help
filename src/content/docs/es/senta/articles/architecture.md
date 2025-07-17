---
title: Check architecture
description: How check you architecture for chose bin, with I will use
sidebar:
    order: 1
---

**P:** ¿Qué binario debo elegir? No conozco la arquitectura de mi sistema

**R:** Para comprobar la arquitectura de tu sistema operativo Linux, como si es AMD64 o ARM, puedes usar el comando `uname` con varias opciones. Aquí hay varios métodos:

1. Usando el comando `uname -m`:

```bash [terminal]
uname -m
```

Este comando mostrará la arquitectura de tu sistema operativo. Por ejemplo, `x86_64` para arquitectura AMD/Intel de 64 bits o `armv7l` para ARM de 32 bits.

2. Usando el comando `uname -a`:

```bash [terminal]
uname -a
```

Este comando mostrará información completa sobre tu sistema, incluida la arquitectura.

3. Usando el comando `lscpu`:

```bash [terminal]
lscpu
```

Este comando proporcionará información detallada sobre el CPU, incluyendo la arquitectura.

4. Usando el comando `arch`:

```bash [terminal]
arch
```

Este comando también mostrará la arquitectura de tu sistema.

Ejemplos de salida:

* Para arquitectura AMD/Intel de 64 bits:

```bash [terminal]
x86_64
```

* Para arquitectura ARM de 32 bits:

```bash [terminal]
armv7l
```

* Para arquitectura ARM de 64 bits:

```bash [terminal]
aarch64
```

Puedes usar cualquiera de estos métodos para determinar la arquitectura de tu sistema operativo Linux.