---
title: Fault-tolerant configuration
sidebar:
    order: 9
---

Con una configuración tolerante a fallos, puedes lanzar un segundo servidor para reemplazar al primario en caso de fallo.

```
astra -c /etc/astra/astra.conf -p 8000 --slave "http://192.168.1.1:8000"
```

Este comando iniciará Astra en modo esclavo y se conectará al proceso primario en el servidor en 192.168.1.1. Tan pronto como se pierda la conexión con el servidor primario, Astra ejecutará la configuración y comenzará a operar.

Por defecto, Astra ejecuta la configuración en 3 segundos. Sin embargo, puedes establecer un retraso más corto o más largo con la opción `delay`:

```
astra -c /etc/astra/astra.conf -p 8000 --slave "http://192.168.1.1:8000#delay=10"
```