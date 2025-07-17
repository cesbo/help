---
title: Manage Alta Services
date: 2023-03-04
sidebar:
    order: 1
---

Un servicio es un proceso de aplicación con un nombre especificado y su propia configuración. Puedes lanzar en tu servidor uno o más servicios dependiendo de tus necesidades.

## Systemd

Systemd es un administrador de servicios popular para sistemas operativos basados en Linux. Se utiliza para gestionar los servicios y procesos que se ejecutan en el sistema, incluyendo el inicio y detención de servicios, comprobación de su estado y gestión de sus registros. Systemd también es responsable de lanzar servicios cuando el sistema arranca, asegurando que todos los servicios necesarios estén en funcionamiento antes de que los usuarios puedan acceder al sistema.

## Gestión de servicios

Para registrar un nuevo servicio, inicia el asistente de inicialización con el siguiente comando:

```sh
sudo alta init
```

Después de finalizar el asistente de inicialización, se añadirá un servicio al sistema. El servicio se puede gestionar con los comandos:

| Comando | Descripción |
| --- | --- |
| `systemctl restart alta` | Reiniciar servicio |
| `systemctl start alta` | Iniciar servicio |
| `systemctl stop alta` | Detener servicio |
| `systemctl status alta` | Estado del servicio |
| `systemctl enable alta` | Lanzar servicio al iniciar el sistema |
| `systemctl disable alta` | Desactivar ejecución automática |
| `journalctl -fu alta` | Registros del servicio |

En este ejemplo, utilizamos el nombre de servicio predeterminado `alta`.