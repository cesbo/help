---
title: Web Interface
description: Access and navigate Astra Web Interface to manage streams, adapters, and system settings
sidebar:
    order: 4
---

Astra proporciona una interfaz web que puedes utilizar para gestionar y configurar el software.

## Accediendo a la Interfaz Web

La interfaz web funciona bien en estos navegadores: Firefox, Chrome o Safari.

El puerto predeterminado para la interfaz web es el 8000. Para acceder a la interfaz web, ingresa la siguiente URL en tu navegador web: `http://your-server-address:8000`, donde your-server es la dirección IP o el nombre del host del servidor donde Astra está instalado.

## Inicio de Sesión en la Interfaz Web

![Inicio de Sesión en la Interfaz Web](https://cdn.cesbo.com/help/astra/getting-started/web-interface/login.png)

Usuario y contraseña predeterminados: `admin`. Recomendamos cambiar la contraseña por defecto a una más segura para prevenir accesos no autorizados.

## Resumen de la Interfaz

![Panel de Control](https://cdn.cesbo.com/help/astra/getting-started/web-interface/dashboard.png)

1. `Dashboard` - el panel de control presenta actualizaciones de estado en tiempo real para todos los Streams y Adaptadores DVB. Al hacer clic en una tarjeta, abrirás las opciones del objeto.
2. `Main Menu` - es un centro central de la interfaz de Astra. Proporciona a los usuarios una fácil navegación entre diferentes funciones.
3. `Sessions` - proporciona una lista de todas las sesiones activas para clientes HTTP/HLS.
4. `Settings` - lista de todas las configuraciones de Astra, como gestión de usuarios, autenticación HTTP, configuraciones generales de Astra, etc. Aprende más en [Configuraciones de Astra](/en/astra/settings/)
5. `Log` - mensajes en tiempo real sobre el estado del software Astra. Aprende más en [Logs de Astra](/en/astra/logs/)
6. `Search` - búsqueda rápida para streams y adaptadores. La función de búsqueda se puede acceder presionando la tecla `S`.
7. `New Adapter` - configura un nuevo Adaptador DVB para recibir señales de redes DVB, incluidas fuentes satelitales, de cable o terrestres. Aprende más sobre la sintonización y configuración de DVB en las guías [Recibiendo DVB](/en/astra/adapters/)
8. `New Stream` - agrega un nuevo Stream para recibir canales desde fuentes HTTP, UDP, RTSP y DVB. Aprende más sobre cómo crear nuevos streams y opciones de stream en la Guía de Administración [Configuraciones de Astra Stream](/en/astra/streams/)
9. `View` - personaliza el tema de la interfaz y la configuración del panel de control, como la agrupación, ordenación y filtrado de streams y adaptadores DVB.