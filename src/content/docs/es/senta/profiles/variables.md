---
title: Variables
description: Type variables in profiles
sidebar:
    order: 2
---

## Variables

En senta-streamer, hay varios tipos de variables que puedes usar en los perfiles:

- Variables estándar: `${i}` - flujo de entrada, `${o}` - flujo de salida
- Variables personalizadas (texto, booleano y selección)

## Especificación de variables personalizadas

Después de la palabra clave WHERE en un perfil, se inicia un Array JSON con la especificación de variables.

Para cada variable, se crea un objeto con los siguientes campos:

- `desc` - descripción de la variable, que utilizamos en el comando
- `name` - nombre que se usará en el formulario para agregar flujo
- `description` - descripción de la variable, que se usará en el formulario para agregar flujo (opcional)
- `command` - parte del comando, donde `$value` se cambiará por el valor del formulario para agregar flujo (ejemplo `-gpu $value`).
- `default` - valor por defecto, que puede estar vacío,

Por ejemplo:

```bash
// Perfil básico para codificación HD h264
// Puedes cambiarlo, bifurcarlo y compartirlo con otros
ffmpeg -y -hide_banner -i ${i} -map 0:0 -map 0:1 -c:v h264_nvenc ${gpu} -preset fast -profile:v main -filter:v yadif -forced-idr 1 -b:v 4M -c:a aac -b:a 128k -r 25 -g 8 -keyint_min 13 -f mpegts ${o}
NAME "HD h264"
WHERE
[
 {
   "desc": "gpu",
   "data": {
    "name": "GPU",
    "description": "Selecciona la GPU que usará el flujo, déjalo vacío si no usas GPU",
    "command": "-gpu $value",
    "default": ""
   }
 }
]
```

En este ejemplo:

Variables estándar:

Variables estándar (no necesitas escribir información sobre ellas):
`${i}` - flujo de entrada, puedes usar más de 1 entrada, en el menú de agregar flujo estarán numeradas desde 0 (entrada #0, entrada #1 ...)
`${o}` - flujo de salida, puedes usar más de 1 salida, en el menú de agregar flujo estarán numeradas desde 0

Variables personalizadas:

(en este ejemplo, puedes agregar lo que necesites):
`${gpu}` - número del adaptador de gpu

**Nota:** el valor por defecto en este ejemplo está vacío (en el comando NO agregues `-gpu`), pero puedes establecer un valor por defecto

## Variables de texto

Al formar la línea de comando, las variables de texto reemplazan la variable con texto personalizado.

Ejemplo de una variable de texto:

```json
{
"desc": "logo",
"data": {
 "name": "Ruta del logo",
 "description": "Ingresa la ruta del archivo de imagen con el logo",
 "command": "-i $value",
 "default": ""
}
}
```

En el perfil, la variable `${logo}` será reemplazada por `-i $value`.

En el editor de flujo, se agrega un campo con la etiqueta `Ruta del logo`, con la descripción `Ingresa la ruta del archivo de imagen con el logo`, y su valor reemplazará `$value`.

Al final, tenemos un perfil:

```bash
ffmpeg -i ${i} ${logo} bla-bla ${o}
NAME "TEST"
WHERE
[
    {
        "desc": "logo",
        "data": {
             "name": "Ruta del logo",
             "description": "Ingresa la ruta del archivo de imagen con el logo",
             "command": "-i $value",
             "default": ""
        }
    }
]
```

En la configuración del flujo, especificaremos:

```
input#0: 'inp.ts'
output#0: 'udp://out:1234'
logo: 'logo.ts'
```

Como resultado, el comando de lanzamiento será:

```bash
ffmpeg -i inp.ts -i logo.ts bla-bla udp://out:1234
```

## Variables booleanas

Las variables booleanas insertan texto al formar el comando de lanzamiento, si el valor es `true` y no lo insertan cuando el valor es `false`.

Para establecer este tipo necesitas agregar `"extendtion": {"type": "checkbox",}` en la estructura de la variable.

Ejemplo:

```
// Ejemplo de variable booleana
// Esta variable se usa para establecer la opción -y, que es necesaria para reescribir el archivo de salida
"desc": "rev",
"data": {
 "name": "Reescribir archivo",
 "description": "Esta opción es necesaria si como salida usas un archivo local",
 "command": "-y",
 "default": "",
 "extendtion": {
  "type": "checkbox",
 }
}
```

Esta variable agrega la bandera `-y` si la casilla está marcada.

## Variables de selección

Similares a las variables de texto, solo que se le da al usuario la oportunidad de elegir entre valores preestablecidos. Conveniente de usar, por ejemplo, al establecer la resolución de imagen o al fijar el códec.

Necesitas agregar `"extendtion": {"type": "select"}` en la estructura de la variable y agregar opciones preestablecidas en `"options": [...]`.

Ejemplo.

```
// Ejemplo de variable de selección
// Esta variable se utiliza para seleccionar el códec de video
"desc": "cv",
"data": {
 "name": "Códec de vídeo",
 "description": "Para copiar el códec original establece copia",
 "command": "-c:v $value",
 "default": "",
 "extendtion": {
  "type": "select",
  "options": [
   "h264_nvenc",
   "libx264",
   "libx265",
   "hevc_nvenc",
   "libaom-av1",
   "libvpx",
   "libvpx-vp9",
   "copy"
  ]
 }
}
```

## Variable de autogeneración

:::note[¡Importante!]
Esta funcionalidad está disponible solo con una [licencia](/en/senta/getting-started/add-license) activa.
:::

Esta funcionalidad se está desarrollando para la integración con otros sistemas, como [Astra Cesbo](https://cesbo.com). Sin embargo, puedes usarla manualmente. Actualmente, se ha implementado la generación automática de entradas.

Por ejemplo, un sistema externo puede enviar flujos con direcciones `udp://192.168.0.1:9000` - `udp://192.168.0.1:9999` a Senta para su posterior transcodificación. Sin embargo, para crear un proceso, necesitamos conocer un puerto disponible (ya que el puerto podría estar ya ocupado por otro flujo). Para permitir que Senta asigne un puerto, necesitamos:

Ir a Configuración, donde hay una sección llamada Configuraciones de generación automática de entradas. Allí, configuramos el puerto inicial: `9000`, el puerto final: `9999`, y la IP de la interfaz: `192.168.0.1`. Luego, aplicamos las configuraciones.

![Ejemplo de entrada](https://cesbo.b-cdn.net/senta/help/auto-gen.png)

Al crear un proceso, asignamos la dirección de entrada como `udp://${host}:${port}` (o asignamos la dirección al crear el flujo presionando el botón `Establecer generación automática`). En consecuencia, se crea un proceso con la entrada `udp://192.168.0.1:9000`, suponiendo que el puerto 9000 esté libre en el servidor.

Senta monitorea los puertos libres/ocupados. Cuando se elimina un flujo, se libera el puerto que ocupaba.