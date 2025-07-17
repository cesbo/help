---
title: Change Password to Alta Web Interface
sidebar:
    order: 2
---

La contraseña puede ser cambiada por el administrador. Hay dos maneras de hacerlo: a través de la interfaz web y el asistente de consola.

## Interfaz Web

El administrador puede cambiar la contraseña de cualquier usuario yendo a Configuración → Usuarios, luego seleccionando la cuenta del usuario y haciendo clic en el menú de acciones para elegir 'Restablecer Contraseña':

![web-reset-password](https://cdn.cesbo.com/help/alta/admin-guide/change-password/user-password.png)

## Asistente de Consola

Puedes usar el asistente de consola para restablecer tu propia contraseña. En tu servidor, ejecuta el siguiente comando:

```sh
alta reset-password
```

El asistente te pedirá los siguientes detalles:

- Nombre del Servicio
- Inicio de sesión del Usuario
- Nueva contraseña. Ten en cuenta que la contraseña no se muestra en la consola al escribirla

## Solución de Problemas

Si tienes algún problema con el asistente de consola, verifica los errores comunes:

### Servicio no encontrado

El servicio no está iniciado o está instalado en otro servidor

### Permiso denegado

El servicio tiene más privilegios que el asistente. Ejecuta el comando con sudo para elevar los privilegios:

```sh
sudo alta reset-password
```

### Usuario no encontrado

Usuario con el nombre definido no fue encontrado