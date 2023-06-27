---
title: XMLTV format
date: 2023-06-13
---

The format of THE xmltv TV program is based on the structured XML data language and is widely used in IP television due to its simplicity and accessibility for understanding.

## The types of XMLTV

IPTV can use files that are uncompressed, such as xmltv.xml – usually have an extension .xml and compressed, such as xmltv.xml.gz is an xmltv file.xml Packed with gzip archiver. The second option is used to save free space on the media device and increase the download speed, this is especially true if the program file contains a large amount of data.

## XMLTV example

A typical XMLTV program file is a file with XML content that describes the channels and schedule.
Sample XMLTV file :

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

### Description of the markup file of the tv program

`<?xml version="1.0" encoding="UTF-8"?>` - a header indicating that the file contains XML markup


`<!DOCTYPE tv SYSTEM "xmltv.dtd">` - a header indicating that the xmltv template will be used - xmltv.dtd


`<tv generator-info-name="Some tv generator">` - Between the tags contains all data about the program, generator-info-name indicates the name of the generator that created this XML file, is an optional parameter.

## A description of the markup of the channels

```
<channel id="1">
  <display-name lang="en">Channel 1</display-name>
  <icon src="http://site.domain/1.png"/>
</channel>
```

- `Id=”1”` – the unique identifier of the channel. It can be both numeric and text. By this identifier, the player matches the channel and its program.
- `display-name` – the name of the channel, the attribute lang specifies the language in which the name of the channel.
- `lang` - is an optional parameter.
- `icon` – specifies a link to the channel logo, the link to the logo must be specified in the src attribute

DESCRIPTION OF TV PROGRAM MARKUP
After all channels which are present in the program file are specified, it is necessary to describe the program for channels :

```
<programme start="20180920143000 +0300" stop="20180920141500 +0300" channel="2">
  <title lang="en">Program title 3</title>
  <desc lang="en">Program description 3</title>
  <date>Program release date 3</date>
  <category lang="en">Category 1</category>
  <category lang="en">Category 2</category>
</programme>
```

- `programme` – between these tags, there is information about the TV show. Has a number of required attributes :
- `start` – indicates the start time of the tv program in the format YYYYMMDDHHMMSS (TZ) :
- `YYYY` – year
- `MM` – month
- `DD` – day
- `HH` – hour
- `MM` – minutes
- `SS` – seconds
- `TZ` – time zone, for example +0300, optional
- `stop` – indicates the end time of the tv transmission in the format YYYYMMDDHHMMSS (TZ), optional
- `channel` – the unique channel ID specified above. Indicates which channel the transmission belongs to.
- `title` – the name of the transfer. The lang attribute specifies the language that is optional.
- `desc` – transfer description is optional. The lang attribute specifies the language that is optional.
- `date` – the date of the broadcast, may differ from the date of the broadcast – an optional parameter.
- `category` – the name of the category to which the tv transmission belongs is an optional parameter. For a single transmission may contain multiple categories – genres.
- The `lang` attribute specifies the language that is optional.
