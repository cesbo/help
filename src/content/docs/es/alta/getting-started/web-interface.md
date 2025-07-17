---
title: Web Interface
sidebar:
    order: 2
---

Alta proporciona una interfaz web que puedes utilizar para gestionar y configurar el software.

## Acceso a la Interfaz Web

La interfaz web funciona bien en los siguientes navegadores: Firefox, Chrome o Safari.

El puerto para la interfaz web depende de tu configuración, por defecto es `8100`. Para acceder a la interfaz web, ingresa la siguiente URL en tu navegador web: `http://your-server:8100`, donde your-server es la dirección IP o el nombre de host del servidor donde está instalado Alta.

## Iniciar sesión en la Interfaz Web

![Inicio de sesión en la Interfaz Web](https://cdn.cesbo.com/help/alta/getting-started/web-interface/login.png)

El usuario predeterminado es `admin`. La contraseña se define en el asistente durante la inicialización del servicio.

## Tablero

El **Tablero** proporciona una visión general en tiempo real de todos los **Canales** y **Receptores** configurados, mostrando métricas clave para el monitoreo del sistema:

- **Tasas de bits de transmisión**
- **Recuento de usuarios activos**
- **Uso de almacenamiento** (si está habilitado)

Cada Canal/Receptor se muestra como una **tarjeta** con un borde codificado por colores que indica su estado.

### Indicadores de Estado de la Tarjeta

- **Borde Verde**: Habilitado y transmitiendo normalmente.
- **Borde Gris**: Deshabilitado o sin transmisión.
- **Borde Amarillo**: Una o más variantes de transmisión inactivas.

### Contenido del Encabezado de la Tarjeta

- **Nombre**: Identificador para Canal/Receptor
  - Icono ⚙️: Abre la configuración del Canal
  - `<Variante>/<Canal>`: Abre el diálogo para editar el Receptor
- **Recuento de Usuarios**: Número de visualizadores de transmisión activos
- **Tasa de bits**: Tasa de bits en tiempo real en **Mbit/s**
- Hacer clic en una tarjeta la expande para mostrar más detalles.

### Detalles Expandidos de la Tarjeta

- **Detalles de la Transmisión**
  - **Lista de Variantes**: p. ej., `HD / SD`, `Receptor A / Receptor B`
  - **Tasas de Bits Individuales**: Mostradas por resolución/variante

- **Uso de Almacenamiento** si está habilitado muestra variantes con:
  - **Tamaño de Datos**: Almacenamiento total usado por la variante
  - **Marco de Tiempo**: Duración por la cual se almacena el contenido

## Consejos de Uso

- **Buscar y Ordenar** a través de la Barra de Navegación para encontrar Canales/Receptores
- **Monitoreo**:
  - **Tasa de bits** y **recuento de usuarios** para el rendimiento
- **Solución de Problemas**:
  - **Tarjeta gris**: Verifica si la transmisión está habilitada y recibiendo entrada
  - **Tarjeta amarilla**: Verifica los estados de las variantes en la configuración