---
title: HTTP MPEG-TS
date: 2023-06-13
sidebar:
    order: 4
---

HTTP (HyperText Transfer Protocol) es un protocolo que constituye el núcleo de cualquier intercambio de datos en la Web. Funciona como un protocolo de petición-respuesta en el modelo informático cliente-servidor. En términos sencillos, un cliente HTTP, como un navegador web o un reproductor multimedia, envía una petición a un servidor HTTP para obtener datos o realizar una acción.

Para una descripción detallada, consulte la norma [RFC9112](https://www.rfc-editor.org/rfc/rfc9112){target="_blank"}

## HTTP para TV digital[](https://help.cesbo.com/misc/articles/protocols/http#http-for-digital-tv)

Aunque HTTP se asocia principalmente con el servicio de páginas web en un navegador, también se utiliza en la distribución de televisión digital. En particular, el formato MPEG-TS se entrega a menudo a través de HTTP en un método frecuentemente denominado "HTTP MPEG-TS". Este método de transmisión de televisión digital ha ganado popularidad por su sencillez, compatibilidad y adaptabilidad a diversas condiciones de red.

## Flujo de trabajo HTTP MPEG-TS[](https://help.cesbo.com/misc/articles/protocols/http#http-mpeg-ts-workflow)

El flujo de trabajo HTTP MPEG-TS funciona según un modelo cliente-servidor, muy parecido a las operaciones HTTP tradicionales. La diferencia significativa radica en la naturaleza de los datos que se transfieren.

En este flujo de trabajo, el cliente envía una petición HTTP GET al servidor, solicitando un flujo multimedia específico. El servidor comienza a enviar el flujo MPEG-TS como respuesta a la solicitud HTTP del cliente. Este proceso es similar a la descarga de un archivo de Internet, pero con una diferencia crucial: el archivo, en este caso, el flujo MPEG-TS, es teóricamente infinito.

## Ventajas de HTTP MPEG-TS[](https://help.cesbo.com/misc/articles/protocols/http#advantages-of-http-mpeg-ts)

- Fiabilidad - HTTP MPEG-TS utiliza TCP, que garantiza la entrega de datos al destino. Asegura que no se pierda ningún paquete de datos durante la transmisión, lo que da lugar a flujos ininterrumpidos de alta calidad.
- Control de acceso - HTTP MPEG-TS admite el control de acceso basado en la autorización, no requiere necesariamente el cifrado para proteger los datos transmitidos
- Compatibilidad con HTTPS: para mayor seguridad, los flujos pueden transferirse con cifrado TLS mediante HTTPS, lo que ofrece una capa adicional de protección.
- Soporte analítico - Las sesiones pueden medirse con fines analíticos. Se puede capturar información como qué canales son los más populares, la duración de los visionados, etc., lo que ayuda a las cadenas a tomar decisiones basadas en datos.

## Desventajas de HTTP MPEG-TS[](https://help.cesbo.com/misc/articles/protocols/http#disadvantages-of-http-mpeg-ts)

- Rendimiento - TCP suele ser más lento que UDP debido a la naturaleza del protocolo, que incluye mecanismos para garantizar la entrega de datos. Estos mecanismos hacen que TCP consuma más recursos, lo que puede afectar al rendimiento del servidor o limitar su escalabilidad.
- Latencia - Los flujos HTTP MPEG-TS pueden tener más latencia que UDP. El tiempo extra empleado en establecer conexiones TCP y los mecanismos de corrección de errores incorporados de TCP pueden provocar ligeros retrasos en la transmisión de datos
- Requisito de estabilidad: al igual que UDP, HTTP MPEG-TS requiere una red estable para recibir los datos a tiempo.
- Falta de compatibilidad con multidifusión - HTTP MPEG-TS no puede multiplexarse como la multidifusión UDP, que permite enviar un solo paquete a varios destinatarios. Cada solicitud HTTP MPEG-TS tiene que ser servida individualmente por el servidor, lo que limita potencialmente la escalabilidad, sobre todo en emisiones en directo con muchos espectadores.
