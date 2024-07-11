---
title: "Integración Astra con Grafana"
date: 2023-06-10
---

Grafana es una aplicación web de análisis y visualización interactiva de código abierto. Funciona en combinación con [InfluxDB](https://help.cesbo.com/astra/monitoring/export/influxdb) para visualizar el estado de Astra, el flujo y los adaptadores.

## Instale[](https://help.cesbo.com/astra/monitoring/export/grafana#install)

Antes de instalar Grafana, asegúrate de que InfluxDB está instalado y configurado: [Leer más...](https://help.cesbo.com/astra/monitoring/export/influxdb)

Descargue la última versión desde

1. Ir al sitio de Grafana: [https://grafana.com/grafana/download](https://grafana.com/grafana/download)
2. Elija la última versión
3. Elija su plataforma
4. Lanzar comandos desde las instrucciones en el sitio de Grafana

Más información en el sitio oficial: [https://grafana.com/docs/grafana/latest/](https://grafana.com/docs/grafana/latest/)

## Configuración de Grafana[](https://help.cesbo.com/astra/monitoring/export/grafana#grafana-configuration)

1. Abra la interfaz de administración de Grafana: `http://grafana-server:3000`
2. En la página de inicio de sesión, introduzca `admin` para nombre de usuario y contraseña
3. Establecer nueva contraseña

## Añadir fuente de datos[](https://help.cesbo.com/astra/monitoring/export/grafana#append-data-source)

Abra Configuración -> Fuentes de datos y haga clic en "Añadir fuente de datos", elija InfluxDB y configure las siguientes opciones:

- Nombre: `Astra` o cualquier otro
- Lenguaje de consulta: `Flux`
- URL HTTP: `http://db-server:8086`
- Apagar `Basic auth`
- Organización: el nombre de su organización en InfluxDB Settings
- Token: tu token copiado para la configuración de Astra
- Intervalo de tiempo mínimo: `1m`

Haga clic en `Save & Test`deberías ver una notificación verde: `Bucket found`

## Añadir cuadro de mandos[](https://help.cesbo.com/astra/monitoring/export/grafana#append-dashboard)

1. Descargue nuestra plantilla para Grafana: [dashboard.json](https://cdn.cesbo.com/astra/grafana/dashboard.json)
2. Abrir: Crear -> Importar
3. Haga clic en `Upload JSON file`
4. Elija el archivo descargado
5. Cualquier nombre para el cuadro de mandos
6. Haga clic en `Import`

## Cuadro de mandos[](https://help.cesbo.com/astra/monitoring/export/grafana#dashboard)

![Panel de control de Grafana](https://cdn.cesbo.com/help/astra/monitoring/export/grafana/dashboard.png)

El salpicadero tiene las siguientes variables:

- `Source` - elegir `Astra` u otro nombre;
- `Bucket` - es el nombre de la base de datos en InfluxDB. Igual que `Instance Name` en la configuración de Astra. Si tienes varios servidores o diferentes instancias de Astra en el mismo servidor puedes crear varios cuadros de mando para cada instancia;
- `Adapter` - Todos los adaptadores DVB de la instancia;
- `Stream` - Todos los flujos de la instancia.

### Paneles de estado

Uso de la CPU:

- El uso de la CPU del sistema es para todos los núcleos disponibles. El valor máximo es el número de núcleos multiplicado por 100.
- El uso de la CPU de la aplicación es para todos los subprocesos en todos los núcleos y relativo al uso de la CPU del sistema.

Uso de memoria:

- El uso de memoria del sistema - es el uso total de memoria por todos los procesos en el sistema
- El uso de memoria de la aplicación - es el uso total de memoria por todos los hilos de la aplicación. El valor es relativo al uso de memoria del sistema

Estado:

- `App uptime` - tiempo transcurrido desde el inicio de la aplicación
- `Sys uptime` - tiempo transcurrido desde el inicio del sistema
- `LA 1m` - carga media durante 1 minuto
- `LA 5m` - carga media durante 5 minutos
- `LA 15m` - carga media durante 15 minutos

Incidencias - lista de todas las incidencias ordenadas por la hora. Incidentes recientes en la parte superior de la tabla. Todos los valores de la tabla a la hora del incidente:

- `Name` - nombre del flujo
- `Elapsed time` - tiempo transcurrido desde que se produjeron los incidentes
- `Sessions` - número de sesiones HTTP/HLS
- `CC Errors` - contador de eventos de pérdida de paquetes detectados
- `Sync Errors` - contador de los errores de sincronización HTTP/HLS bitrate
- `PES Errors` - porcentaje de los paquetes de vídeo/audio con el contenido dañado
- `Scrambled` - por ciento de los paquetes codificados
- `Bitrate` - velocidad de transmisión en KBit/s

Adaptadores y flujos:

![Adaptadores y flujos](https://cdn.cesbo.com/help/astra/monitoring/export/grafana/adapters-and-streams.png)

Los gráficos se muestran por separado para cada adaptador o flujo seleccionado.
