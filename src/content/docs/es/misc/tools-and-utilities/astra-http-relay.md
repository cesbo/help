---
title: "Relé HTTP Astra"
date: 2023-02-23
sidebar:
    order: 1
---

Astra HTTP Relay es una sencilla herramienta integrada para retransmitir datos desde cualquier fuente soportada por Astra a un cliente HTTP.

## Utilización[](/es/misc/tools-and-utilities/astra-http-relay#usage)

```
astra --relay -p 8000
```

Argumentos de la línea de comandos:

- `-p 8000` - Puerto local para conexiones entrantes. Por defecto: `8000`;
- `-a 0.0.0.0` - Dirección IP local para conexiones entrantes. Por defecto `0.0.0.0` - aceptar solicitud en cualquier interfaz;
- `-l 0.0.0.0` - Dirección IP de la interfaz local para recibir flujos UDP/RTP. Por defecto `0.0.0.0` - recibe flujos según la tabla de enrutamiento del sistema;
- `--pass login:password` - nombre de usuario y contraseña para la autorización básica de todas las solicitudes;
- `--no-udp` - desactivar el acceso a la fuente UDP/RTP;
- `--no-http` - desactivar el acceso a la fuente HTTP;
- `--buffer-size 1024` - el tamaño máximo del búfer en kilbytes para cada cliente. Por defecto 1024Kb;
- `--buffer-fill 128` - define el número de kilobytes a rellenar en el buffer antes de iniciar la transmisión. Por defecto 128Kb;
- `--daemon` - arrancar en modo demonio;
- `--log` /var/log/relay.log - ruta completa al archivo de registro;
- `--channels /etc/astra/relay.lua` - ruta completa a los alias del canal.

## Formato de la dirección[](/es/misc/tools-and-utilities/astra-http-relay#address-format)

La dirección solicitada tiene el siguiente formato:

- `http://your-server-address:8000/udp/239.255.1.1:1234` - recibe el flujo UDP del grupo multidifusión `239.255.1.1:1234`
- `http://your-server-address:8000/http/example.com/travel-channel` - recibe el flujo HTTP de `http://example.com/travel-channel`

## Alias de canales[](/es/misc/tools-and-utilities/astra-http-relay#channel-aliases)

Los alias de canal permiten utilizar el nombre corto en lugar de la dirección completa. Ejemplo de lista de alias:

```
-- /etc/astra/relay.conf

channels = {
    ["demo"] = "udp://239.255.1.1:1234",
    ["travel-channel"] = "http://example.com/travel-channel"
}
```

Lanzar relé con ruta a la lista de alias:

```
astra --relay -p 8000 --channels /etc/astra/relay.conf
```

Los canales del ejemplo anterior estarán disponibles:

- `http://your-server-address:8000/demo` - Flujo UDP
- `http://your-server-address:8000/travel-channel` - Flujo HTTP

## Estadísticas[](/es/misc/tools-and-utilities/astra-http-relay#statistics)

Estadísticas es una página simple con sesiones activas contienen la siguiente información:

- Dirección IP del cliente
- Ruta de solicitud - alias o dirección completa del canal de origen
- Tiempo de actividad
- Enlace para cerrar la sesión

Para ver las estadísticas, ábralas en su navegador: `http://your-server-address:8000/stat/`
