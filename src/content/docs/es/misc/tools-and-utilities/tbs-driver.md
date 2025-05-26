---
title: "Instalación del controlador TBS"
date: 2023-02-23
sidebar:
    order: 12
---

TBS es un fabricante de hardware especializado en dispositivos DVB: sintonizadores, moduladores.

## Instalación de automóviles[](/es/misc/tools-and-utilities/tbs-driver#auto-installation)

Puede instalar el controlador de forma automática o manual. Para instalar el controlador automáticamente, ejecútelo en la consola:

```
curl -sSf https://cdn.cesbo.com/astra/scripts/drv-tbs.sh | sh
```

Tras reiniciar el servidor, [compruebe](/es/misc/tools-and-utilities/tbs-driver#check-driver) si el controlador se ha instalado correctamente.

## Instalación manual[](/es/misc/tools-and-utilities/tbs-driver#manual-installation)

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
git clone --depth=1 https://github.com/tbsdtv/media_build.git /usr/src/media_build
git clone --depth=1 https://github.com/tbsdtv/linux_media.git -b latest /usr/src/media
```

Cree los controladores e instálelos:

```
cd /usr/src/media_build
make dir DIR=../media
make allyesconfig
make
make install
```

Instalar firmware para adaptadores DVB:

```
curl -L http://www.tbsdtv.com/download/document/linux/tbs-tuner-firmwares_v1.0.tar.bz2 | tar -C /lib/firmware/ -jxf -
```

### Reiniciar el sistema

Para iniciar los controladores instalados, reinicie el sistema:

```
shutdown -r now
```

Tras reiniciar el servidor, [compruebe](/es/misc/tools-and-utilities/tbs-driver#check-driver) si el controlador se ha instalado correctamente.

## Comprobar conductor[](/es/misc/tools-and-utilities/tbs-driver#check-driver)

Para comprobar si el controlador se ha instalado correctamente, liste los adaptadores en el directorio dvb:

```
ls /dev/dvb
```

Deben listarse todos los adaptadores instalados en el sistema. Por ejemplo:

```
adapter0 adapter1 adapter2 adapter3 ...
```

## Solución de problemas[](/es/misc/tools-and-utilities/tbs-driver#troubleshooting)

Puede ponerse en contacto con los representantes de TBS para que le ayuden a instalar los controladores en este enlace: [https://www.tbsdtv.com/contact-us.html](https://www.tbsdtv.com/contact-us.html) - seleccione "Instalación y depuración de software"

Si tiene algún problema con sus adaptadores DVB, consulte [Solución de problemas DVB](/es/misc/troubleshooting/receiving)
