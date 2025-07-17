---
title: "Astra HTTP Relay"
date: 2023-02-23
sidebar:
    order: 1
---

Astra HTTP Relay es una herramienta simple integrada para retransmitir datos desde cualquier fuente compatible con Astra hacia un cliente HTTP.

## Uso

```
astra --relay -p 8000
```

Argumentos de línea de comandos:

- `-p 8000` - puerto local para conexiones entrantes. Predeterminado: `8000`;
- `-a 0.0.0.0` - dirección IP local para conexiones entrantes. Predeterminado `0.0.0.0` - acepta solicitudes en cualquier interfaz;
- `-l 0.0.0.0` - dirección IP de la interfaz local para recibir flujos UDP/RTP. Predeterminado `0.0.0.0` - recibe flujos de acuerdo a la tabla de enrutamiento del sistema;
- `--pass login:password` - usuario y contraseña para la autorización básica de todas las solicitudes;
- `--no-udp` - deshabilita el acceso a la fuente UDP/RTP;
- `--no-http` - deshabilita el acceso a la fuente HTTP;
- `--buffer-size 1024` — tamaño máximo del búfer en kilobytes para cada cliente. Predeterminado 1024Kb;
- `--buffer-fill 128` — define la cantidad de kilobytes para llenar en el búfer antes de comenzar la transmisión. Predeterminado 128Kb;
- `--daemon` - inicia en modo demonio;
- `--log` /var/log/relay.log - ruta completa al archivo de registro;
- `--channels /etc/astra/relay.lua` - ruta completa a los alias de los canales.

## Formato de dirección

La dirección de solicitud tiene el siguiente formato:

- `http://your-server-address:8000/udp/239.255.1.1:1234` - recibe flujo UDP del grupo multicast `239.255.1.1:1234`
- `http://your-server-address:8000/http/example.com/travel-channel` - recibe flujo HTTP de `http://example.com/travel-channel`

## Alias de canales

Los alias de canales permiten usar un nombre corto en lugar de una dirección completa. Ejemplo de lista de alias:

```
-- /etc/astra/relay.conf

channels = {
    ["demo"] = "udp://239.255.1.1:1234",
    ["travel-channel"] = "http://example.com/travel-channel"
}
```

Inicia el relay con la ruta a la lista de alias:

```
astra --relay -p 8000 --channels /etc/astra/relay.conf
```

Los canales del ejemplo anterior estarán disponibles en:

- `http://your-server-address:8000/demo` - flujo UDP
- `http://your-server-address:8000/travel-channel` - flujo HTTP

## Estadísticas

La página de estadísticas es simple y contiene sesiones activas con la siguiente información:

- Dirección IP del cliente
- Ruta de solicitud - alias o dirección completa del canal fuente
- Tiempo de actividad
- Enlace para cerrar sesión

Para ver las estadísticas, abre en tu navegador: `http://your-server-address:8000/stat/`