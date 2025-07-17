---
title: Updating Astra
description: Download and install the latest version of Astra with proper backup procedures
sidebar:
    order: 12
---

Установите новую версию на ваш сервер

:::danger
Перед обновлением, пожалуйста, [сделайте резервную копию](/en/astra/getting-started/backup/)!
:::

## Установка обновления

Скачайте последнюю версию бинарного файла:

```sh
rm -f /usr/bin/astra
curl -Lo /usr/bin/astra https://cesbo.com/astra-latest
chmod +x /usr/bin/astra
```

Перезапустите Astra после обновления:

```sh
systemctl restart astra
```