---
title: "Instalación del controlador DigitalDevices"
date: 2023-02-23
sidebar:
    order: 13
---

DigitalDevices es un fabricante de hardware especializado en dispositivos DVB: sintonizadores, moduladores.

## Instalación de automóviles[](/es/misc/tools-and-utilities/dd-driver#auto-installation)

Puede instalar el controlador de forma automática o manual. Para instalar el controlador automáticamente, ejecútelo en la consola:

```
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-dd.sh | sh
```

Tras reiniciar el servidor, [compruebe](/es/misc/tools-and-utilities/dd-driver#check-driver) si el controlador se ha instalado correctamente.

## Instalación manual[](/es/misc/tools-and-utilities/dd-driver#manual-installation)

### Preparar el sistema

Para instalar los controladores necesarios privilegios de root:

```
sudo -s
```

Instale utilidades del sistema para crear controladores a partir del código fuente:

```
apt -y install \
    build-essential \
    patchutils \
    libproc-processtable-perl \
    linux-headers-$(uname -r) \
    git
```

Elimine los controladores de medios antiguos:

```
rm -rf /lib/modules/$(uname -r)/extra
rm -rf /lib/modules/$(uname -r)/kernel/drivers/media
rm -rf /lib/modules/$(uname -r)/kernel/drivers/staging/media
```

### Instale

Descargue el controlador más reciente del repositorio oficial:

```
git clone -b 0.9.37 --depth=1 https://github.com/DigitalDevices/dddvb /usr/src/dddvb
```

Cree los controladores e instálelos:

```
cd /usr/src/dddvb
make
make install
```

Actualizar las dependencias del dirver:

```
mkdir -p /etc/depmod.d
echo 'search extra updates built-in' | tee /etc/depmod.d/extra.conf
depmod -a
```

Cree la configuración del controlador para DigitalDevices MaxS8:

```
echo 'options ddbridge fmode=0' | tee /etc/modprobe.d/ddbridge.conf
```

Para MaxS8 disponibles los siguientes valores de fmode en lugar de 0:

- `fmode=0` - Modo de 4 sintonizadores (multiswitch interno desactivado)
- `fmode=1` - LNB cuádruple / salidas normales de multiconmutadores
- `fmode=2` - Quattro - LNB / salidas en cascada de conmutadores múltiples
- `fmode=3` - Salida Unicable LNB o JESS / Unicabel del multiconmutador

### Reiniciar el sistema

Para iniciar los controladores instalados, reinicie el sistema:

```
shutdown -r now
```

Tras reiniciar el servidor, [compruebe](/es/misc/tools-and-utilities/dd-driver#check-driver) si el controlador se ha instalado correctamente.

## Comprobar conductor[](/es/misc/tools-and-utilities/dd-driver#check-driver)

Para comprobar si el controlador se ha instalado correctamente, liste los adaptadores en el directorio dvb:

```
ls /dev/dvb
```

Deben listarse todos los adaptadores instalados en el sistema. Por ejemplo:

```
adapter0 adapter1 adapter2 adapter3 ...
```

## Solución de problemas[](/es/misc/tools-and-utilities/dd-driver#troubleshooting)

Si tiene algún problema con sus adaptadores DVB, consulte [Solución de problemas DVB](/es/misc/troubleshooting/dvb)
