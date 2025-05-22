---
title: "Comprobar la velocidad de la conexión a Internet"
date: 2023-08-08
sidebar:
    order: 10
---

A veces es necesario comprobar la velocidad de conexión a Internet desde la consola del servidor.

## Instale[](https://help.cesbo.com/misc/tools-and-utilities/network/speedtest#install)

Descargar e instalar la herramienta de línea de comandos para probar el ancho de banda de Internet utilizando speedtest.net

```
sudo curl -Lo /usr/bin/speedtest-cli https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
sudo chmod +x /usr/bin/speedtest-cli
```

## Lanzamiento[](https://help.cesbo.com/misc/tools-and-utilities/network/speedtest#launch)

Para iniciar la prueba de lanzamiento en la consola:

```
speedtest-cli
```

El resultado se imprimirá en la consola:

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

## Seleccionar servidor[](https://help.cesbo.com/misc/tools-and-utilities/network/speedtest#select-server)

Puede listar los servidores disponibles con el comando

```
speedtest-cli --list
```

Ejemplo de salida:

```
 1437) Telia Lietuva, AB (Kaunas, Lithuania) [506.33 km]
16248) Litnet (Kaunas, Lithuania) [506.33 km]
```

Ahora puede iniciar speedtest con un servidor personalizado:

```
speedtest-cli --server 16248
```
