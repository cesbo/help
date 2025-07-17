---
title: CAS and Simulcrypt
sidebar:
    order: 10
---

El Sistema de Acceso Condicional (CAS) es una solución compleja para proteger el contenido multimedia del acceso no autorizado. Astra puede comunicarse con Sistemas de Acceso Condicional como Conax a través del protocolo Simulcrypt y encriptar contenido multimedia utilizando el Algoritmo Común de Remenbrado (CSA).

![Diagrama de CAS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/cas.svg)

:::note
La encriptación de contenido es efectiva para proteger métodos de transmisión como satélite, cable y terrestre. Sin embargo, para la transmisión OTT, se recomiendan métodos más adecuados y una combinación de técnicas de protección de contenido para una protección integral contra la piratería.
:::

## Configuración de CAS

Elige en el menú principal Configuración y haz clic en CAS.

![Selector de CAS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/selector.png)

Selecciona un perfil CAS, o crea uno nuevo seleccionando el elemento Nuevo CAS.

![Opciones Simulcrypt para CAS](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/cas-options.png)

- `Name`: nombre arbitrario utilizado para una fácil identificación;
- `Super CAS ID`: Identificador CAS es un símbolo hexadecimal de 8 dígitos;
- `Start Stream ID with 1`: por defecto, la numeración del stream comienza en 0. Para algunos CAS (ejemplo: CTI), la numeración debe comenzar en 1;
- `ECMG Channel ID`: número de canal al conectarse a CAS;
- `ECMG Address`: dirección IP del servidor ECMG;
- `ECMG Port`: puerto del servidor ECMG;
- `Crypto period`: Intervalo de cambio de clave, usualmente 10 segundos;
- `EMMG Protocol`: La implementación actual utiliza TCP;
- `EMMG Port`: El puerto donde Astra esperará una conexión del servidor EMG;
- `EMM PID`: PID para paquetes EMM en el sistema (definido por el usuario);
- `EMM Private Data`: datos para agregar a la tabla CAT. Estos datos se emiten en el software del CAS. Si no tienes datos, entonces este parámetro no se llena;
- `EMM Clone`: esta casilla activa la función de agregar EMM a cada canal encriptado por CAS. El paquete EMM estará disponible en cualquier canal en el usuario final.

## Configuración del Canal

El siguiente paso es configurar los canales y agregar uno o más Sistemas de Acceso Condicional (CAS) a cada canal. Para hacer esto, abre el Panel de Control y selecciona el canal que deseas proteger. Luego, ve a la pestaña de Servicio en la configuración del canal y haz clic en "Nuevo CAS" para adjuntar el CAS:

![Opciones CAS para Canal](https://cdn.cesbo.com/help/astra/delivery/broadcasting/cas/channel-options.png)

- `ECM PID`: PID para paquetes ECM (definido por el usuario);
- `ECM Private Data`: los datos del sistema de acceso condicional se agregan a la descripción del stream ECM en la tabla PMT. Si estos parámetros no existen, no necesitas agregarlos;
- `Access Criteria`: estos datos serán proporcionados por el proveedor de CAS o definidos en el servidor CAS.

## Sistema de Acceso Condicional

TVCAS4 es un Sistema de Acceso Condicional (CAS) que proporciona una solución segura y confiable para proteger contenido multimedia.

TVCAS4 es una solución basada en software que se puede instalar en un servidor e integrar con Astra a través del protocolo Simulcrypt. En el lado del cliente, puedes usar un módulo CAM o un decodificador con un CAS Virtual incorporado.

Consulta [tvcas.com](https://tvcas.com/en/) para más información.