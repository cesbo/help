---
title: "CAS y Simulcrypt"
date: 2023-02-24
image: https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/og-image.png
---

El sistema de acceso condicional (CAS) es una solución compleja para proteger el contenido multimedia de accesos no autorizados. Astra puede comunicarse con sistemas de acceso condicional como Conax a través del protocolo Simulcrypt y cifrar el contenido multimedia mediante el algoritmo de codificación común (CSA).

![Diagrama CAS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/cas.svg)

::note
El cifrado de contenidos es eficaz para proteger métodos de difusión como satélite, cable y terrestre. Sin embargo, para la distribución OTT, se recomiendan métodos más adecuados y la combinación de técnicas de protección de contenidos para una protección integral contra la piratería.
::

## Configuración CAS[](https://help.cesbo.com/astra/delivery/cas/cas-and-simulcrypt#cas-configuration)

Elija en el menú principal Ajustes y haga clic en CAS.

![Selector CAS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/selector.png)

Seleccione un perfil CAS o cree uno nuevo seleccionando el elemento Nuevo CAS.

![Opciones de Simulcrypt para CAS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/cas-options.png)

- `Name` - Nombre arbitrario: se utiliza para facilitar la identificación;
- `Super CAS ID` - El identificador CAS son 8 símbolos hexadecimales;
- `Start Stream ID with 1` - por defecto, la numeración de los flujos comienza en 0. Para algunos CAS (ejemplo: CTI), la numeración debe comenzar en 1;
- `ECMG Channel ID` - número de canal al conectarse a CAS;
- `ECMG Address` - Dirección IP del servidor ECMG;
- `ECMG Port` - puerto ECMG del servidor;
- `Crypto period` - Intervalo de cambio de tecla, normalmente 10 segundos;
- `EMMG Protocol` - La implementación actual utiliza TCP;
- `EMMG Port` - El puerto en el que el Astra esperará una conexión del servidor EMG;
- `EMM PID` - PID para paquetes EMM en el sistema (definido por el usuario);
- `EMM Private Data` - datos para añadir a la tabla CAT. Estos datos se emiten en el software CAS. Si usted no tiene datos, entonces este parámetro no se llena;
- `EMM Clone` - esta casilla activa la función de añadir EMM a cada canal CAS cifrado. El paquete EMM estará disponible en cualquier canal del usuario final.

## Configuración de canales[](https://help.cesbo.com/astra/delivery/cas/cas-and-simulcrypt#channel-configuration)

El siguiente paso es configurar los canales y añadir uno o varios Sistemas de Acceso Condicional (CAS) a cada canal. Para ello, abra el panel de control y seleccione el canal que desea proteger. A continuación, vaya a la pestaña Servicio de la configuración del canal y haga clic en "Nuevo CAS" para adjuntar el CAS:

![Opciones CAS para el canal](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/channel-options.png)

- `ECM PID` - PID para paquetes ECM (definidos por el usuario);
- `ECM Private Data` - los datos del sistema de acceso condicional se añaden a la descripción del flujo ECM en la tabla PMT. Si estos parámetros no existen, no es necesario añadirlos;
- `Access Criteria` - estos datos serán proporcionados por el proveedor CAS o definidos en el servidor CAS.
