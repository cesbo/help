---
title: "Gestionar el servicio Astra"
date: 2023-02-21
sidebar:
    order: 6
---

El servicio es un proceso de aplicación con nombre especificado y configuración propia.

:::note En la mayoría de las distribuciones Linux los servicios se gestionan con `systemd`. Systemd controla el estado del servicio, comprueba los registros de servicio y lanza el servicio al iniciar el sistema.
:::

## Ponga en marcha servicios adicionales[](/es/astra/getting-started/manage-service#launch-additional-services)

Puede lanzar en su servidor uno o varios servicios en función de sus necesidades.

```
astra init 8001 astra-1
```

El nombre del servicio será `astra-1` con el puerto de la interfaz web `8001`.

## Gestión de servicios[](/es/astra/getting-started/manage-service#service-management)

En este ejemplo el nombre del servicio es por defecto: `astra`

| Comando | Descripción |
| --- | --- |
| `systemctl restart astra` | Reiniciar el servicio |
| `systemctl start astra` | Iniciar servicio |
| `systemctl stop astra` | Detener el servicio |
| `systemctl status astra` | Estado del servicio |
| `systemctl enable astra` | Iniciar el servicio al arrancar el sistema |
| `systemctl disable astra` | Desactivar la ejecución automática |
| `journalctl -fu astra` | Registros de servicio |

## Eliminar servicio[](/es/astra/getting-started/manage-service#remove-service)

Antes de eliminar el servicio, deténgalo y desactive la ejecución automática:

```
systemctl stop astra-1
systemctl disable astra-1
```

A continuación, elimine el servicio de systemd:

```
astra remove astra-1
```

Este comando elimina los archivos de servicio y de registro, manteniendo los archivos de configuración y binarios.
