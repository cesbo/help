---
title: External DVB-CI
description: How to use External DVB-CI adapters with Astra for decrypting channels
sidebar:
    order: 8
---

Con el auge de la difusión digital, proteger el contenido del acceso no autorizado se ha vuelto cada vez más importante. Es por eso que muchos proveedores de TV, ya sean por satélite, cable o terrestre, encriptan el contenido usando Sistemas de Acceso Condicional (CAS).

Un método común utilizado en este proceso es el Interfaz Común (CI), una interfaz que permite que los Módulos de Acceso Condicional (CAM) se conecten al receptor DVB y desencripten los canales protegidos. Desencriptar canales con un adaptador DVB-CI externo proporciona una arquitectura de cabecera flexible al separar las partes de recepción y procesamiento.

## Ventajas del DVB-CI Externo

- Los canales encriptados de diferentes fuentes pueden agruparse para una posterior desencriptación en un único módulo CI. Esto puede ser bastante útil si tienes varios transpondedores DVB con canales encriptados.
- Los canales pueden ser recibidos y desencriptados en servidores separados. Es especialmente conveniente si usas receptores SAT>IP. Puedes tener el servidor Astra con tarjetas CI almacenadas en la sala de servidores, mientras que los receptores SAT>IP están ubicados más cerca del techo, donde están montadas las antenas parabólicas. Lee más sobre [Recibir SAT>IP](/en/astra/receiving/satip-client) con Astra.

## Requisitos

- Adaptador DVB-CI externo. Hemos probado y soportamos los siguientes modelos:
  - [DigitalDevices Octopus Twin CI](https://www.digital-devices.eu/shop/en/accessoires/bridge/266/digital-devices-octopus-twin-ci-double-ci-slot-with-2-expansionports)
  - [TBS6900](https://www.tbsdtv.com/products/tbs6900-dvb-dual-pci-e-card.html)
- Módulo de Acceso Condicional (CAM)
- Tarjeta Inteligente del transmisor

## Configuración de Astra

### Crear MPTS

Crea un MPTS con los canales requeridos en la dirección de entrada, para cada canal debes agregar la opción `cas` para que Astra pase todo lo necesario para la decodificación. Por ejemplo:

![Entradas de MPTS](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/mpts.png)

### Crear Adaptador Virtual

:::caution
Adaptador Virtual disponible para las versiones lanzadas después del 20 de septiembre de 2022
:::

Crea un Nuevo Adaptador en la Interfaz Web de Astra con el valor `CI` en el campo `Virtual`. Guarda la configuración del adaptador haciendo clic en el botón Aplicar.

![Nuevo Adaptador](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/new-adapter.png)

Opciones de CI:

- `Name` - nombre del Adaptador
- `ID` - identificador único del adaptador. Puedes dejarlo en blanco, el sistema generará un id cuando guardes el adaptador.
- `Virtual` - tipo de Adaptador Virtual. selecciona la opción `CI`
- `Adapter` - número del adaptador CI en el sistema
- `Stream ID` - identificador de flujo con MPTS. es el valor ID del MPTS creado en el primer paso
- `CI Device` - número del dispositivo en el adaptador CI. Por defecto: `0`
- `CI Bitrate` - Tasa de bits del CI de TBS en MBit/s. Por defecto: `70`. Para DigitalDevices la tasa de bits podría definirse en la configuración del driver.
- `CA Delay` - retraso, en segundos, antes de enviar información de canal al Módulo de Acceso Condicional. Por defecto: `20` segundos.

El número del adaptador CI podría encontrarse con el comando:

```sh
find /dev/dvb/ -name ca*
```

Por ejemplo, el resultado será:

```
/dev/dvb/adapter5/ca0
```

Donde:

- `5` - número del adaptador CI
- `0` - dispositivo en el adaptador CI

### Escanear adaptador

Ahora puedes hacer clic en el botón Escanear.

![Escanear Adaptador](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/scan.png)

Selecciona los programas requeridos y añádelos haciendo clic en el botón Aplicar.

![Panel de Control](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/dashboard.png)

## Solución de Problemas

### Módulo CI+ no funciona

Los módulos CI+ son solo para uso particular y no son soportados por los adaptadores DVB-CI externos.

### Solo se descodifica 1 canal

El número de programas (canales) que CAM puede descifrar simultáneamente depende del fabricante o modelo del CAM.

### ¿Cómo comprobar el menú del CAM?

Si necesitas comprobar el menú del CAM para obtener información adicional sobre el Módulo de Acceso Condicional o la Tarjeta Inteligente, puedes usar la utilidad de TV digital `gnutv`. Ejecuta:

```sh
gnutv -adapter N -cammenu
```

Donde N es el número del adaptador CI.