---
title: "Lanzar Astra en consola"
date: 2023-02-21
sidebar:
    order: 8
---

Si su sistema no tiene systemd puede lanzar el proceso manualmente:

```
astra -c /etc/astra/astra.conf -p 8000
```

El proceso se iniciará en primer plano y tu consola será ocupada por el proceso hasta que termine. Para detener el proceso sólo tiene que pulsar Ctrl + C en el teclado.

Para iniciar el proceso en segundo plano, añada el símbolo `&` después de la línea de comandos:

```
astra -c /etc/astra/astra.conf -p 8000 &
```

El proceso se iniciará en segundo plano y la consola volverá a su control inmediatamente. Para detener el proceso puede ejecutar el comando:

```
killall astra
```
