---
title: Process Status API
---

En Astra, puedes gestionar procesos y controlar su estado utilizando métodos de API HTTP.

## Estado del sistema

:::caution
Versión: 2021-04-12 o posterior
:::

Solicitud: `GET /api/system-status`

Parámetros de consulta opcionales: `GET /api/system-status?t={time}`

- `time` - el valor predeterminado es `1` - estadísticas del último minuto. `0` - estadísticas del último segundo (estado actual del sistema).

Respuesta:

```json
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

- `timestamp` - hora del informe, para `t=0` es la hora actual
- `instance` - nombre de la instancia si está definido en Configuración → General → Nombre de la instancia
- `la1` - promedio de carga durante 1 minuto multiplicado por 100
- `la5` - promedio de carga durante 5 minutos multiplicado por 100
- `la15` - promedio de carga durante 15 minutos multiplicado por 100
- `app_threads` - número de hilos
- `sys_cpu_usage` - uso total de CPU. Podría ser hasta: 100 multiplicado por el número de núcleos en todos los CPUs
- `app_cpu_usage` - uso de CPU por el proceso y todos los hilos
- `sys_mem_usage` - uso total de RAM
- `app_mem_usage` - uso de RAM por el proceso y todos los hilos
- `app_mem_kb` - uso de RAM por el proceso y todos los hilos en kilobytes
- `sys_uptime` - tiempo total de actividad del sistema en segundos
- `app_uptime` - tiempo de actividad del proceso en segundos

## Reiniciar Astra

Solicitud: `POST /control/`

```json
{
    "cmd": "restart"
}
```