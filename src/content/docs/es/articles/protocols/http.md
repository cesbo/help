---
title: HTTP MPEG-TS
sidebar:
    order: 4
---

HTTP (Protocolo de Transferencia de Hipertexto) es un protocolo fundamental para cualquier intercambio de datos en la Web. Funciona como un protocolo de solicitud-respuesta en el modelo de computación cliente-servidor. En términos simples, un cliente HTTP, como un navegador web o un reproductor de medios, envía una solicitud a un servidor HTTP para obtener datos o realizar una acción.

Para una descripción detallada, consulte el estándar [RFC9112](https://www.rfc-editor.org/rfc/rfc9112){target="_blank"}.

## HTTP para Televisión Digital

Aunque HTTP se asocia principalmente con la entrega de páginas web en un navegador, también se utiliza para entregar Televisión Digital. En particular, el formato MPEG-TS a menudo se entrega a través de HTTP en un método conocido frecuentemente como "HTTP MPEG-TS". Este enfoque para transmitir televisión digital ha ganado popularidad debido a su simplicidad, compatibilidad y adaptabilidad a varias condiciones de red.

## Flujo de trabajo HTTP MPEG-TS

El flujo de trabajo HTTP MPEG-TS opera en un modelo cliente-servidor, igual que las operaciones HTTP tradicionales. La diferencia significativa radica en la naturaleza de los datos que se están transfiriendo.

En este flujo de trabajo, el cliente envía una solicitud HTTP GET al servidor, solicitando un flujo de medios específico. El servidor comienza a enviar el flujo MPEG-TS como respuesta a la solicitud HTTP del cliente. Este proceso es similar a descargar un archivo de internet, pero con una diferencia crucial: el archivo, en este caso, el flujo MPEG-TS, es teóricamente interminable.

## Ventajas de HTTP MPEG-TS

- Confiabilidad - HTTP MPEG-TS utiliza TCP, lo cual garantiza la entrega de datos al destino. Asegura que no se pierdan paquetes de datos durante la transmisión, conduciendo a transmisiones ininterrumpidas y de alta calidad
- Control de Acceso - HTTP MPEG-TS admite el control de acceso basado en autorización, no necesariamente requiere encriptación para proteger los datos transmitidos
- Soporte HTTPS - Para mayor seguridad, los flujos pueden ser transferidos con encriptación TLS usando HTTPS, ofreciendo una capa adicional de protección
- Soporte de Analíticas - Las sesiones pueden ser medidas para fines analíticos. Información como qué canales son los más populares, duraciones de visualización, y más pueden ser capturados, ayudando a los transmisores a tomar decisiones basadas en datos

## Desventajas de HTTP MPEG-TS

- Rendimiento - TCP es generalmente más lento que UDP debido a la naturaleza del protocolo, que incluye mecanismos para garantizar la entrega de datos. Estos mecanismos hacen que TCP sea más intensivo en recursos, lo que podría afectar el rendimiento del servidor o limitar la escalabilidad
- Latencia - Los flujos HTTP MPEG-TS pueden tener más latencia que UDP. El tiempo extra en establecer conexiones TCP y los mecanismos internos de corrección de errores del TCP pueden conducir a pequeños retrasos en la transmisión de datos
- Requisito de Estabilidad - Al igual que UDP, HTTP MPEG-TS requiere una red estable para recibir datos de manera oportuna
- Falta de Soporte de Multicast - HTTP MPEG-TS no puede ser multiplexado como UDP Multicast, que permite que un solo paquete sea enviado a múltiples destinatarios. Cada solicitud HTTP MPEG-TS debe ser atendida individualmente por el servidor, lo que podría limitar la escalabilidad, particularmente para transmisiones en vivo con muchos espectadores