---
title: TBS Driver
sidebar:
    order: 21
---

TBS es un fabricante de hardware especializado en dispositivos DVB: sintonizadores, moduladores.

## Instalación Automática

Puede instalar el controlador en modo automático o manual. Para instalar el controlador automáticamente, ejecute en la consola:

```sh
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-tbs.sh | sh
```

Después de reiniciar el servidor, [verifique](#check-driver) si el controlador se ha instalado correctamente.

## Instalación Manual

### Preparar el sistema

Para instalar los controladores se necesitan privilegios de root:

```
sudo -s
```

Instale las utilidades del sistema para compilar controladores desde el código fuente:

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

### Instalar

Descargue el controlador más reciente del repositorio oficial:

```
git clone --depth=1 https://github.com/tbsdtv/media_build.git /usr/src/media_build
git clone --depth=1 https://github.com/tbsdtv/linux_media.git -b latest /usr/src/media
```

Compile los controladores e instálelos:

```
cd /usr/src/media_build
make dir DIR=../media
make allyesconfig
make
make install
```

Instale el firmware para adaptadores DVB:

```
curl -L http://www.tbsdtv.com/download/document/linux/tbs-tuner-firmwares_v1.0.tar.bz2 | tar -C /lib/firmware/ -jxf -
```

### Reiniciar Sistema

Para activar los controladores instalados, reinicie su sistema:

```
shutdown -r now
```

Después de reiniciar el servidor, [verifique](#check-driver) si el controlador se ha instalado correctamente.

## Verificar Controlador

Para verificar si el controlador se ha instalado correctamente, liste los adaptadores en el directorio dvb:

```
ls /dev/dvb
```

Deberían aparecer todos los adaptadores instalados en el sistema. Por ejemplo:

```
adapter0 adapter1 adapter2 adapter3 ...
```

## Resolución de Problemas

Puede contactar a los representantes de TBS para obtener ayuda con la instalación de controladores en este enlace: [https://www.tbsdtv.com/contact-us.html](https://www.tbsdtv.com/contact-us.html) - seleccione "Software installation and debugging"

Si tiene algún problema con sus Adaptadores DVB, por favor consulte [Resolución de Problemas](/en/astra/adapters/troubleshooting/)