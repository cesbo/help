---
title: DigitalDevices Driver
sidebar:
    order: 21
---

DigitalDevices es un fabricante de hardware especializado en dispositivos DVB: sintonizadores, moduladores.

## Instalación Automática

Puede instalar el controlador en modo automático o manual. Para instalar el controlador automáticamente, ejecute en la consola:

```sh
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-dd.sh | sh
```

Después de reiniciar el servidor, [verifique](#check-driver) si el controlador se ha instalado correctamente.

## Instalación Manual

### Preparación del sistema

Para instalar los controladores se necesitan privilegios de root:

```sh
sudo -s
```

Instale las utilidades del sistema para compilar controladores desde el código fuente:

```sh
apt -y install \
    build-essential \
    patchutils \
    libproc-processtable-perl \
    linux-headers-$(uname -r) \
    git
```

Elimine los controladores de medios antiguos:

```sh
rm -rf /lib/modules/$(uname -r)/extra
rm -rf /lib/modules/$(uname -r)/kernel/drivers/media
rm -rf /lib/modules/$(uname -r)/kernel/drivers/staging/media
```

### Instalación

Descargue el controlador más reciente desde el repositorio oficial:

```sh
git clone -b 0.9.37 --depth=1 https://github.com/DigitalDevices/dddvb /usr/src/dddvb
```

Compile los controladores e instálelos:

```sh
cd /usr/src/dddvb
make
make install
```

Actualice las dependencias del controlador:

```sh
mkdir -p /etc/depmod.d
echo 'search extra updates built-in' | tee /etc/depmod.d/extra.conf
depmod -a
```

Cree una configuración de controlador para DigitalDevices MaxS8:

```sh
echo 'options ddbridge fmode=0' | tee /etc/modprobe.d/ddbridge.conf
```

Para MaxS8 están disponibles los siguientes valores de fmode en lugar de 0:

- `fmode=0` - modo de 4 sintonizadores (multiswitch interno desactivado)
- `fmode=1` - LNB Cuádruple / salidas normales de multiswitches
- `fmode=2` - Quattro - LNB / salidas en cascada de multiswitches
- `fmode=3` - LNB Unicable o JESS / salida Unicable del multiswitch

### Reiniciar Sistema

Para lanzar los controladores instalados, reinicie su sistema:

```sh
shutdown -r now
```

Después de reiniciar el servidor, [verifique](#check-driver) si el controlador se ha instalado correctamente.

## Verificar Controlador

Para verificar si el controlador se ha instalado correctamente, liste los adaptadores en el directorio dvb:

```sh
ls /dev/dvb
```

Deberían aparecer todos los adaptadores instalados en el sistema. Por ejemplo:

```
adapter0 adapter1 adapter2 adapter3 ...
```

## Resolución de Problemas

Si tiene algún problema con sus adaptadores DVB, por favor revise [Resolución de Problemas](/en/astra/adapters/troubleshooting/)