---
title: "Configuración tolerante a fallos"
date: 2023-08-08
sidebar:
    order: 8
---

Con una configuración tolerante a fallos, puede lanzar un segundo servidor para sustituir al primario en caso de fallo.

```
astra -c /etc/astra/astra.conf -p 8000 --slave "http://192.168.1.1:8000"
```

Este comando iniciará Astra en modo esclavo y se conectará al proceso primario en el servidor en 192.168.1.1. En cuanto se pierda la conexión con el servidor primario, Astra ejecutará la configuración y comenzará a funcionar.

Por defecto, Astra ejecuta la configuración en 3 segundos. Sin embargo, puede establecer un retardo más corto o más largo con la opción `delay` opción:

```
astra -c /etc/astra/astra.conf -p 8000 --slave "http://192.168.1.1:8000#delay=10"
```
