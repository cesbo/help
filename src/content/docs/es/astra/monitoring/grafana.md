---
title: Integration Astra with Grafana
date: 2023-06-10
sidebar:
    order: 2
---

Grafana es una aplicación web de visualización interactiva y análisis de código abierto. Funciona junto con [InfluxDB](/en/astra/monitoring/influxdb) para visualizar el estado de Astra, las transmisiones y los adaptadores.

## Instalación

Antes de la instalación de Grafana, asegúrese de que InfluxDB está instalado y configurado: [Leer más...](/en/astra/monitoring/influxdb)

Descargue la última versión desde

1. Vaya al sitio de Grafana: https://grafana.com/grafana/download
2. Elija la última versión
3. Elija su plataforma
4. Ejecute los comandos de la instrucción en el sitio de Grafana

Encuentre más información en el sitio oficial: https://grafana.com/docs/grafana/latest/

## Configuración de Grafana

1. Abra la interfaz de administración de Grafana: `http://grafana-server:3000`
2. En la página de inicio de sesión, ingrese `admin` como nombre de usuario y contraseña
3. Establezca una nueva contraseña

## Añadir fuente de datos

Abra Configuración → Fuentes de Datos y haga clic en "Agregar fuente de datos", elija InfluxDB y configure las siguientes opciones:

- Nombre: `Astra` o cualquier otro
- Lenguaje de consulta: `Flux`
- URL HTTP: `http://db-server:8086`
- Desactivar `Autenticación básica`
- Organización: el nombre de su organización en los ajustes de InfluxDB
- Token: su token copiado para los ajustes de Astra
- Intervalo mínimo de tiempo: `1m`

Haga clic en `Guardar & Probar`, debería ver una notificación verde: `Bucket found`

## Añadir dashboard

1. Descargue nuestra plantilla para Grafana: [dashboard.json](https://cdn.cesbo.com/astra/grafana/dashboard.json)
2. Abra: Crear → Importar
3. Haga clic en `Cargar archivo JSON`
4. Elija el archivo descargado
5. Establezca cualquier nombre para el dashboard
6. Haga clic en `Importar`

## Dashboard

![Dashboard de Grafana](https://cdn.cesbo.com/help/astra/monitoring/export/grafana/dashboard.png)

El dashboard tiene las siguientes variables:

- `Source` - elija `Astra` u otro nombre;
- `Bucket` - este es el nombre de la base de datos en InfluxDB. Igual que `Instance Name` en los ajustes de Astra.
Si tiene varios servidores o diferentes instancias de Astra en el mismo servidor, puede crear varios
paneles para cada instancia;
- `Adapter` - Todos los adaptadores DVB en la instancia;
- `Stream` - Todos los streams en la instancia.

### Paneles de estado

Uso de CPU:
- El uso de CPU del sistema es para todos los núcleos disponibles. El valor máximo es el número de núcleos multiplicado por 100.
- El uso de CPU de la aplicación es para todos los hilos en todos los núcleos y relativo al uso de CPU del sistema.

Uso de memoria:

- El uso de memoria del sistema - es el uso total de memoria por todos los procesos en el sistema.
- El uso de memoria de la aplicación - es el uso total de memoria por todos los hilos de la aplicación. El valor es relativo al uso de memoria del sistema.

Estado:

- `App uptime` - tiempo transcurrido desde que se lanzó la aplicación
- `Sys uptime` - tiempo transcurrido desde el inicio del sistema
- `LA 1m` - carga promedio para 1 minuto
- `LA 5m` - carga promedio para 5 minutos
- `LA 15m` - carga promedio para 15 minutos

Streams fallidos - lista de todos los incidentes ordenados por tiempo. Los eventos recientes están en la parte superior de la tabla. Todos los valores en la tabla corresponden al momento del evento:

- `Name` - nombre del stream
- `Elapsed time` - tiempo transcurrido desde que ocurrieron los incidentes
- `Sessions` - número de sesiones HTTP/HLS
- `CC Errors` - contador de eventos de pérdida de paquetes detectados
- `Sync Errors` - contador de errores de sincronización de bitrate HTTP/HLS
- `PES Errors` - porcentaje de paquetes de video/audio con contenido dañado
- `Scrambled` - porcentaje de paquetes encriptados
- `Bitrate` - bitrate del stream en KBit/s

Adaptadores y streams:

![Adaptadores y streams](https://cdn.cesbo.com/help/astra/monitoring/export/grafana/adapters-and-streams.png)

Los gráficos se muestran por separado para cada adaptador o stream seleccionado.