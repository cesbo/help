---
title: "XMLTV"
date: 2023-06-13
sidebar:
    order: 9
---

XMLTV is an XML-based format for describing TV schedule information. It provides a mechanism to store channel information, programme schedules, and their associated metadata. 

## Example

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

### Channel Properties

The `<channel>` element defines individual television channels.

```
<channel id="1">
  <display-name lang="en">Channel 1</display-name>
  <icon src="http://site.domain/1.png" />
</channel>
```

Attributes:

- `id` - unique channel identifier

Nested elements:

- `display-name` – provides the name of the channel with specified language
- `icon` – url to the channel logo

### Event Properties

The `<programme>` element in the XMLTV format represents an individual television show or broadcast event.

```
<programme start="20180920143000 +0300" stop="20180920141500 +0300" channel="2">
  <title lang="en">Program title 3</title>
  <desc lang="en">Program description 3</title>
  <date>Program release date 3</date>
  <category lang="en">Category 1</category>
  <category lang="en">Category 2</category>
</programme>
```

Attributes:

- `start` - event beginning time
- `stop` - event ending time
- `channel` - links the programme to a specific channel

Nested elements:

- `title` – provides the name of the programme. The lang attribute can be used to specify the language of the title
- `desc` – description of the programme
- `date` – pecifies the release date of the programme
- `category` – genre or category of the programme. Multiple <category> elements can be included for a single programme to represent multiple genres or categories, with the lang attribute defining the language

## EIT

The Event Information Table (EIT) is a part of the MPEG-2 Transport Stream (MPEG-TS) used in digital broadcasting. This table contains metadata about the scheduled events or programmes on various channels, similar to the programme guide one might find on a digital TV or set-top box.

XMLTV file could be converted to the MPEG-TS stream with EIT packets with our free tool - EIT Stream. [Read More](/misc/tools-and-utilities/tv-and-media/eit-stream)

EIT packet could be extracted from MPEG-TS stream and saved to XMLTV files with Astra.
