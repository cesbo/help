---
title: "Check Internet connection speed"
date: 2023-08-08
sidebar:
    order: 10
---

A veces es necesario verificar la velocidad de la conexión a Internet desde la consola del servidor.

## Instalación

Descargar e instalar la herramienta de línea de comandos para probar el ancho de banda de internet usando speedtest.net

```sh
sudo curl -Lo /usr/bin/speedtest-cli https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
sudo chmod +x /usr/bin/speedtest-cli
```

## Ejecución

Para iniciar la prueba en la consola:

```sh
speedtest-cli
```

El resultado se mostrará en la consola:

```
Retrieving speedtest.net configuration...
Testing from Elisa telecommunications group, OU. (76.40.44.19)...
Retrieving speedtest.net server list...
Retrieving information for the selected server...
Hosted by Compic OU (Tallinn, Estonia) [16.84 km]: 28.77 ms
Testing download speed.........................
Download: 93.30 Mbit/s
Testing upload speed..........................
Upload: 92.25 Mbit/s
```

## Seleccionar servidor

Puede listar los servidores disponibles con el comando:

```sh
speedtest-cli --list
```

Ejemplo de salida:

```
 1437) Telia Lietuva, AB (Kaunas, Lithuania) [506.33 km]
16248) Litnet (Kaunas, Lithuania) [506.33 km]
```

Ahora puede ejecutar speedtest con un servidor personalizado:

```sh
speedtest-cli --server 16248
```