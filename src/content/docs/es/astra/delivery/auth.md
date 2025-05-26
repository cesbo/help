---
title: "Autorización HTTP"
data: 2023-06-19
image: https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/og-image.png
sidebar:
    order: 13
---

La autorización HTTP es un proceso por el que se concede a un usuario acceso a contenidos protegidos.

![Autenticación HTTP](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/diagram.svg)

## Flujo de trabajo de autorización[](/es/astra/delivery/auth#authorization-workflow)

Antes de profundizar en el proceso detallado de configuración de la autorización en Astra, es esencial comprender sus principios subyacentes.

![Lista de canales de televisión](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/step-1.svg)

El primer paso consiste en recibir la lista de canales de televisión del middleware. En este paso, el cliente envía sus credenciales al Middleware, que verifica su solicitud. Una vez obtenida la autorización, el middleware responde proporcionando al cliente una lista de canales de televisión a los que puede acceder. Cada canal tiene un token único que se utilizará posteriormente para autorizar el acceso.

![Solicitar canal](https://cdn.cesbo.com/help/astra/delivery/http-hls/auth/step-2.svg)

El segundo paso consiste en solicitar acceso al canal a Astra. Durante este paso, el cliente selecciona el canal deseado y el reproductor envía la solicitud con un token único al Astra.

El tercer paso es la autorización de la solicitud por parte de Astra. Astra soporta los siguientes métodos de autorización:

- [Autorización de usuario](/es/astra/delivery/user): Astra utiliza el nombre de usuario y la contraseña o un token único definido en la configuración de usuario.
- [Autorización del](/es/astra/delivery/middleware) Middleware - Astra inicia una subpetición al Middleware con un token único y toda la información relacionada con la petición.
- [HTTP Securetoken](/es/astra/delivery/securetoken) - Astra comprueba el token único con algoritmos criptográficos para validar el acceso
- [HTTP IP](/es/astra/delivery/ip) - Astra compara la dirección IP del usuario con una lista de acceso

Estos métodos ofrecen flujos de trabajo de autorización personalizables, lo que permite a los administradores controlar el acceso de forma segura.
