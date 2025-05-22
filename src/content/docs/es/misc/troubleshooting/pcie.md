---
title: "Error de bus PCIe"
date: 2023-08-02
sidebar:
    order: 6
---

Los adaptadores DVB pueden dejar de funcionar con el tiempo, o trabajar con problemas como errores de CC y resintonización de señal. Estas señales de mal funcionamiento podrían reflejarse como el siguiente error en el dmesg:

```
pcieport 0000:00:1c.3: PCIe Bus Error: severity=Corrected, type=Physical Laye
```

Normalmente, este error se produce como resultado de que la Gestión de Energía en Estado Activo (ASPM) del sistema intenta reducir el suministro de energía al puerto PCIe.

## Desactivar ASPM[](https://help.cesbo.com/misc/troubleshooting/dvb/pcie#disable-aspm)

En los servidores recomendamos desactivar la gestión de energía.

Abrir expediente `/etc/default/grub` en cualquier editor de texto y busque la línea que empieza por:

```
GRUB_CMDLINE_LINUX_DEFAULT=
```

añadir el parámetro `pcie_aspm=off`:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash pcie_aspm=off"
```

Guarde el archivo y aplique los cambios:

```
sudo update-grub
```

Reinicie su servidor
