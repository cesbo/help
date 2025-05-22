---
title: "RTSP"
date: 2023-06-13
sidebar:
    order: 5
---

RTSP (Real-Time Streaming Protocol) es un protocolo de red a nivel de aplicación que gestiona flujos de transporte multimedia a través de protocolos de transporte adecuados. Se utiliza principalmente en sistemas de entretenimiento y comunicaciones para controlar servidores multimedia. El protocolo establece y gestiona sesiones multimedia entre extremos para el streaming multimedia en tiempo real, ya sea del servidor a un cliente o viceversa.

Para una descripción detallada, consulte la norma [RFC 7826](https://www.rfc-editor.org/rfc/rfc7826){target="_blank"}

## RTP[](https://help.cesbo.com/misc/articles/protocols/rtsp#rtp)

Mientras que el RTSP gestiona el control de los flujos multimedia, delega la transmisión real de los datos de streaming en otros protocolos. La mayoría de los servidores RTSP utilizan el Protocolo de Transporte en Tiempo Real (RTP) junto con el Protocolo de Control en Tiempo Real (RTCP).

RTP es un protocolo de red empleado para la entrega de audio y vídeo a través de redes IP y se utiliza normalmente en sistemas que implican streaming de medios, como telefonía, aplicaciones de videoconferencia como WebRTC y servicios de televisión.

## Streaming de cámaras IP[](https://help.cesbo.com/misc/articles/protocols/rtsp#ip-camera-streaming)

Una de las aplicaciones más frecuentes de RTSP es el streaming de cámaras IP. Las cámaras IP, utilizadas a menudo en sistemas de vigilancia, suelen utilizar RTSP para transmitir vídeo en directo.

En un escenario típico, una cámara IP actúa como servidor RTSP. La cámara captura vídeo y, a continuación, codifica y empaqueta los datos de vídeo para enviarlos a través de la red. Un usuario final o sistema - el cliente RTSP.
