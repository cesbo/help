---
title: "Resolve issue with Unsupported SFP+ module"
date: 2023-06-23
sidebar:
    order: 13
---

Es posible que experimente un problema con los módulos SFP+ en el adaptador Intel 10G, donde la tarjeta no logra iniciar el módulo SFP+, mostrando el siguiente mensaje de error en `dmesg`:

```
ixgbe 0000:02:00.1: failed to load because an unsupported SFP+ module type was detected.
```

## Solución

Descargue el controlador:

```
rmmod ixgbe
```

Cargue el controlador con la opción `allow_unsupported_sfp=1`:

```
modprobe ixgbe allow_unsupported_sfp=1
```

Si la interfaz de red se ha iniciado correctamente, puede configurar la red y verificar que funciona correctamente.

### Varias interfaces de red

Si hay varias interfaces de red, puede ser necesario escribir 1 para cada una de ellas, esto se hace por el número y separado por comas. Para cuatro interfaces, la opción se verá así:

```
modprobe ixgbe allow_unsupported_sfp=1,1,1,1
```

## Guardar opción

La solución anterior solo es para pruebas y se eliminará después de reiniciar el servidor. Para una configuración permanente, pase la opción al kernel a través del cargador de arranque grub.

Abra el archivo `/etc/default/grub` en cualquier editor de texto y encuentre la línea que comience con:

```
GRUB_CMDLINE_LINUX_DEFAULT=
```

agregue el parámetro `ixgbe.allow_unsupported_sfp=1`:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash ixgbe.allow_unsupported_sfp=1"
```

Guarde el archivo y aplique los cambios:

```
sudo update-grub
```

Reinicie su servidor.