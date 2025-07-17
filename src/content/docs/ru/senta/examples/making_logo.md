---
title: Adding logo
description: Make logo for stream
sidebar:
    order: 2
---

Чтобы сделать логотип для стрима, вы можете использовать профиль ffmpeg [Добавление логотипа](https://github.com/cesbo/senta-streamer-profiles/blob/master/profiles/logo.profile). Вот пример того, как можно добавить логотип к стриму:

Сначала вам нужно добавить профиль для логотипа. Перейдите на вкладку [ffmpeg профили](/en/senta/profiles) и нажмите [загрузить профиль с github](/en/senta/profiles/loading-from-github). Затем найдите профиль `Добавление логотипа` и добавьте его.

Затем необходимо добавить этот профиль к стриму. Установите параметры ввода и вывода. И переменные: X, Y - смещение логотипа от верхнего правого угла, logo - путь к файлу с логотипом.

![](https://cesbo.b-cdn.net/senta/help/streamer/add_logo_1.png)В этом примере мы получаем поток из rtsp потока и загружаем ts-файл на сервер.

![](https://cesbo.b-cdn.net/senta/help/streamer/add_logo_2.png)Наконец, вы можете увидеть результат в VLC.

![](https://cesbo.b-cdn.net/senta/help/streamer/whith_logo.png)