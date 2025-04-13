---
title: "API сканирования"
date: 2023-08-03
---

## Запуск анализатора[](https://help.cesbo.com/astra/admin-guide/api/scan#start-analyzer)

Запрос: `POST /control/`

```
{
    "cmd": "scan-init",
    "scan": "..."
}
```

- `scan` - адрес потока. Подробнее о [Формат медиа-адреса](https://help.cesbo.com/astra/receiving/general/address-format)

Ответ:

```
{
    "scan-init": "ok",
    "id": "..."
}
```

- `id` - идентификатор созданного экземпляра анализатора

Анализатор будет автоматически остановлен через 10 секунд. Для сохранения активности анализатора в течение более длительного времени используйте `scan-check` Метод API.

## Стоп-анализатор[](https://help.cesbo.com/astra/admin-guide/api/scan#stop-analyzer)

Запрос: `POST /control/`

```
{
    "cmd": "scan-kill",
    "id": "..."
}
```

- `id` - идентификатор экземпляра анализатора

Этот метод сразу же останавливает анализатор.

## Получить информацию[](https://help.cesbo.com/astra/admin-guide/api/scan#get-information)

Запрос: `POST /control/`

```
{
    "cmd": "scan-check",
    "id": "..."
}
```

- `id` - идентификатор экземпляра анализатора

Ответ:

```
{
    "scan-check": "ok",
    "scan": [
        {
            "psi": "...",
            "table_id": N,
            "pid": N,
            "version": N,
            "crc32": N,
            ...
        }
    ]
}
```

- `scan` - массив с информацией о потоке, при отсутствии новой информации это поле будет опущено

Информация о потоке:

- `psi` - Имя пакета Program Stream Information (PSI). Это может быть: `pat`, `pmt`, `cat`, `nit`, `sdt`
- `table_id` - Идентификатор PSI
- `pid` - Идентификатор пакета MPEG-TS
- `version` - Версия пакета PSI
- `crc32` - Контрольная сумма пакета PSI

Дополнительные поля зависят от типа PSI.

### PAT

Program Association Table (PAT) - это список программ. Содержит номер программы (PNR) и идентификатор пакета (PID) связанного с ним PMT. Дополнительные поля:

```
{
    "psi": "pat",
    "table_id": 0,
    "pid": 0,
    "tsid": N,
    "programs": [
        {
            "pnr": N,
            "pid": N
        }
    ]
}
```

- `table_id` - всегда `0`
- `pid` - всегда `0`
- `tsid` - Идентификатор транспортного потока
- `programs` - список программ

Информация о программе:

- `pnr` - номер программы
- `pid` - Идентификатор пакетов MPEG-TS для PMT

### PMT

Program Mapping Table (PMT) - это список элементарных потоков программы: Видео, Аудио и другие данные. Дополнительные поля:

```
{
    "psi": "pmt",
    "table_id": 2,
    "pnr": N,
    "pid": N,
    "pcr": N,
    "streams": [
        {
            "pid": N,
            "type_name": "...",
            "type_id": N,
            "descriptors": [
                {
                    "type_id": N,
                    "type_name": "...",
                    ...
                }
            ]
        }
    ]
}
```

- `table_id` - всегда `2`
- `pid` - Идентификатор пакета MPEG-TS
- `pnr` - Номер программы
- `pcr` - Идентификатор пакетов MPEG-TS для пакетов с временными метками Program Clock Reference (PCR)
- `streams` - перечень программных элементарных потоков

Информация об элементарном потоке:

- `pid` - Идентификатор пакета MPEG-TS для элементарного потока
- `type_name` - тип элементарного потока: `VIDEO`, `AUDIO`, `SUB`, `TTX`, `AIT`, `DATA`
- `type_id` - идентификатор элементарного потока
- `descriptors` - Дескрипторы элементарных потоков содержат дополнительную информацию
