---
title: TLS certificate for HTTPS
date: 2025-01-04
sidebar:
    order: 12
---

Se requiere un certificado TLS para habilitar HTTPS en la interfaz web de Astra y la entrega de medios. El certificado se utiliza para cifrar los datos transmitidos entre el servidor y el cliente, garantizando una comunicación segura.

## Configuración

Puedes obtener un certificado TLS con [Dehydrated](/en/articles/tools-and-utilities/dehydrated) de forma gratuita.

En la interfaz web de Astra, navega a `Settings` → `General` → `HTTP Server` y establece las rutas a los archivos del certificado y de la clave privada.

![Certificado TLS](https://cdn.cesbo.com/help/astra/delivery/http-hls/https/tls-certificate.png)

La opción `Disable TLS for primary port` te permite deshabilitar HTTPS para la interfaz web y la API.

## HTTP Play

Una vez que actives HTTPS, también se habilitará para el HTTP Play. Para deshabilitar HTTPS en el HTTP Play, puedes usar la opción `Disable TLS on HTTP Play port` en `Settings` → `HTTP Play`.

![Opciones de HTTP Play](https://cdn.cesbo.com/help/astra/delivery/http-hls/https/http-play.png)

## Configuración de salida

Si configuras HTTP manualmente, puedes usar `https://0:443/custom-path` como la URL de salida.