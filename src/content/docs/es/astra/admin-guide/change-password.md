---
title: Change password to Astra Web Interface
sidebar:
    order: 5
---

Para administrar la interfaz de Astra, puedes cambiar la contraseña de cualquier usuario a través del menú de la interfaz. Para realizar esta acción, necesitas:

1. Abrir el menú Configuración y elegir Usuarios. Esto te llevará a la página de Usuarios, donde puedes ver una lista de todos los usuarios.
2. Seleccionar el usuario cuya contraseña deseas cambiar.
3. Ingresar la nueva contraseña y hacer clic en Aplicar.

Si has cambiado tu propia contraseña, la interfaz web de Astra se recargará y se te solicitará iniciar sesión con tu nueva contraseña.

## Restablecer contraseña

La contraseña de la interfaz de Astra también se puede cambiar mediante el comando de la consola del servidor:

```
astra --reset-password
```

Luego necesitas ingresar los siguientes detalles:

- Puerto de tu interfaz web (por defecto es 8000)
- Inicio de sesión del usuario
- Nueva contraseña