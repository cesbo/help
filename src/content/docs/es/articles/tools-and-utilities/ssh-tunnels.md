---
title: "SSH: Tunnels"
description: "Port forwarding with SSH"
sidebar:
    order: 12
---

Los túneles SSH son una herramienta poderosa para la comunicación segura, evitando restricciones de red y proporcionando acceso remoto a recursos locales.

## Redireccionamiento de Puerto Local

El redireccionamiento de puerto local te permite redirigir un puerto en tu máquina local a una dirección remota y un puerto. Imagina que tienes una aplicación web funcionando en un servidor remoto con la dirección `127.0.0.1:8000`. Para acceder a esta aplicación web desde tu máquina local, puedes usar el redireccionamiento de puerto SSH:

```bash
ssh -L 8080:127.0.0.1:8000 example.com
```

Ahora, en el navegador web de la máquina local, ve a `http://localhost:8080` y deberías obtener los datos (o ver la página web) desde tu servidor remoto.

- `8080` - el número de puerto en la computadora local con el cliente SSH
- `127.0.0.1:8000` - la dirección IP y el número de puerto en la computadora remota
- `-fNT` - opciones adicionales para ejecutar el cliente SSH en segundo plano

## Redireccionamiento de Puerto Inverso

El redireccionamiento de puerto inverso te permite redirigir un puerto en el servidor remoto a un servicio local. Por ejemplo, para redirigir el puerto remoto 9090 al puerto 3000 de tu máquina local:

```bash
ssh -R 9090:localhost:3000 example.com
```

Ahora, todas las solicitudes en el servidor remoto al puerto `9090` serán redirigidas al puerto `3000` en tu máquina local.

## Ejemplos

### Acceso Remoto Seguro a Base de Datos

**Escenario**: Tienes una base de datos MySQL funcionando en un servidor remoto y deseas acceder a ella desde tu máquina local. Crea un túnel SSH para redirigir el puerto MySQL remoto a tu máquina local:

```bash
ssh -L 3306:localhost:3306 example.com
```

Después de ejecutar este comando, puedes conectar a la base de datos MySQL remota usando un cliente MySQL local como sigue:

```bash
mysql -h 127.0.0.1 -P 3306 -u db_user -p
```

### Tunelización de Múltiples Puertos

**Escenario**: Necesitas acceder a una base de datos remota en el puerto `5432` y a una aplicación web en el puerto `8080` en el servidor remoto.

```bash
ssh -L 8080:localhost:8080 -L 5432:localhost:5432 example.com
```

Después de ejecutar este comando, puedes acceder a la aplicación web remota en `http://localhost:8080` y a la base de datos remota en `localhost:5432`.

### Tunelización con un Archivo de Configuración SSH

Para configuraciones frecuentes de túneles SSH, puedes configurar tu cliente SSH para simplificar el proceso usando el archivo de configuración SSH `~/.ssh/config`.

```
Host example.com
  LocalForward 5432 localhost:5432
  LocalForward 8080 localhost:8080
```

Esta configuración te permite establecer rápidamente túneles SSH con configuraciones predefinidas simplemente usando los alias.

### Acceso a Cámara IP en una Red Privada

**Escenario**: Tienes una cámara IP en una red privada que transmite video sobre RTSP en `rtsp://192.168.1.10:554/stream1`. Necesitas acceder a esta transmisión RTSP desde tu máquina local.

```bash
ssh -L 8554:192.168.1.10:554 example.com
```

Después de ejecutar este comando, puedes acceder a la transmisión RTSP desde tu máquina local usando un cliente RTSP (por ejemplo, VLC media player) conectándote a `rtsp://localhost:8554/stream1`.

1. Abre VLC Media Player.
2. Ve a "Medio" y haz clic en "Abrir ubicación de red".
3. Ingresa la URL `rtsp://localhost:8554/stream1`.
4. Haz clic en "Reproducir".

VLC ahora se conectará a la transmisión RTSP a través del túnel SSH, permitiéndote ver la transmisión de la cámara como si estuvieras en la misma red privada que la cámara.