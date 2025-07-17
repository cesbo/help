---
title: SRT
sidebar:
    order: 13
---

El protocolo Secure Reliable Transport (SRT) es un protocolo de transmisión de video de código abierto diseñado para proporcionar transmisión de video de baja latencia y alta calidad sobre redes poco fiables. SRT utiliza cifrado de extremo a extremo y ofrece una gama de características diseñadas para mejorar la fiabilidad y seguridad, incluyendo corrección de errores, control de congestión y retransmisión de paquetes perdidos. SRT se utiliza a menudo para aplicaciones de transmisión de video en vivo, como transmisiones de deportes y noticias, donde mantener una conexión fiable y de alta calidad es fundamental.

:::caution
Disponible para versiones de Astra lanzadas después del 2021-12-21
:::

## Formato de Dirección

SRT se puede recibir en dos modos:

- `Modo Caller (Llamante)` - Astra envía una solicitud al servidor SRT y recibe el contenido en respuesta. Esta es la variante más popular.
- `Modo Listener (Oyente)` - Astra espera que el servidor SRT establezca una conexión y recibe el contenido en una solicitud. Este es el modo punto a punto.

El formato de dirección depende del modo seleccionado.

### Modo Caller

```
srt://dirección:puerto[#opciones]
```

- `dirección` - dirección IPv4 del servidor remoto o nombre de host
- `puerto` - puerto remoto

Ejemplo:

- `src://example.com:3001` - enviar solicitud a example.com

### Modo Listener

En el modo oyente, el formato de dirección es similar al de la dirección UDP, con la adición del símbolo `@` para indicar el nombre de la interfaz local.

```
srt://[interfaz]@:puerto[#opciones]
```

- `interfaz` - nombre de la interfaz local donde escuchar la conexión. Por defecto, Astra esperará la conexión en todas las interfaces.
- `puerto` - puerto local para aceptar la conexión entrante.
- `opciones` - opciones adicionales para el protocolo SRT.

Ejemplos:

- `srt://@:3001` - esperar conexión en cualquier interfaz.
- `srt://eth0@:3001` - esperar conexión en la interfaz `eth0`.

### Opciones

- `timeout=N` - reinicia el receptor si no se reciben datos dentro de un intervalo definido, en segundos. Valor por defecto: `5` segundos.
- `latency=N` - latencia máxima de transmisión aceptada, en milisegundos. Valor por defecto: `120` milisegundos.
- `packetfilter=S` - inyecta instrucciones de procesamiento extra al principio y/o al final de una transmisión para implementar Corrección de Errores Adelantada (FEC). [Leer más](https://github.com/Haivision/srt/blob/master/docs/features/packet-filtering-and-fec.md#configuring-the-fec-filter){target="_blank"} en la documentación oficial.
- `passphrase=S` – contraseña para la transmisión cifrada. La longitud de la contraseña debe estar en el rango de 10 a 79 caracteres.
- `pbkeylen=N` – longitud de la clave de cifrado en bytes. Posibles valores: 16, 24, 32. Valor por defecto: `0`.
- `streamid=ID` – identificador del flujo, proporcionado al servidor SRT en modo caller.
- `no_tsbpdmode` – desactiva el modo de entrega de paquetes basado en marcas de tiempo.
- `oheadbw` - limita el ancho de banda adicional, en porcentajes. Valores posibles en el rango: 5 - 100. Valor por defecto: `25`.

## Interfaz Web

Uno de los mayores desafíos al trabajar con el protocolo Secure Reliable Transport (SRT) es navegar por la variedad de requisitos técnicos y configuraciones involucradas en el proceso de configuración. Afortunadamente, Astra simplifica este proceso al ofrecer un conjunto completo de opciones de configuración de entrada de SRT.

Para añadir una nueva entrada SRT en Astra, los usuarios pueden navegar a la pestaña `Nuevo Stream` o la configuración de un stream existente y seleccionar la opción `Tipo de Entrada` como SRT.

![Oyente SRT](https://cdn.cesbo.com/help/astra/receiving/ip/srt/listener.png)

- `Tipo de entrada` - este parámetro es la primera opción en la pestaña de configuración de SRT y se utiliza para seleccionar el tipo de entrada. Para configurar la recepción de SRT, seleccione `SRT` de la lista desplegable. Esto habilita las opciones de configuración específicas de SRT y le permite ingresar la información necesaria para recibir un stream SRT.
- `Modo SRT` - este parámetro determina si Astra actuará como llamante o oyente al establecer una conexión SRT. Para recibir un stream SRT, seleccione `Oyente` de la lista desplegable. Esto indica a Astra que espere conexiones entrantes del remitente del stream SRT.
- `Interfaz local` - este parámetro especifica la interfaz de red que Astra utilizará para recibir el stream SRT. El valor por defecto es `Cualquier interfaz`, lo que significa que Astra escuchará las conexiones SRT entrantes de acuerdo con las reglas de enrutamiento del sistema. Si desea restringir a Astra a una interfaz específica, selecciónela de la lista desplegable.
- `Puerto` - este parámetro opcional especifica el puerto de red que Astra utilizará para recibir el stream SRT.
- `Timeout` - este parámetro opcional especifica la cantidad de tiempo (en milisegundos) que Astra esperará por datos entrantes del stream SRT antes de que el tiempo de espera expire. El valor predeterminado es 5000 milisegundos (5 segundos), pero puede aumentar o disminuir este valor si es necesario.
- `Latencia` - este parámetro opcional introduce una cantidad especificada de retraso (en milisegundos) en el stream SRT. El valor por defecto es 120ms. Aumentar la latencia puede mejorar la estabilidad, pero aumenta el retraso, y disminuirla puede reducir el retraso pero puede hacer que la conexión sea menos estable.
- `Contraseña` - este parámetro opcional establece una contraseña para la comunicación segura sobre el stream SRT. El valor predeterminado es vacío. Si se establece una contraseña, tanto el remitente como el receptor deben usar la misma para establecer una conexión.
- `Longitud de la clave de cifrado` - este parámetro establece la longitud de la clave criptográfica utilizada para asegurar el stream SRT. El valor por defecto es de 128 bits, que es suficiente para que la recepción de SRT funcione. Sin embargo, puede aumentar o disminuir la longitud de la clave si es necesario para una seguridad más fuerte o más débil.
- `Entrega de paquetes basada en marcas de tiempo` - este parámetro habilita o deshabilita el modo de entrega de paquetes basado en marcas de tiempo de SRT. Cuando está habilitado (marcado), SRT utiliza marcas de tiempo para asegurar que los paquetes se entreguen en el orden correcto, incluso si llegan fuera de orden. Esto puede mejorar la calidad del stream, pero puede aumentar la latencia. El estado predeterminado de este parámetro está desactivado.