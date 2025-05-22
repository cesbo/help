---
title: "XMLTV"
date: 2023-06-13
sidebar:
    order: 9
---

XMLTV es un formato basado en XML para describir información sobre la programación de televisión. Proporciona un mecanismo para almacenar información sobre canales, horarios de programas y sus metadatos asociados.

## Ejemplo[](https://help.cesbo.com/misc/articles/format/xmltv#example)

```
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
    <desc lang="en">Program description 1</title>
    <date>Program release date 1</date>
    <category lang="en">Category 1</category>
    <category lang="en">Category 2</category>
  </programme>
  <programme start="20180920150000 +0300" stop="20180920141600 +0300" channel="1">
    <title lang="en">Program title 2</title>
    <desc lang="en">Program description 2</title>
    <date>Program release date 2</date>
    <category lang="en">Category 1</category>
  </programme>
  <programme start="20180920143000 +0300" stop="20180920141500 +0300" channel="2">
    <title lang="en">Program title 3</title>
    <desc lang="en">Program description 3</title>
    <date>Program release date 3</date>
    <category lang="en">Category 1</category>
    <category lang="en"> Category 2</category>
  </programme>
</tv>
```

### Propiedades del canal

En `<channel>` define canales de televisión individuales.

```
<channel id="1">
  <display-name lang="en">Channel 1</display-name>
  <icon src="http://site.domain/1.png" />
</channel>
```

Atributos:

- `id` - identificador único de canal

Elementos anidados:

- `display-name` - proporciona el nombre del canal con el idioma especificado
- `icon` - url al logotipo del canal

### Propiedades de los eventos

En `<programme>` del formato XMLTV representa un programa de televisión individual o un evento de emisión.

```
<programme start="20180920143000 +0300" stop="20180920141500 +0300" channel="2">
  <title lang="en">Program title 3</title>
  <desc lang="en">Program description 3</title>
  <date>Program release date 3</date>
  <category lang="en">Category 1</category>
  <category lang="en">Category 2</category>
</programme>
```

Atributos:

- `start` - hora de inicio del evento
- `stop` - hora de finalización del evento
- `channel` - vincula el programa a un canal específico

Elementos anidados:

- `title` - proporciona el nombre del programa. El atributo lang puede utilizarse para especificar el idioma del título
- `desc` - descripción del programa
- `date` - pecifica la fecha de lanzamiento del programa
- `category` - género o categoría del programa. Múltiples
    

## IET[](https://help.cesbo.com/misc/articles/format/xmltv#eit)

La tabla de información de eventos (EIT) forma parte del flujo de transporte MPEG-2 (MPEG-TS) utilizado en radiodifusión digital. Esta tabla contiene metadatos sobre los eventos o programas programados en varios canales, de forma similar a la guía de programas que se puede encontrar en un televisor digital o descodificador.

El archivo XMLTV se puede convertir al flujo MPEG-TS con paquetes EIT con nuestra herramienta gratuita - EIT Stream. [Más información](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/eit-stream)

El paquete EIT puede extraerse del flujo MPEG-TS y guardarse en archivos XMLTV con Astra.
