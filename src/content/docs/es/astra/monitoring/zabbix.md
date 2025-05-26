---
title: "Integración Astra con Zabbix"
date: 2023-03-04
sidebar:
    order: 4
---

Zabbix es una plataforma de código abierto para la monitorización de servicios de red, servidores y aplicaciones. Puede integrarse con Astra para monitorizar Streams y adaptadores DVB.

:::note
Disponible para las versiones de Astra lanzadas después del 2021-05-11
:::

## Instalación del servidor Zabbix[](/es/astra/monitoring/zabbix#zabbix-server-installation)

Zabbix puede instalarse tanto en un servidor dedicado como en un servidor Astra

1. Visite [https://zabbix.com](https://zabbix.com/)
2. Seleccione la versión de Zabbix
3. Seleccione su sistema operativo
4. Siga las instrucciones de instalación

Encontrará información detallada en [los manuales de Zabbix](https://www.zabbix.com/manuals)

## Instalación del Agente Zabbix[](/es/astra/monitoring/zabbix#zabbix-agent-installation)

Instala el Agente Zabbix en el servidor con Astra.

1. Visite [https://www.zabbix.com/download\_agents](https://www.zabbix.com/download_agents)
2. Seleccione su sistema operativo
3. Siga las instrucciones de instalación

Encontrará información detallada en [los manuales del agente Zabbix](https://www.zabbix.com/documentation/current/manual/concepts/agent)

## Configuración del Agente Zabbix[](/es/astra/monitoring/zabbix#zabbix-agent-configuration)

En primer lugar el Agente Zabbix debe estar configurado para permitir conexiones entrantes desde el Servidor Zabbix. Abra el archivo de configuración del Agente ubicado en `/etc/zabbix/zabbix_agentd.conf` con tu editor favorito.

1. Encuentra el `Server=` y establezca la dirección IP o el nombre de host del servidor con Zabbix Server;
2. Encuentra el `UnsafeUserParameters=` o añadir nuevo y establecer el valor en `1`.

Guardar archivo.

El Agente Zabbix recibe toda la información de Astra con scripts escritos en Python. Asegúrese de que en su servidor instalado Python3:

```
sudo apt install python3 python3-pip
```

para el uso de sistemas basados en RPM `yum` en lugar de `apt`. A continuación, instale la biblioteca necesaria para Python:

```
pip3 install requests
```

Descarga de scripts para el Agente Zabbix:

```
curl https://cdn.cesbo.com/astra/zabbix/agent.tar.gz | tar -zxC /opt
```

Los guiones se guardarán en la carpeta `/opt/zabbix_agent` directorio. Descargue el archivo de configuración del servicio para el Agente Zabbix:

```
curl -o /etc/zabbix/zabbix_agentd.d/astra.conf https://cdn.cesbo.com/astra/zabbix/astra.conf
```

Y finalmente reinicie el Agente Zabbix:

```
systemctl restart zabbix-agent
```

## Configuración de Zabbix[](/es/astra/monitoring/zabbix#zabbix-configuration)

### Instalar plantilla Zabbix para Astra

Descargue la [plantilla](https://cdn.cesbo.com/astra/zabbix/zbx_astra.xml) a su ordenador e importe este archivo a Zabbix:

En la interfaz web de Zabbix, abra `Configuration` -> `Templates`y, a continuación, pulse el botón `Import` en la esquina superior derecha. Haga clic en `Browse` y seleccione el archivo de plantilla descargado; a continuación, haga clic en `Import` botón . Después de la importación con éxito, verá un mensaje verde `Imported successfully`

### Configurar plantilla

En la interfaz web de Zabbix, abra `Configuration` -> `Templates`y seleccione `Astra API monitoring` y abra la pestaña Macros. Rellene los siguientes valores:

- Primera línea, establezca la contraseña de administrador de la interfaz web de Astra
- Segunda línea, establezca el nombre de usuario del administrador en Astra Web Interface
- La última línea, el puerto de la interfaz web de Astra. Si tienes varios procesos, especifica todos los puertos separados por comas. Por ejemplo: `8000,8001,8002`

Haga clic en `Update` para aplicar los cambios

### Conectar Zabbix a Astra

En la Interfaz Web de Zabbix, abra Configuración -> Hosts y, a continuación, haga clic en `Create host` en la esquina superior derecha. Rellene los siguientes campos:

- `Hostname` - cualquier nombre del servidor donde está instalado Astra, por ejemplo: Astra
- `Groups` - seleccionar `Cesbo_templates` o crear un nuevo grupo
- `Interfaces` - haga clic en añadir, seleccione `Agent` y especifique la dirección IP o el nombre de host del servidor con Agente Zabbix

Abra la pestaña Plantillas y en el campo `Link new templates` añadir `Astra API monitoring`. Además, si desea controlar el estado general del sistema, añada también `Linux by Zabbix agent`.

Guarda los cambios. Después de unos 10 minutos, verá gráficos y disparadores sobre el estado de los canales y adaptadores

## Ejemplos de gráficos[](/es/astra/monitoring/zabbix#chart-examples)

![Canales en Zabbix](https://cdn.cesbo.com/help/astra/monitoring/export/zabbix/zabbix-channel.png)

![DVB en Zabbix](https://cdn.cesbo.com/help/astra/monitoring/export/zabbix/zabbix-dvb.png)
