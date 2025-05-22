---
title: "Interfaz web"
date: 2023-02-22
sidebar:
    order: 5
---

Astra proporciona una interfaz web que puedes utilizar para gestionar y configurar el software.

## Acceso a la Interfaz Web[](https://help.cesbo.com/astra/getting-started/first-steps/web-interface#accessing-the-web-interface)

La Interfaz Web funciona bien en los siguientes navegadores: Firefox, Chrome o Safari.

El puerto por defecto para la interfaz web es 8000. Para acceder a la interfaz web, introduzca la siguiente URL en su navegador web: `http://your-server-address:8000`donde tu-servidor es la dirección IP o el nombre de host del servidor donde está instalado Astra.

## Iniciar sesión en la interfaz web[](https://help.cesbo.com/astra/getting-started/first-steps/web-interface#login-to-web-interface)

![Inicio de sesión en la interfaz web](https://cdn.cesbo.com/help/astra/getting-started/web-interface/login.png)

Nombre de usuario y contraseña por defecto: `admin`. Recomendamos cambiar la contraseña por defecto por una más segura para evitar accesos no autorizados.

## Interfaz[](https://help.cesbo.com/astra/getting-started/first-steps/web-interface#interface-overview)

![Cuadro de mandos](https://cdn.cesbo.com/help/astra/getting-started/web-interface/dashboard.png)

1. `Dashboard` - el tablero presenta actualizaciones de estado en tiempo real para todos los Canales y Adaptadores DVB. Al hacer clic en una tarjeta, se abren las opciones del objeto.
2. `Main Menu` - es el eje central de la interfaz de Astra. Facilita a los usuarios la navegación entre las distintas funciones
3. `Sessions` - proporciona una lista de todas las sesiones activas para clientes HTTP/HLS
4. `Settings` - Lista de todos los ajustes de Astra, como la gestión de usuarios, la autenticación HTTP, los ajustes generales de Astra, etc. Más información en [Ajustes Astra](https://help.cesbo.com/astra/admin-guide/settings)
5. `Log` - mensajes en tiempo real sobre el estado del software Astra. Más información en [Troncos Astra](https://help.cesbo.com/astra/admin-guide/log)
6. `Search` - Búsqueda rápida de canales y adaptadores. Se puede acceder a la función de búsqueda pulsando la tecla `S` clave
7. `New Adapter` - configurar un nuevo Adaptador DVB para recibir señales de redes DVB, incluidas fuentes por satélite, cable o terrestres. Obtenga más información sobre la sintonización y configuración DVB en la sección [Recepción DVB](https://help.cesbo.com/astra/receiving/dvb) guías
8. `New Stream` - añadir un nuevo Stream para recibir canales desde fuentes HTTP, UDP, RTSP y DVB. Más información sobre la creación de un nuevo flujo y las opciones de flujo en la Guía del administrador [Ajustes de Astra Stream](https://help.cesbo.com/astra/admin-guide/stream)
9. `View` - personalizar el tema de la interfaz y la configuración del panel de control, como la agrupación, el orden y el filtrado de canales y adaptadores dvb
