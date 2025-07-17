---
title: Troubleshooting
sidebar:
    order: 90
---

Guía detallada sobre la solución de problemas de recepción DVB, cubriendo aspectos esenciales como la calidad de la señal, tasas de error, configuración de equipos e interferencias. Aprende consejos prácticos y técnicas para diagnosticar y resolver problemas comunes, asegurando una experiencia de visualización de TV digital sin interrupciones.

## Todo funciona bien hasta que se reinicia el servidor

El problema más común con los adaptadores DVB es que dejan de funcionar después de que se reinicia el servidor. Probablemente el kernel de Linux se ha actualizado automáticamente o manualmente. Intenta reinstalar el controlador.

## falló al abrir frontend: No existe tal archivo o directorio

El primer paso es verificar si los adaptadores DVB están presentes en el sistema usando el comando:

```sh
ls /dev/dvb
```

Si el comando muestra un mensaje de error "No such file or directory", lo primero que debes hacer es verificar si el hardware está disponible para el sistema usando el comando:

```sh
lspci | grep Multimedia
```

Si los adaptadores están correctamente conectados al slot PCIe, deberías ver un listado de los adaptadores PCIe como este:

```
01:00.0 Multimedia controller: Digital Devices GmbH Cine V7
```

Intenta reinstalar el controlador. Si esto no ayuda, por favor contacta al fabricante del hardware.

## falló al abrir frontend: Dispositivo o recurso ocupado

El adaptador está siendo usado por otro proceso. Quizás Astra se inició dos veces.

Puedes comprobar qué proceso utiliza Astra con el siguiente comando:

```sh
lsof | grep adapter0
```

Ejemplo de salida:

```
astra 23068 ... /dev/dvb/adapter31/dvr0
astra 23068 ... /dev/dvb/adapter31/frontend0
```

- `astra` - nombre del proceso
- `23068` - PID del proceso
- `/dev/dvb/adapter32/...` - ruta al adaptador

## La señal está bien, pero los canales no funcionan

Este problema es común en adaptadores de DigitalDevices. Verifica la salida de dmesg para errores i2c:

```sh
dmesg | grep i2c
```

si ves mensajes como i2c_write error, entonces desactiva MSI (Interrupciones Señaladas por Mensaje) en el controlador:

Abre el archivo `/etc/modprobe.d/ddbridge.conf` en cualquier editor de texto. Encuentra la línea `options ddbridge`. Después de `ddbridge` añade la opción `msi=0`. Por ejemplo:

```
options ddbridge msi=0 fmode=1
```

## Error de Bus PCIe

Los adaptadores DVB pueden dejar de funcionar con el tiempo o funcionar con problemas como errores CC y retuneo de señal. Estas señales de mal funcionamiento podrían reflejarse en el siguiente error en el dmesg:

```
pcieport 0000:00:1c.3: PCIe Bus Error: severity=Corrected, type=Physical Laye
```

Normalmente, este error ocurre como resultado de que el sistema intenta reducir el suministro de energía al puerto PCIe mediante la Gestión de Energía en Estado Activo (ASPM).

## Desactivar ASPM

En los servidores recomendamos desactivar la gestión de energía.

Abre el archivo `/etc/default/grub` en cualquier editor de texto y encuentra la línea que comience con:

```
GRUB_CMDLINE_LINUX_DEFAULT=
```

añade el parámetro `pcie_aspm=off`:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash pcie_aspm=off"
```

Guarda el archivo y aplica los cambios:

```
sudo update-grub
```

Reinicia tu servidor

## Arranque Seguro

Si la carpeta `/dev/dvb` está vacía o no se encuentra, intenta iniciar el controlador manualmente. Ejecuta en tu consola:

```
modprobe dvb-core
```

Si obtienes el error:

```
modprobe: ERROR: could not insert 'dvb_core': Required key not available
```

Este mensaje de error está relacionado con el Arranque Seguro.

1. Reinicia tu sistema y entra en la configuración del BIOS/UEFI.
2. Navega a la página de configuración de Arranque Seguro (la posición exacta varía según el fabricante y la versión de BIOS/UEFI).
3. Desactiva la opción de Arranque Seguro.
4. Guarda los cambios y sal.
5. Arranca de nuevo en Linux y verifica los adaptadores con `ls /dev/dvb`

## cxd2878: Error SLtoAIT_BandSetting

Este error puede aparecer en el log de dmesg para los adaptadores DVB TBS 6209SE. Para resolver este problema, establece el parámetro de Ancho de Banda en las configuraciones del Adaptador DVB, en la pestaña Avanzada:

- 8MHz para DVB-T o DVB-T2
- 6MHz para ISDB-T