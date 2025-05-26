---
title: "API de estado del proceso"
date: 2023-03-23
sidebar:
    order: 25
---

En Astra, puede gestionar los procesos y controlar su estado mediante los métodos de la API HTTP.

## Estado del sistema[](/es/astra/admin-guide/api/process#system-status)

:::note
Versión: 2021-04-12 o posterior
:::

Petición: `GET /api/system-status`

Parámetros de consulta opcionales: `GET /api/system-status?t={time}`

- `time` - por defecto es `1` - estadísticas de última hora. `0` - estadísticas del último segundo (estado actual del sistema).

Respuesta:

```
{
    "timestamp": 0,
    "instance": "...",
    "la1": 0,
    "la5": 0,
    "la15": 0,
    "app_threads": 1,
    "sys_cpu_usage": 0,
    "app_cpu_usage": 0,
    "sys_mem_usage": 0,
    "app_mem_usage": 0,
    "app_mem_kb": 0,
    "sys_uptime": 0,
    "app_uptime": 0
}
```

- `timestamp` - hora del informe, para `t=0` es una hora actual
- `instance` - nombre de la instancia si se ha definido en Configuración -> General -> Nombre de la instancia
- `la1` - carga media durante 1 minuto multiplicada por 100
- `la5` - carga media durante 5 minutos multiplicada por 100
- `la15` - carga media durante 15 minutos multiplicada por 100
- `app_threads` - número de los hilos
- `sys_cpu_usage` - uso total de la CPU. Puede ser hasta 100 multiplicado por el número de núcleos de todas las CPUs
- `app_cpu_usage` - Uso de CPU por el proceso y todos los hilos
- `sys_mem_usage` - uso total de RAM
- `app_mem_usage` - Uso de RAM por el proceso y todos los hilos
- `app_mem_kb` - Uso de RAM por el proceso y todos los hilos en kilobytes
- `sys_uptime` - tiempo total de actividad del sistema en segundos
- `app_uptime` - tiempo de actividad del proceso en segundos

## Reiniciar Astra[](/es/astra/admin-guide/api/process#restart-astra)

Petición: `POST /control/`

```
{
    "cmd": "restart"
}
```
