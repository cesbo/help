---
title: System Tune
sidebar:
    order: 1
---

Transmitir televisión es una tarea que consume muchos recursos y exige el máximo rendimiento y la mínima latencia de su servidor. Para satisfacer estas necesidades críticas, la optimización del sistema es clave.

Este script está diseñado para optimizar el rendimiento de la red, mejorar la eficiencia de la CPU y ajustar finamente varios parámetros del sistema. Al configurar automáticamente opciones avanzadas del sistema, reduce la carga, permitiendo que sus procesos funcionen de manera más fluida y operen al máximo de sus capacidades.


## Instalar script

Descargue el script para ajustar la configuración de su Linux:

```bash
curl -Lo /opt/tune.sh https://cdn.cesbo.com/astra/scripts/tune.sh
chmod +x /opt/tune.sh
```

Registre el script como un servicio del sistema:

```bash
/opt/tune.sh install
```

Reinicie su servidor para aplicar los cambios.

## Desinstalar script

Elimine el script de su sistema:

```bash
/opt/tune.sh uninstall
```

Borre el archivo del script:

```bash
rm -f /opt/tune.sh
```