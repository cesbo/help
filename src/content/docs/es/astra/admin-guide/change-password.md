---
title: "Cambiar la contraseña de la Interfaz Web de Astra"
date: 2023-02-22
sidebar:
    order: 4
---

Para administrar la interfaz de Astra, puede cambiar la contraseña de cualquier usuario a través del menú de la interfaz. Para realizar esta acción, necesita:

1. Abra el menú Configuración, seleccione Usuarios. Esto le llevará a la página Usuarios, donde podrá ver una lista de todos los usuarios.
2. Seleccione el usuario cuya contraseña desea cambiar.
3. Introduzca la nueva contraseña y haga clic en Aplicar.

Si has cambiado tu propia contraseña, la interfaz web de Astra se recargará y deberás iniciar sesión con tu nueva contraseña.

## Restablecer contraseña[](/es/astra/admin-guide/administration/change-password#reset-password)

La contraseña de la interfaz de Astra también se puede cambiar mediante el comando de la consola del servidor:

```
astra --reset-password
```

A continuación, deberá introducir los siguientes datos:

- Puerto de su interfaz web (por defecto es 8000)
- Inicio de sesión de usuario
- Nueva contraseña
