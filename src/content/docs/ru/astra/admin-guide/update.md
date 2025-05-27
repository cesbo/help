---
title: "Обновление"
date: 2023-02-21
sidebar:
    order: 1
---

Установка новой версии на сервер:

:::note
Перед обновлением, пожалуйста [создайте резервную копию](/ru/astra/admin-guide/backup)!
:::

## Установка обновления[](/ru/astra/admin-guide/update#install-update)

Загрузите актуальную версию файла:

```
rm -f /usr/bin/astra
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

Перезагрузите Astra после обновления:

```
systemctl restart astra
```
