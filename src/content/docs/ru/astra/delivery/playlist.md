---
title: "Плейлист для HTTP Play"
date: 2023-08-22
sidebar:
    order: 12
---

Astra формирует простой плейлист со ссылками на все включенные каналы. Этот список воспроизведения доступен только для функции [HTTP Play](/ru/astra/delivery/http-play).

![Настройки HTTP Play](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/http-play.png)

## Формат плейлиста[](/ru/astra/delivery/playlist#playlist-format)

Astra предоставляет доступ к списку воспроизведения в следующих форматах:

- `M3U8` - наиболее популярный формат, поддерживаемый всеми медиаплеерами
- `XSPF` - это формат плейлиста на основе XML, поддерживаемый некоторыми плеерами

В данном руководстве мы будем использовать формат M3U8.

## Ссылки на список воспроизведения[](/ru/astra/delivery/playlist#links-to-the-playlist)

По умолчанию ссылка на список воспроизведения M3U8:

```
http://example.com:8000/playlist.m3u8
```

Где:

- `example.com` - IP-адрес вашего сервера
- `8000` - порт для HTTP Play, по умолчанию он равен порту веб-интерфейса Astra, но может быть изменен в настройках HTTP Play
- `playlist.m3u8` - имя файла плейлиста, также может быть изменено в настройках HTTP Play

## Группы каналов[](/ru/astra/delivery/playlist#channel-groups)

Для более удобной навигации каналы в плейлисте можно сгруппировать. Для этого создайте новую категорию в разделе Настройки -> Группы. Подробнее о том, как создавать [группы каналов](/ru/astra/admin-guide/channel-groups).

Затем выберите созданную категорию в окне `HTTP Play` настройки, опция `Playlist Arrange`.

:::note Некоторые проигрыватели, например VLC, не поддерживают группы M3U8 и показывают плоский плейлист. ::

## Логотипы каналов[](/ru/astra/delivery/playlist#channel-logos)

Некоторые игроки и промежуточные решения отображают логотипы каналов рядом со своими названиями в списке каналов.

![Логотипы каналов на Middleware](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/mw.jpg)

Для начала скачайте архив с изображениями логотипов по адресу: [https://epg.it999.ru/it999\_transparent\_logo.zip](https://epg.it999.ru/it999_transparent_logo.zip). Скачать и распаковать архив на своем сервере можно с помощью следующих команд:

```
mkdir -p /var/lib/astra
cd /var/lib/astra
curl -LO https://epg.it999.ru/it999_transparent_logo.zip
unzip it999_transparent_logo.zip
rm it999_transparent_logo.zip
```

В разделе Настройки -> `HTTP Play` -> `Path to TV logos`, задайте путь как `/var/lib/astra/it999_transparent_220x132`. Обратите внимание, что имя каталога указано для примера выше.

В предоставленный архив входят логотипы в формате PNG, имена файлов совпадают с именами каналов. После выполнения этих шагов список воспроизведения теперь будет содержать `tvg-logo` опция для каждого канала.

## Электронный программный гид[](/ru/astra/delivery/playlist#electronic-program-guide)

Некоторые плееры и промежуточные решения отображают текущие и предстоящие события для каналов. Электронный программный гид (EPG) может быть экспортирован в плеер в формате XMLTV или в любом другом формате, поддерживаемом плеером.

В меню Astra Settings -> `HTTP Play` -> `M3U Header`, установить опцию

```
url-tvg="https://teleguide.info/download/new3/xmltv.xml.gz"
```

Строка будет добавлена в заголовок плейлиста и предоставит информацию о местоположении EPG. Данный URL является лишь примером, вы можете использовать любой другой источник EPG или изучить наше решение, [EPG Aggregator](/ru/astra/admin-guide/epg).

Последним шагом является настройка идентификатора канала для связи ваших каналов с записями EPG. Каждый канал в XMLTV имеет уникальный идентификатор, например:

```
<channel id="226">
    <display-name lang="en">Discovery Channel</display-name>
</channel>
```

В программе Astra перейдите к настройкам канала, откройте вкладку EPG и установите значение `XMLTV Channel ID` значение для `226`:

![Параметры потоковой EPG](https://cdn.cesbo.com/help/astra/delivery/http-hls/playlist/stream-epg.png)
