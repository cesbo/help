---
title: "Resolver el problema con el módulo SFP+ no compatible"
date: 2023-06-23
sidebar:
    order: 13
---

Es posible que experimente un problema con los módulos SFP+ en el adaptador Intel 10G, donde la tarjeta no puede iniciar el módulo SFP+, mostrando el siguiente mensaje de error en dmesg:

```
ixgbe 0000:02:00.1: failed to load because an unsupported SFP+ module type was detected.
```

## Solución[](https://help.cesbo.com/misc/articles/hardware/unsupported-sfp-module#solution)

Descarga el conductor:

```
rmmod ixgbe
```

Cargar controlador con opción `allow_unsupported_sfp=1`:

```
modprobe ixgbe allow_unsupported_sfp=1
```

Si la interfaz de red se ha iniciado correctamente, puede configurar la red y comprobar que funciona correctamente.

### Varias interfaces de red

Si hay varios interfaces de red, puede ser necesario escribir 1 para cada uno de ellos, esto se hace por el número y separados por comas. Para cuatro interfaces, la opción tendrá este aspecto:

```
modprobe ixgbe allow_unsupported_sfp=1,1,1,1
```

## Opción Guardar[](https://help.cesbo.com/misc/articles/hardware/unsupported-sfp-module#save-option)

La solución anterior sólo para la prueba y se vacía después de reiniciar el servidor. Para una configuración permanente pase la opción al kernel a través del gestor de arranque grub.

Abrir expediente `/etc/default/grub` en cualquier editor de texto y busque la línea que empieza por:

```
GRUB_CMDLINE_LINUX_DEFAULT=
```

añadir el parámetro `ixgbe.allow_unsupported_sfp=1`:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash ixgbe.allow_unsupported_sfp=1"
```

Guarde el archivo y aplique los cambios:

```
sudo update-grub
```

Reinicie su servidor
