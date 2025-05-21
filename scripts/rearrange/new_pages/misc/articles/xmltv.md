---
title: "XMLTV"
date: 2023-06-13
sidebar:
    order: 9
---

XMLTV - это формат описания информации о расписании телепередач, основанный на XML. Он предоставляет механизм для хранения информации о каналах, расписании программ и связанных с ними метаданных.

## Пример[](https://help.cesbo.com/misc/articles/format/xmltv#example)

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

### Свойства канала

Сайт `<channel>` Элемент определяет отдельные телевизионные каналы.

```
<channel id="1">
  <display-name lang="en">Channel 1</display-name>
  <icon src="http://site.domain/1.png" />
</channel>
```

Атрибуты:

- `id` - уникальный идентификатор канала

Вложенные элементы:

- `display-name` - предоставляет имя канала с указанным языком
- `icon` - url на логотип канала

### Свойства события

Сайт `<programme>` Элемент в формате XMLTV представляет собой отдельную телепередачу или эфирное событие.

```
<programme start="20180920143000 +0300" stop="20180920141500 +0300" channel="2">
  <title lang="en">Program title 3</title>
  <desc lang="en">Program description 3</title>
  <date>Program release date 3</date>
  <category lang="en">Category 1</category>
  <category lang="en">Category 2</category>
</programme>
```

Атрибуты:

- `start` - время начала мероприятия
- `stop` - время окончания мероприятия
- `channel` - привязка программы к конкретному каналу

Вложенные элементы:

- `title` - содержит название программы. Атрибут lang может быть использован для указания языка заголовка
- `desc` - описание программы
- `date` - указывает дату выпуска программы
- `category` - жанр или категория программы. Несколько
    

## EIT[](https://help.cesbo.com/misc/articles/format/xmltv#eit)

Таблица информации о событиях (Event Information Table, EIT) является частью транспортного потока MPEG-2 (MPEG-TS), используемого в цифровом вещании. Эта таблица содержит метаданные о запланированных событиях или программах на различных каналах, подобно программному гиду, который можно найти на цифровом телевизоре или приставке.

Файл XMLTV может быть преобразован в поток MPEG-TS с пакетами EIT с помощью нашего бесплатного инструмента - EIT Stream. [Читать далее](https://help.cesbo.com/misc/tools-and-utilities/tv-and-media/eit-stream)

Пакет EIT может быть извлечен из потока MPEG-TS и сохранен в файлах XMLTV с помощью программы Astra.
