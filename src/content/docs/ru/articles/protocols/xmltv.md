---
title: XMLTV
date: 2023-06-13
sidebar:
    order: 9
---

XMLTV — это основанный на XML формат для описания информации о ТВ-программах. Он предоставляет механизм для хранения информации о каналах, расписаний программ и их связанной метаданных.

## Пример

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

### Свойства Канала

Элемент `<channel>` определяет отдельные телевизионные каналы.

```xml
<channel id="1">
  <display-name lang="en">Channel 1</display-name>
  <icon src="http://site.domain/1.png" />
</channel>
```

Атрибуты:

- `id` - уникальный идентификатор канала

Вложенные элементы:

- `display-name` – предоставляет название канала с указанным языком
- `icon` – URL логотипа канала

### Свойства События

Элемент `<programme>` в формате XMLTV представляет собой отдельное телешоу или трансляционное событие.

```xml
<programme start="20180920143000 +0300" stop="20180920141500 +0300" channel="2">
  <title lang="en">Program title 3</title>
  <desc lang="en">Program description 3</title>
  <date>Program release date 3</date>
  <category lang="en">Category 1</category>
  <category lang="en">Category 2</category>
</programme>
```

Атрибуты:

- `start` - время начала события
- `stop` - время окончания события
- `channel` - связывает программу с конкретным каналом

Вложенные элементы:

- `title` – предоставляет название программы. Атрибут lang может использоваться для указания языка названия
- `desc` – описание программы
- `date` – указывает дату выпуска программы
- `category` – жанр или категория программы. Для одной программы можно включить несколько элементов `<category>` для представления различных жанров или категорий, с использованием атрибута lang для указания языка

## EIT

Таблица информации о событиях (EIT) является частью транспортного потока MPEG-2 (MPEG-TS), используемого в цифровом вещании. Эта таблица содержит метаданные о запланированных событиях или программах на различных каналах, аналогично тому, что можно найти в электронном путеводителе телевизора или приставки.

XMLTV файл может быть преобразован в поток MPEG-TS с EIT-пакетами с помощью нашего бесплатного инструмента — EIT Stream. [Подробнее](/en/articles/tools-and-utilities/eit-stream/)

EIT-пакет может быть извлечен из потока MPEG-TS и сохранен в файлы XMLTV с помощью Astra.