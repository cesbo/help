---
title: Manage Astra Service
sidebar:
    order: 10
---

El servicio es un proceso de aplicación con un nombre especificado y su propia configuración.

:::tip
En la mayoría de las distribuciones de Linux, los servicios son gestionados con `systemd`. Systemd controla el estado del servicio, verifica los registros del servicio y lanza el servicio al inicio del sistema.
:::

## Lanzar servicios adicionales

Puedes lanzar en tu servidor uno o más servicios según tus necesidades.

```sh
astra init 8001 astra-1
```

El nombre del servicio será `astra-1` con el puerto de la interfaz web `8001`.

## Gestión de servicios

En este ejemplo, el nombre del servicio es por defecto: `astra`

| Comando | Descripción |
| --- | --- |
| `systemctl restart astra` | Reiniciar el servicio |
| `systemctl start astra` | Iniciar el servicio |
| `systemctl stop astra` | Detener el servicio |
| `systemctl status astra` | Estado del servicio |
| `systemctl enable astra` | Lanzar el servicio al inicio del sistema |
| `systemctl disable astra` | Desactivar el inicio automático |
| `journalctl -fu astra` | Registros del servicio |

## Eliminar servicio

Antes de eliminar un servicio, deténlo y desactiva el inicio automático:

```sh
systemctl stop astra-1
systemctl disable astra-1
```

Luego, elimina el servicio de systemd:

```sh
astra remove astra-1
```

Este comando elimina el servicio y los archivos de registro, mientras conserva los archivos de configuración y binarios.