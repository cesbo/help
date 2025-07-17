---
title: RTSP
sidebar:
    order: 5
---

RTSP (Protocolo de Transmisión en Tiempo Real) es un protocolo de red a nivel de aplicación que gestiona flujos de transporte multimedia sobre protocolos de transporte adecuados. Se utiliza principalmente en sistemas de entretenimiento y comunicaciones para controlar servidores multimedia. El protocolo establece y gestiona sesiones de medios entre puntos finales para la transmisión de medios en tiempo real, ya sea desde el servidor hacia un cliente o viceversa.

Para una descripción detallada, consulte el estándar [RFC 7826](https://www.rfc-editor.org/rfc/rfc7826){target="_blank"}.

## RTP

Mientras que RTSP gestiona el control de los flujos de medios, delega la transmisión real de datos en streaming a otros protocolos. La mayoría de los servidores RTSP utilizan el Protocolo de Transporte en Tiempo Real (RTP) junto con el Protocolo de Control en Tiempo Real (RTCP).

RTP es un protocolo de red empleado para la entrega de audio y video sobre redes IP y se utiliza típicamente en sistemas que involucran medios en streaming, como la telefonía, aplicaciones de videoconferencia como WebRTC, y servicios de televisión.

## Transmisión de Cámaras IP

Una de las aplicaciones más frecuentes de RTSP es en la transmisión de cámaras IP. Las cámaras IP, a menudo empleadas en sistemas de vigilancia, generalmente se basan en RTSP para transmitir feeds de video en vivo.

En un escenario típico, una cámara IP actúa como un servidor RTSP. La cámara captura video, luego codifica y empaqueta los datos de video para enviarlos a través de la red. Un usuario final o sistema — el cliente RTSP.