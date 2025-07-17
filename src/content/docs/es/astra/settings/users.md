---
title: Managing Users
sidebar:
    order: 17
---

Astra cuenta con un sistema de gestión de usuarios sencillo con tres tipos de usuarios distintos, diseñado para satisfacer las necesidades de los administradores, el soporte técnico y los usuarios finales.

## Roles de Usuario

En Astra, hay tres roles principales de usuario, cada uno con diferentes niveles de acceso y funcionalidad:

- `Admin` - Este rol otorga acceso completo para gestionar y controlar Astra tanto a través de la interfaz web como de la API. Los administradores pueden ver y modificar todas las configuraciones y ajustes según sea necesario.
- `Observer` - Este rol permite acceso de solo lectura al panel de la interfaz web y a la API. Los observadores pueden monitorear el sistema, pero no pueden realizar cambios en las configuraciones o ajustes.
- `User` - Este rol de usuario regular está diseñado para controlar el acceso a contenido multimedia con autenticación HTTP integrada.

## Lista de Usuarios

En la interfaz web de Astra, puedes acceder a la lista de usuarios navegando a Configuración → Usuarios

![Lista de Usuarios](https://cdn.cesbo.com/help/astra/admin-guide/settings/users/users.png)

La lista de usuarios se presenta como una tabla con los siguientes campos:

- `Login` - nombre de usuario único para cada usuario
- `Comment` - cualquier nota o comentario adicional sobre el usuario
- `Type` - rol asignado al usuario
- `Created` - fecha en la que se creó la cuenta del usuario

Cuando la autenticación HTTP integrada para controlar el acceso a medios está activada, campos adicionales estarán disponibles en la lista de usuarios:

- `IP` - dirección IP del dispositivo permitido para el usuario, desde la cual se permite el acceso al contenido multimedia
- `Expiration` - fecha hasta la cual la cuenta del usuario permanece activa

## Nuevo Usuario

Para crear un nuevo usuario, abre la lista de Usuarios navegando a Configuración → Usuarios. Haz clic en el botón "Nuevo Usuario" ubicado en la parte superior de la lista.

![Nuevo Usuario](https://cdn.cesbo.com/help/astra/admin-guide/settings/users/new-user.png)

Al crear un nuevo usuario, deberás completar los siguientes campos:

- `Enable` - el usuario está habilitado por defecto
- `Login` - nombre de usuario único
- `Password` - opcionalmente, establece una contraseña para la cuenta
- `Comment` - opcionalmente, agrega cualquier nota o comentario adicional sobre el usuario
- `Type` - tipo de usuario adecuado

## Autenticación HTTP Integrada

La autenticación HTTP integrada en Astra ayuda a controlar el acceso al contenido multimedia proporcionado. Puedes habilitar esta función navegando a Configuración → Autenticación HTTP en la interfaz web de Astra.

Cuando la autenticación HTTP está activa, las opciones de usuario incluyen campos opcionales adicionales:

![Opciones de Usuario HTTP Auth](https://cdn.cesbo.com/help/astra/admin-guide/settings/users/user-auth.png)

- `Token` - secreto estático, generalmente utilizado para otorgar acceso a otros servidores, como transcodificadores u otros transmisores de medios. El token simplemente se adjunta a la dirección del canal, como: `http://example.com/channel-id/index.m3u8?token=secret`
- `IP` - dirección IP estática para el dispositivo permitido. Por defecto, se permite cualquier IP.
- `Expiration` - fecha hasta la cual la cuenta del usuario permanece activa. Por defecto, no hay límite de tiempo para la cuenta.
- `Limit connections` - número de conexiones simultáneas permitidas para el usuario. Por defecto, no hay límites de conexión.
- `Packages` - haz clic en "Nuevo Paquete" para agregar una categoría de canal al usuario. El usuario solo tendrá acceso a los canales relacionados con la categoría especificada. Nuevas categorías pueden crearse en Configuración → Grupos. Por defecto, todos los canales están disponibles para el usuario.

Lee más sobre la [Autenticación de Usuarios Integrada](/en/astra/delivery-http/auth-user/) y otras [opciones de Autenticación HTTP](/en/astra/delivery-http/auth/).