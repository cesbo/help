---
title: Troubleshooting
description: Common issues and solutions for HTTP delivery in Astra
---

## Error 404

Un error 404 significa que no se pudo encontrar el recurso solicitado.

Causas comunes y cómo solucionarlas:

1. **El canal está deshabilitado**: Verifica que el canal esté habilitado en la interfaz web de Astra.
2. **Puerto incorrecto en la URL**: Astra sirve streams HTTP en diferentes puertos:
   - Si se utiliza HTTP Play, el puerto puede coincidir con la interfaz web o configurarse manualmente en Configuración → HTTP Play. Asegúrate de que el puerto en la URL coincida con el configurado en Astra.
   - El puerto está especificado en la URL de Salida HTTP. Asegúrate de que el puerto en la URL coincida con el configurado en la Salida HTTP.
3. **Conflicto de puertos**: Otra aplicación está utilizando el mismo puerto.

### Verificación de Conflictos de Puertos

Para ver qué aplicación está usando un puerto, ejecuta este comando:

```sh
netstat -tnlp
```

A veces, el mismo proceso de Astra escucha en múltiples interfaces para el mismo puerto:

```
tcp        0      0 0.0.0.0:8000            0.0.0.0:*               LISTEN      43313/astra
tcp        0      0 192.168.88.1:8000       0.0.0.0:*               LISTEN      43313/astra
```

Esto muestra un proceso de Astra vinculado al puerto 8000 en:

- `0.0.0.0:8000` - escucha en todas las interfaces de red
- `192.168.88.1:8000` - escucha en una interfaz específica

Para solucionar conflictos de puertos:

- Utiliza la misma interfaz para todas las salidas HTTP en el canal
- Usa puertos diferentes para diferentes interfaces

## Retraso en el Inicio del Canal

Al iniciar un canal, hay un largo retraso antes de que comience la reproducción.

El retraso puede ser causado por el método de Autorización configurado en Astra. Al utilizar la autorización HTTP Backend, Astra envía una solicitud HTTP a un middleware externo por cada solicitud de reproducción. Si el middleware tarda en responder, la reproducción se retrasa.

Para verificar si este es el caso, puedes desactivar temporalmente la autorización.

Recomendamos usar la autorización HTTP Backend solo con middleware rápido y confiable (tiempo de respuesta menor a 100 ms).