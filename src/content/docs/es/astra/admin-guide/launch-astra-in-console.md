---
title: Launch Astra in console
sidebar:
    order: 8
---

Si tu sistema no tiene systemd, puedes iniciar el proceso manualmente:

```sh
astra -c /etc/astra/astra.conf -p 8000
```

El proceso se lanzará en primer plano y tu consola será ocupada por el proceso hasta que termine. Para detener el proceso simplemente presiona Ctrl+C en tu teclado.

- `-c`: ruta al archivo de configuración.
- `-p`: puerto para la Interfaz Web de Astra.

## Iniciar en segundo plano

Para iniciar el proceso en segundo plano, añade la opción `--daemon` después de la línea de comando:

```sh
astra -c /etc/astra/astra.conf -p 8000 --daemon
```

## Terminar proceso

El proceso se lanzará en segundo plano y la consola volverá a estar bajo tu control inmediatamente. Para detener el proceso puedes ejecutar el comando:

```sh
killall astra
```

## Ruta al archivo de licencia

Por defecto, Astra buscará el archivo de licencia en la ruta `/etc/astra/license.txt`. Si tienes tu archivo de licencia en una ubicación diferente, puedes especificarla usando la opción `--license` al iniciar Astra.

```sh
astra -c /etc/astra/astra.conf -p 8000 --license /path/to/license.txt
```