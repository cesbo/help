---
title: Add profile
description: How add profile?
sidebar:
    order: 3
---

Вы можете прочитать о профиле [здесь](/ru/senta/profiles)

Чтобы добавить профиль, перейдите на вкладку **ffmpeg profiles**

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof-tab.png)

Затем нажмите `Add profile`

![](https://cesbo.b-cdn.net/senta/help/streamer/add-prof.png)

Далее установите имя

![](https://cesbo.b-cdn.net/senta/help/streamer/supname.png)

После этого настройте команду. В этом примере мы создаем команду, которая непрерывно передает статический файл (например, для создания тестовой дорожки).

```bash
ffmpeg -re -stream_loop -1 -i ${i} -vcodec mpeg4 -aspect 16:9 -f mpegts ${o}
```

В этой команде ffmpeg входной поток заменен переменной `${i}`, а выходной поток — переменной `${o}`. Сохраните изменения

![](https://cesbo.b-cdn.net/senta/help/streamer/promt.png)Профиль будет добавлен

![img](https://cesbo.b-cdn.net/senta/help/streamer/profile-added.png)