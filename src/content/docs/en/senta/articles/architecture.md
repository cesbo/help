---
title: Check architecture
description: How check you architecture for chose bin, with I will use
sidebar:
    order: 1
---
**Q:** Which binary should I choose? I don't know my system architecture

**A:** To check the architecture of your Linux operating system, such as whether it is AMD64 or ARM, you can use the `uname` command with various options. Here are several methods:

1. Using the `uname -m` command:

```bash [terminal]
uname -m
```

This command will output the architecture of your OS. For example, `x86_64` for 64-bit AMD/Intel architecture or `armv7l` for 32-bit ARM.

2. Using the `uname -a` command:

```bash [terminal]
uname -a
```

This command will output complete information about your system, including the architecture.

3. Using the `lscpu` command:

```bash [terminal]
lscpu
```

This command will provide detailed information about the CPU, including the architecture.

4. Using the `arch` command:

```bash [terminal]
arch
```

This command will also output your system's architecture.

Examples of output:

* For 64-bit AMD/Intel architecture:

```bash [terminal]
x86_64
```

* For 32-bit ARM architecture:

```bash [terminal]
armv7l
```

* For 64-bit ARM architecture:

```bash [terminal]
aarch64
```

You can use any of these methods to determine the architecture of your Linux OS.
