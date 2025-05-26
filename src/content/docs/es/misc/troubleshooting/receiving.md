---
title: "Problemas de recepción DVB"
date: 2023-02-28
sidebar:
    order: 5
---

Guía detallada sobre la solución de problemas de recepción DVB, que cubre aspectos esenciales como la calidad de la señal, las tasas de error, la configuración del equipo y las interferencias. Aprenda consejos prácticos y técnicas para diagnosticar y resolver los problemas más comunes, garantizando una experiencia de visionado de TV digital sin interrupciones.

## Todo funciona bien hasta que se reinicia el servidor[](/es/misc/troubleshooting/receiving#all-works-fine-until-server-reboot)

Probablemente el kernel de Linux ha sido actualizado con autoupdate o manualmente. Intente reinstalar el controlador.

## Error al abrir el frontend: Dispositivo o recurso ocupado[](/es/misc/troubleshooting/receiving#failed-to-open-frontend-device-or-resource-busy)

El adaptador está ocupado por otro proceso. Tal vez Astra se inició dos veces.

Puede comprobar qué proceso utiliza Astra con el siguiente comando:

```
lsof | grep adapter0
```

Ejemplo de salida:

```
astra 23068 ... /dev/dvb/adapter31/dvr0
astra 23068 ... /dev/dvb/adapter31/frontend0
```

- `astra` - nombre del proceso
- `23068` - proceso PID
- `/dev/dvb/adapter32/...` - ruta al adaptador

## Error al abrir el frontend: No such file or directory[](/es/misc/troubleshooting/receiving#failed-to-open-frontend-no-such-file-or-directory)

El primer paso es comprobar si los adaptadores DVB están presentes en el sistema utilizando el comando:

```
ls /dev/dvb
```

Si el comando muestra un mensaje de error "No such file or directory", lo primero que hay que hacer es comprobar si el hardware está disponible para el sistema que utiliza el comando:

```
lspci | grep Multimedia
```

Si los adaptadores están correctamente conectados a la ranura PCIe, deberías ver un listado de los adaptadores PCIe como este:

```
01:00.0 Multimedia controller: Digital Devices GmbH Cine V7
```

Intente reinstalar el controlador. Si esto no ayuda, póngase en contacto con el proveedor de hardware.

## La señal está bien, pero los canales no funcionan[](/es/misc/troubleshooting/receiving#signal-is-fine-but-channels-not-working)

Este problema es común para los adaptadores de DigitalDevices. Compruebe la salida dmesg para errores i2c:

```
dmesg | grep i2c
```

si ves mensajes como i2c\_write error entonces desactiva MSI (Message Signaled Interrupts) en el driver:

Abrir expediente `/etc/modprobe.d/ddbridge.conf` en cualquier editor de texto. Buscar línea `options ddbridge`. Después de la `ddbridge` añadir `msi=0` opción. Por ejemplo:

```
options ddbridge msi=0 fmode=1
```

## cxd2878: SLtoAIT\_BandSetting error[](/es/misc/troubleshooting/receiving#cxd2878-sltoait_bandsetting-error)

Este error puede aparecer en el registro dmesg para los adaptadores DVB TBS 6209SE. Para resolver este problema, ajuste el parámetro Ancho de banda en la configuración del adaptador DVB, en la pestaña Avanzado:

- 8 MHz para DVB-T o DVB-T2
- 6 MHz para RDSI-T
