---
title: General Settings
sidebar:
    order: 2
---

La configuración general en Astra abarca una colección de opciones de configuración esenciales que te permiten personalizar y optimizar la configuración de tu software. Estas opciones aseguran una experiencia de transmisión fluida gestionando aspectos como la integración con InfluxDB, la configuración del servidor HTTP y las opciones de transmisión predeterminadas.

## Opciones de Monitorización

![Opciones de Monitorización](https://cdn.cesbo.com/help/astra/admin-guide/settings/general/monitoring.png)

### Integración con InfluxDB

Las opciones de integración con InfluxDB en Astra te permiten configurar la conexión entre Astra e InfluxDB para almacenar estadísticas relacionadas con las transmisiones y adaptadores.

- `Instance Name` - nombre del almacén de datos. Por defecto, Astra utiliza InfluxDB
- `InfluxDB Address` - dirección del almacén adjunto. Por defecto, la dirección de InfluxDB es: `http://db-server:8086`
- `InfluxDB Organization` - nombre de tu organización en la configuración de InfluxDB
- `InfluxDB Token` - si necesitas conectar una interfaz externa, entonces necesitas ingresar el token de API desde el portapapeles

Para una guía detallada, consulta [Integración de Astra con InfluxDB](/en/astra/monitoring/influxdb/)

### Webhook del Analizador

La característica de Monitorización en Astra es una opción heredada que permite enviar datos de eventos, como estadísticas de transmisiones y adaptadores, a través de solicitudes HTTP POST a servicios externos.

Lee más en: [Exportar Eventos de Monitorización](/en/astra/monitoring/export-monitoring-events/)

### Webhook de Sesiones

Exportación de eventos al cerrar sesiones.

- `URL` - URL del webhook para enviar eventos
- `Minimal Session Time` - duración mínima de la sesión en segundos para enviar eventos. Si la sesión dura menos que este tiempo, no se enviará ningún evento

## Opciones del Servidor HTTP

![Opciones del Servidor HTTP](https://cdn.cesbo.com/help/astra/admin-guide/settings/general/http-server.png)

Las Opciones del Servidor HTTP en Astra te permiten configurar el servidor HTTP para proporcionar acceso al contenido multimedia utilizando los protocolos HTTP MPEG-TS o HLS.

- `HTTP Access Log` - ruta completa al archivo para escribir el log de solicitudes
- `HTTP Sessions` - permite sesiones HTTP para autenticar y rastrear la actividad del usuario. Cuando está habilitado, el ítem "Sesiones" aparece en el menú principal para ver todas las sesiones activas. Opciones habilitadas por defecto
- `Sessions Backend Address` - webhook para exportar información sobre las sesiones al finalizar
- `Minimal Session Time` - enviar información del webhook sobre sesiones que duren más del tiempo mínimo.

Para habilitar HTTPS, configura las siguientes opciones:

- `TLS certificate chain` - ruta completa a la cadena de certificados. Por ejemplo: `/etc/dehydrated/certs/example.com/fullchain.pem`
- `TLS certificate key` - ruta completa a la clave del certificado. Por ejemplo: `/etc/dehydrated/certs/example.com/privkey.pem`
- `Disable TLS on primary port` - marca esta opción si deseas que el puerto primario, definido por el argumento de línea de comando `-p PORT`, funcione sin HTTPS

Puedes obtener un certificado gratuito de Let's Encrypt. Para una guía detallada, consulta [Certificado HTTPS con Dehydrated](/en/articles/tools-and-utilities/dehydrated/)

## Opciones de Transmisión Predeterminadas

![Opciones de Transmisión Predeterminadas](https://cdn.cesbo.com/help/astra/admin-guide/settings/general/stream.png)

Estas configuraciones son globales para todas las transmisiones (a menos que se anulen en la configuración de la transmisión)

- `Start stream on demand` - activa transmisiones en presencia de clientes HTTP. Habilitado por defecto
- `HTTP Keep Active` - define el tiempo en segundos, durante el cual la transmisión estará activa, a pesar de la ausencia de clientes. Por defecto es 0 - apaga el canal inmediatamente cuando el último cliente cierra la sesión
- `Backup Start Delay` - establece un retraso en segundos antes de cambiar a una fuente de respaldo
- `Backup Return Delay` - establece un retraso en segundos antes de volver a la fuente anterior
- `Default codepage` - define la página de códigos para la información de la transmisión en SDT
- `Service provider` - el nombre de tu empresa. Se utiliza en la descripción de la transmisión SDT
- `Network name` - nombre de la red del proveedor. Se utiliza en la descripción de la transmisión SDT
- `TCP Congestion Control` - define el algoritmo de operación para TCP CC
- `CC Limit` - establece un límite en la cantidad de errores CC en la fuente. Después de superar este límite - la fuente se considerará no operativa
- `Use multithreading for UDP receiving and transmitting` - lanza hilos separados para procesar sockets UDP, activado por defecto
- `Bind DVB adapters by MAC` - utiliza direcciones MAC de DVB para vincular adaptadores configurados al dispositivo del sistema

## Opciones de Adaptador Predeterminadas

![Opciones de Adaptador Predeterminadas](https://cdn.cesbo.com/help/astra/admin-guide/settings/general/adapter.png)

Estas configuraciones son globales para todos los adaptadores (a menos que se anulen en la configuración del adaptador)

- `Bind DVB adapters by MAC` - utiliza direcciones MAC de DVB para vincular adaptadores configurados al dispositivo del sistema

:::note
Después de guardar la configuración general, Astra se reinicia
:::