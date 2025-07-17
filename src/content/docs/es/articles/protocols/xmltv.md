---
title: XMLTV
date: 2023-06-13
sidebar:
    order: 9
---

XMLTV es un formato basado en XML para describir información de programación de televisión. Proporciona un mecanismo para almacenar información de canales, horarios de programas y sus metadatos asociados.

## Ejemplo

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE tv SYSTEM "xmltv.dtd">
<tv generator-info-name="Some tv generator">
  <channel id="1">
    <display-name lang="en">Channel 1</display-name>
    <icon src="http://site.domain/1.png"/>
  </channel>
  <channel id="2">
    <display-name lang="en">Channel 2</display-name>
    <icon src="http://site.domain/2.png"/>
  </channel>
  <programme start="20180920140000 +0300" stop="20180920141500 +0300" channel="1">
    <title lang="en">Program title 1</title>
    <desc lang="en">Program description 1</desc>
    <date>Program release date 1</date>
    <category lang="en">Category 1</category>
    <category lang="en">Category 2</category>
  </programme>
  <programme start="20180920150000 +0300" stop="20180920141600 +0300" channel="1">
    <title lang="en">Program title 2</title>
    <desc lang="en">Program description 2</desc>
    <date>Program release date 2</date>
    <category lang="en">Category 1</category>
  </programme>
  <programme start="20180920143000 +0300" stop="20180920141500 +0300" channel="2">
    <title lang="en">Program title 3</title>
    <desc lang="en">Program description 3</desc>
    <date>Program release date 3</date>
    <category lang="en">Category 1</category>
    <category lang="en">Category 2</category>
  </programme>
</tv>
```

### Propiedades del Canal

El elemento `<channel>` define canales de televisión individuales.

```xml
<channel id="1">
  <display-name lang="en">Channel 1</display-name>
  <icon src="http://site.domain/1.png" />
</channel>
```

Atributos:

- `id` - identificador único del canal

Elementos anidados:

- `display-name` – proporciona el nombre del canal con el idioma especificado
- `icon` – url al logo del canal

### Propiedades del Evento

El elemento `<programme>` en el formato XMLTV representa un programa de televisión individual o evento de emisión.

```xml
<programme start="20180920143000 +0300" stop="20180920141500 +0300" channel="2">
  <title lang="en">Program title 3</title>
  <desc lang="en">Program description 3</desc>
  <date>Program release date 3</date>
  <category lang="en">Category 1</category>
  <category lang="en">Category 2</category>
</programme>
```

Atributos:

- `start` - hora de inicio del evento
- `stop` - hora de fin del evento
- `channel` - vincula el programa a un canal específico

Elementos anidados:

- `title` – proporciona el nombre del programa. El atributo lang se puede usar para especificar el idioma del título
- `desc` – descripción del programa
- `date` – especifica la fecha de lanzamiento del programa
- `category` – género o categoría del programa. Se pueden incluir múltiples elementos `<category>` para un solo programa para representar múltiples géneros o categorías, con el atributo lang definiendo el idioma

## EIT

La Tabla de Información de Eventos (EIT) es parte del flujo de transporte MPEG-2 (MPEG-TS) utilizado en la transmisión digital. Esta tabla contiene metadatos sobre los eventos o programas programados en varios canales, similar a la guía de programas que uno podría encontrar en una televisión digital o decodificador.

El archivo XMLTV podría convertirse al flujo MPEG-TS con paquetes EIT usando nuestra herramienta gratuita - EIT Stream. [Leer más](/en/articles/tools-and-utilities/eit-stream/)

El paquete EIT podría extraerse del flujo MPEG-TS y guardarse en archivos XMLTV con Astra.