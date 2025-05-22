---
title: "Descodificación de canales con DVB-CI externo"
date: 2023-06-27
image: https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/ddci.jpg
sidebar:
    order: 8
---

Con el auge de la radiodifusión digital, cada vez es más importante proteger los contenidos de accesos no autorizados. Por eso, muchos proveedores de televisión, ya sea por satélite, cable o terrestre, codifican los contenidos mediante sistemas de acceso condicional (CAS).

Un método común utilizado en este proceso es la Interfaz Común (CI), una interfaz que permite a los Módulos de Acceso Condicional (CAM) conectarse al receptor DVB y descifrar canales protegidos. El descifrado de canales con un adaptador DVB-CI externo proporciona una arquitectura de cabecera flexible al separar las partes de recepción y procesamiento.

## Ventajas del DVB-CI externo[](https://help.cesbo.com/astra/receiving/dvb/external-ci#advantages-of-external-dvb-ci)

- Los canales codificados de diferentes fuentes pueden agruparse para su posterior descodificación en un único módulo CI. Esto puede resultar muy útil si dispone de varios transpondedores DVB con canales codificados
- Los canales se pueden recibir y descifrar en servidores separados. Es especialmente conveniente si utiliza receptores SAT>IP. Es posible que tengas un servidor Astra con tarjetas CI almacenado en la sala de servidores, mientras que los receptores SAT>IP se encuentran más cerca del tejado donde están montadas las antenas parabólicas. Leer más sobre [Recepción](https://help.cesbo.com/astra/receiving/dvb/satip-client) SAT>IP con Astra

## Requisitos[](https://help.cesbo.com/astra/receiving/dvb/external-ci#requirements)

- Adaptador DVB-CI externo. Probamos y admitimos los siguientes modelos:
    - [Dispositivos digitales Octopus Twin CI](https://www.digital-devices.eu/shop/en/accessoires/bridge/266/digital-devices-octopus-twin-ci-double-ci-slot-with-2-expansionports)
    - [TBS6900](https://www.tbsdtv.com/products/tbs6900-dvb-dual-pci-e-card.html)
- Módulo de acceso condicional (CAM)
- Tarjeta SmartCard del organismo de radiodifusión

![Dispositivos digitales Octopus Twin CI](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/ddci.jpg)

## Configuración Astra[](https://help.cesbo.com/astra/receiving/dvb/external-ci#astra-configuration)

### Crear MPTS

Crear MPTS con los canales requeridos en la dirección de entrada para cada canal debe añadir la opción `cas` - para que Astra pase todo lo necesario para la decodificación. Por ejemplo:

![Entradas MPTS](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/mpts.png)

### Crear adaptador virtual

:::note
Adaptador virtual disponible para versiones posteriores al 20 de septiembre de 2022
:::

Crear nuevo adaptador en la interfaz web de Astra con el botón `CI` en el `Virtual` campo. Guarde la configuración del adaptador pulsando el botón Aplicar

![Nuevo adaptador](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/new-adapter.png)

Opciones de IC:

- `Name` - Nombre del adaptador
- `ID` - identificador único del adaptador. Puede dejarlo en blanco, el sistema generará un identificador cuando guarde el adaptador.
- `Virtual` - Tipo de adaptador virtual. `CI` opción
- `Adapter` - número del adaptador CI en el sistema
- `Stream ID` - identificador de flujo con MPTS. es un valor ID de MPTS creado en el primer paso
- `CI Device` - número del dispositivo en el adaptador CI. Por defecto: `0`
- `CI Bitrate` - TBS CI bitrate en MBit/s. Por defecto: `70`. Para DigitalDevices bitrate podría definirse en la configuración del controlador
- `CA Delay` - retardo, en segundos, antes de enviar la información del canal al Módulo de Acceso Condicional. Predeterminado: `20` segundo

Se ha podido encontrar el número de adaptador CI con el comando:

```
find /dev/dvb/ -name ca*
```

Por ejemplo el resultado será:

```
/dev/dvb/adapter5/ca0
```

Dónde:

- `5` - Número de adaptador CI
- `0` - dispositivo en el adaptador CI

### Adaptador de escaneado

Ahora puede hacer clic en el botón Escanear.

![Adaptador de escaneado](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/scan.png)

Seleccione los programas necesarios y añádalos pulsando el botón Aplicar.

![Cuadro de mandos](https://cdn.cesbo.com/help/astra/receiving/dvb/external-ci/dashboard.png)

## Solución de problemas[](https://help.cesbo.com/astra/receiving/dvb/external-ci#troubleshooting)

### El módulo CI+ no funciona

Los módulos CI+ son sólo para uso privado y no son compatibles con los adaptadores DVB-CI externos.

### Descodificado sólo 1 canal

El número de programas (canales) que el CAM puede descodificar simultáneamente, dependiendo del fabricante y/o modelo del CAM.

### ¿Cómo comprobar el menú CAM?

Si necesita consultar el menú CAM para obtener algunos datos adicionales sobre el Módulo de Acceso Condicional o la SmartCard, puede utilizar `gnutv` utilidad de tv digital. Lanzamiento:

```
gnutv -adapter N -cammenu
```

Donde N es un número de adaptador CI.
