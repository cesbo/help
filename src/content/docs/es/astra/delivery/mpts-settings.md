---
title: "Ajustes MPTS"
date: 2023-03-23
sidebar:
    order: 1
---

MPTS (Multi Program Transport Stream): flujo que contiene varios servicios (programas). Suele utilizarse para transferir canales a moduladores ip-qam/ip-asi.

Abra la página principal (Dashboard) de Astra y busque el elemento `New Stream`en la esquina superior derecha, para abrir una nueva ventana. Visite `Multi Program Stream` y active la casilla correspondiente. Después de eso, usted tendrá campos adicionales.

## General[](/es/astra/delivery/mpts-settings#general)

La ventana General permite configurar los parámetros básicos de un modulador DVB-T, incluyendo su gama de frecuencias, esquema de modulación y nivel de salida.

![Opciones generales](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/general.png)

Definiciones de los elementos de un bloque:

- `Enable` - esta casilla permite activar o desactivar la conexión con el modulador. Cuando está activada, la interfaz establece una conexión con el modulador
- `Name` - este parámetro permite dar un nombre arbitrario al modulador. El nombre que elijas se utilizará para identificar el modulador en la interfaz de Astra y puede ser cualquier combinación de letras, números y caracteres especiales.
- `ID` - Este campo es opcional. El ID se genera automáticamente al guardar los mpts
- `Country` -Este parámetro establece el país en el que se utilizará el modulador. El país seleccionado determina el plan de frecuencias de canal que utilizará el modulador en el pliego de condiciones. [ISO 3166-1 alfa-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
- `UTC Offset` - este parámetro establece el desfase horario con respecto a UTC en el intervalo de -720 minutos a +780 minutos (se utiliza para la generación de las tablas TOT/TDT para el ajuste automático de la hora en el televisor y el correcto funcionamiento de la EPG)
- `Network ID` - este parámetro es un identificador único para la red DVB a la que pertenece el modulador. Por defecto es 1
- `Network Name` - este parámetro es un nombre arbitrario para la red DVB a la que pertenece el modulador
- `Provider Name` - Se utiliza en la tabla NIT (Network Information Table), que describe la información sobre quién es el propietario de la frecuencia, el proveedor y el nombre de la red. Se utiliza para identificar rápidamente el proveedor propietario de la corriente. Por ejemplo estos datos los podemos ver al escanear la frecuencia en el satélite
- `Codepage` - este parámetro se utiliza para especificar la codificación de caracteres utilizada en las tablas PSI/SI. Por ejemplo, para los usuarios de inglés es latín (ISO 6937)
- `TSID` - este parámetro (Transport Stream ID) es un identificador único para un flujo de transporte DVB. Se utiliza para diferenciar entre flujos de transporte transmitidos por diferentes fuentes o con diferente contenido. Por defecto es 1
- `ONID` - este parámetro hace referencia al ID de red original, que se utiliza para identificar la red de origen a la que pertenece un canal. Es un identificador único asignado a una red, y se utiliza junto con el TSID para formar un identificador completo de la corriente de transporte. El valor ONID debe ser el mismo para todos los flujos de transporte dentro de una red determinada. Por defecto es 1

## Lista de entradas[](/es/astra/delivery/mpts-settings#input-list)

La Lista de entradas de la ventana General se utiliza para definir los flujos de entrada que se utilizarán para modular la salida. Permite especificar la corriente de transporte, el número de programa y otros parámetros para cada corriente de entrada. La Lista de entradas puede editarse, añadirse o eliminarse según sea necesario.

![Lista de entradas](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/input.png)

- `New Input` - este botón permite añadir una nueva entrada a la lista de entradas. Al hacer clic en este botón, se abre una nueva ventana en la que puede configurar los parámetros de la nueva entrada, como su nombre, tipo y ajustes de modulación.
- `Arrows` - еste botón se encuentra a la derecha de cada entrada en la Lista de Entradas. Al hacer clic en él, podrá seleccionar la posición de esta entrada en la lista general
- `Gear` - este botón se encuentra a la derecha de cada entrada de la Lista de Entradas y permite configurar los parámetros de esa entrada en particular. Al hacer clic en el botón "Engranaje" se abrirá un cuadro de diálogo en el que podrá modificar los parámetros de la entrada, como el tipo de entrada, el bitrate y los parámetros de modulación.

Los flujos incluidos en mpts no deben tener PIDs repetidos. También es conveniente asignar números de PNR para cada entrada con la función `set_pnr=` opción. Por ejemplo:

```
udp://225.1.1.27:1234#set_pnr=11
udp://225.1.1.28:1234#set_pnr=12
udp://225.1.1.29:1234#set_pnr=13
```

## Lista de salida[](/es/astra/delivery/mpts-settings#output-list)

La sección Lista de salidas de la ventana General muestra la lista de salidas que pueden configurarse para el modulador seleccionado. En esta sección, puede añadir o eliminar salidas y configurar sus parámetros. Cada salida de la lista está representada por una fila en la que se muestran sus parámetros y su estado. El estado de cada salida puede activarse o desactivarse mediante la casilla correspondiente de la primera columna de la fila de salida

![Lista de salida](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/output.png)

- `New Output` - este botón abre una nueva ventana en la que se pueden configurar los parámetros de la nueva salida. El número de modulador para la nueva salida puede asignarse en función del número de moduladores del adaptador, empezando por 0

Igual que para el modo SPTS.

## SDT[](/es/astra/delivery/mpts-settings#sdt)

La pestaña SDT es una ventana que permite configurar la Tabla de Descripción de Servicios, encargada de proporcionar información sobre los servicios disponibles en la corriente de transporte. Esta información puede incluir el nombre del servicio, el nombre del proveedor, el tipo de servicio y otros detalles. En otras palabras, la pestaña SDT proporciona una forma de definir y gestionar los servicios que estarán disponibles para los espectadores

![Opciones de servicio](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/sdt.png)

- `Service type` - este parámetro especifica el tipo de servicio que el usuario desea configurar, como televisión digital, radio digital o servicios de datos
- `Service name` - este parámetro se refiere al nombre del servicio que se está transmitiendo por el aire. El nombre del servicio suele aparecer en el televisor u otro dispositivo receptor del usuario.
- `PNR` - este parámetro describe el Número de programa del servicio seleccionado
- `Scrambled channel` - este parámetro es una casilla de verificación que indica si el canal seleccionado está codificado o no. Cuando está marcada, añade información a la descripción del canal de que éste está codificado. Los dvb-receptores modernos, centrándose en esta información, pueden mostrar en la pantalla del televisor los datos de que el canal está codificado
- `LCN` - este parámetro significa Número Lógico de Canal. Es un identificador único asignado a cada canal o servicio en un sistema de radiodifusión digital

## NIT[](/es/astra/delivery/mpts-settings#nit)

La ventana "NIT" permite definir la tabla de información de red (NIT) de un modulador personalizado. La NIT contiene información sobre las redes disponibles para el usuario, como el ID de red, el nombre de red y la frecuencia.

![Opciones de red](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/nit.png)

- `LCN Version` - este parámetro indica el número de versión de la tabla Logical Channel Number (LCN) utilizada por el servicio. La tabla LCN contiene información sobre la ordenación de los servicios en una región o país concretos
- `Delivery Type` - este parámetro define el método utilizado para entregar la señal para el servicio seleccionado
- `Frequency` - este parámetro determina la frecuencia de la señal de salida. Se puede ajustar en MHz (megahercios) y puede tener valores que oscilan entre 45 y 1002 MHz, en función del tipo de envío seleccionado para el modulador
- `Symbolrate` - Velocidad de símbolos. Se especifica en KBaudios
- `FEC` - si sus flujos contienen FEC, seleccione el valor requerido. En caso contrario, seleccione el valor por defecto
- `Modulation` - este parámetro permite seleccionar el tipo de modulación que se utilizará para el servicio seleccionado

## Búsqueda en la red[](/es/astra/delivery/mpts-settings#network-search)

Centrándose en estos parámetros, dvb-tuner y televisores modernos pueden realizar la búsqueda rápida. No llevar a cabo en los decodificadores y TV búsqueda de canales completa (que por lo general toma mucho tiempo), configurar este servicio simple y necesario:

1. Cree todos los flujos mpts necesarios y rellene en ellos los parámetros de Tipo de entrega. Por ejemplo:

- ```
     mpts_1 with frequency 378
    ```
    
- ```
     mpts_2 with frequency 386
    ```
    
- ```
     mpts_3 with frequency 394
    ```
    

2. Vaya a ajustes mpts\_1 y abra la pestaña NIT. Compruebe todos los multiplexores relacionados
3. ¡Hecho!

> Cómo funciona Durante la configuración del canal, el televisor o STB encuentra la frecuencia 378, con `mpts_1`, consiguió el `NIT` tablas para todos los multiplexores enlazados y escanearlos rápidamente.

## Ficha Avanzado[](/es/astra/delivery/mpts-settings#advanced-tab)

La pestaña Avanzado contiene opciones especiales y avanzadas para configurar el MPTS.

![Opciones avanzadas](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/advanced.png)

- `Disable PID's auto-remap` - Desactivar la redefinición automática de los números PID en MPTS
- `SI packets interval` - es el intervalo de envío de los datos del flujo. El valor por defecto es de 500 milisegundos. No es necesario modificar este valor
- `Pass NIT/SDT/EIT/TDT` - desactiva el procesamiento de Astra de estas tablas. Por ejemplo, las tablas son preparadas por un generador externo
- `PAT/NIT/CAT/SDT version` - número de versión de la tabla. El número se incrementa cada vez que se actualiza la configuración de mpts. Cuando el receptor dvb encuentra un cambio en el número de la tabla, lo relee inmediatamente. No es necesario cambiar los valores manualmente
