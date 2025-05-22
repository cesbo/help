---
title: "Recepción de SRT"
date: 2023-03-23
sidebar:
    order: 13
---

El protocolo SRT (Secure Reliable Transport) es un protocolo de streaming de vídeo de código abierto diseñado para ofrecer streaming de vídeo de alta calidad y baja latencia en redes poco fiables. SRT utiliza el cifrado de extremo a extremo y ofrece una serie de funciones diseñadas para mejorar la fiabilidad y la seguridad, como la corrección de errores, el control de la congestión y la retransmisión de paquetes perdidos. SRT se utiliza a menudo para aplicaciones de transmisión de vídeo en directo, como retransmisiones deportivas y de noticias, en las que es fundamental mantener una conexión fiable y de alta calidad.

::alert
Disponible para las versiones de Astra lanzadas después del 2021-12-21
::

## Formato de la dirección[](https://help.cesbo.com/astra/receiving/ip/srt#address-format)

La TER podía recibirse de dos modos:

- `Caller mode` - Astra envía la petición al servidor SRT y recibe el contenido como respuesta. Esta es la variante más popular
- `Listener mode` - Astra espera a que el servidor SRT establezca la conexión y reciba el contenido solicitado. Este es el modo punto a punto

El formato de la dirección depende del modo seleccionado.

### Modo de llamada

```
srt://address:port[#options]
```

- `address` - dirección IPv4 o nombre de host del servidor remoto
- `port` - puerto remoto

Ejemplo:

- `src://example.com:3001` - enviar solicitud a ejemplo.com

### Modo oyente

En el modo de escucha, el formato de la dirección es similar al de la dirección UDP, con la adición del carácter `@` para indicar el nombre de la interfaz local.

```
srt://[interface]@:port[#options]
```

- `interface` - Nombre de la interfaz local donde escuchar la conexión. Por defecto Astra esperará conexión en todas las interfaces
- `port` - puerto local para aceptar la conexión entrante
- `options` - opciones adicionales para el protocolo SRT

Ejemplos:

- `srt://@:3001` - esperar conexión en cualquier interfaz
- `srt://eth0@:3001` - espera de conexión en la interfaz `eth0`

### Opciones

- `timeout=N` - reinicia el receptor si no se reciben datos en un intervalo definido, segundos. Valor por defecto: `5` segundos
- `latency=N` - Latencia máxima de transmisión aceptada, en milisegundos. Valor por defecto: `120` milisegundo
- `packetfilter=S` - inyectar instrucciones de procesamiento adicionales al principio y/o al final de una transmisión para aplicar la corrección de errores hacia delante (FEC). [Seguir leyendo](https://github.com/Haivision/srt/blob/master/docs/features/packet-filtering-and-fec.md#configuring-the-fec-filter) en la documentación oficial
- `passphrase=S` - contraseña para la transmisión encriptada. La longitud de la contraseña debe estar en el rango de 10 .. 79 caracteres
- `pbkeylen=N` - Longitud de la clave criptográfica en bytes. Valores posibles: 16, 24, 32. Valor por defecto: `0`
- `streamid=ID` - identificador de flujo, proporcionado al servidor SRT en modo llamada
- `no_tsbpdmode` - desactivar el modo de entrega de paquetes basado en marcas de tiempo
- `oheadbw` - limita la sobrecarga del ancho de banda, en porcentaje. Valores posibles en el rango: 5 - 100. Valor por defecto: `25`

## Interfaz web[](https://help.cesbo.com/astra/receiving/ip/srt#web-interface)

Uno de los mayores retos de trabajar con el protocolo Secure Reliable Transport (SRT) es navegar por el abanico de requisitos técnicos y configuraciones que implica el proceso de configuración. Afortunadamente, Astra agiliza este proceso ofreciendo un amplio conjunto de opciones de configuración de entrada SRT

Para añadir una nueva entrada SRT en Astra, los usuarios pueden navegar a la sección `New Stream` o la configuración de un flujo existente y seleccione la opción `Input Type` como SRT

![Oyente SRT](https://cdn.cesbo.com/help/astra/receiving/ip/srt/listener.png)

- `Input type` - este parámetro es la primera opción de la pestaña de configuración SRT y se utiliza para seleccionar el tipo de entrada. Para configurar la recepción SRT, seleccione `SRT` de la lista desplegable. Esto habilita las opciones de configuración específicas de SRT y le permite introducir la información necesaria para recibir un flujo SRT
- `SRT mode` - este parámetro determina si Astra actuará como llamante o como oyente al establecer una conexión SRT. Para recibir un flujo SRT, seleccione `Listener` de la lista desplegable. Esto le dice a Astra que espere las conexiones entrantes del emisor del flujo SRT
- `Local interface` - este parámetro especifica la interfaz de red que Astra utilizará para recibir el flujo SRT. El valor por defecto es `Any interface`lo que significa que Astra escuchará las conexiones SRT entrantes de acuerdo con las reglas de enrutamiento del sistema. Si desea restringir Astra a una interfaz específica, selecciónela en la lista desplegable
- `Port` - este parámetro opcional especifica el puerto de red que Astra utilizará para recibir el flujo SRT
- `Timeout` - este parámetro opcional especifica la cantidad de tiempo (en milisegundos) que Astra esperará los datos entrantes del flujo SRT antes de que se agote el tiempo de espera. El valor por defecto es 5000 milisegundos (5 segundos), pero puedes aumentar o disminuir este valor si es necesario.
- `Latency` - este parámetro opcional introduce una cantidad especificada de retardo (en milisegundos) en el flujo SRT. El valor por defecto es 120ms. Aumentar la latencia puede mejorar la estabilidad pero aumenta el retardo, y disminuirla puede reducir el retardo pero puede hacer que la conexión sea menos estable
- `Passphrase` - este parámetro opcional establece una frase de contraseña para la comunicación segura a través del flujo SRT. El valor por defecto es vacío. Si se establece una frase de contraseña, tanto el emisor como el receptor deben utilizar la misma para establecer una conexión.
- `Crypto key length` - este parámetro establece la longitud de la clave criptográfica utilizada para asegurar el flujo SRT. El valor por defecto es 128 bits, que es suficiente para que funcione la recepción SRT. Sin embargo, puede aumentar o disminuir la longitud de la clave si es necesario para una mayor o menor seguridad.
- `Timestamp` - Modo de entrega de paquetes basado en marcas de tiempo - este parámetro activa o desactiva el modo de entrega de paquetes basado en marcas de tiempo de SRT. Cuando está activado (marcado), SRT utiliza marcas de tiempo para asegurar que los paquetes se entregan en el orden correcto, incluso si llegan fuera de orden. Esto puede mejorar la calidad del flujo pero puede aumentar la latencia. El estado por defecto de este parámetro es desactivado
