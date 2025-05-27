---
title: "Интеграция Astra c Zabbix"
date: 2023-03-04
sidebar:
    order: 4
---

 Zabbix - это платформа с открытым исходным кодом для мониторинга сетевых служб, серверов и приложений. Она может быть интегрирована с Astra для мониторинга потоков и DVB-адаптеров.

:::note Доступно для версий Astra, выпущенных после 2021-05-11 ::

## Установка сервера Zabbix[](/ru/astra/monitoring/export/zabbix#zabbix-server-installation)

Zabbix может быть установлен как на выделенном сервере, так и на сервере Astra

1. Перейти на сайт [https://zabbix.com](https://zabbix.com/)
2. Выберите версию Zabbix
3. Выберите свою ОС
4. Следуйте инструкциям по установке

Подробную информацию можно найти в [руководствах Zabbix](https://www.zabbix.com/manuals).

## Установка агента Zabbix Agent[](/ru/astra/monitoring/export/zabbix#zabbix-agent-installation)

Установите Zabbix Agent на сервер с Astra.

1. Перейти на сайт [https://www.zabbix.com/download\_agents](https://www.zabbix.com/download_agents)
2. Выберите свою ОС
3. Следуйте инструкциям по установке

Подробную информацию можно найти в [руководстве по Zabbix Agent Manuals](https://www.zabbix.com/documentation/current/manual/concepts/agent)

## Конфигурация агента Zabbix[](/ru/astra/monitoring/export/zabbix#zabbix-agent-configuration)

Прежде всего, Zabbix Agent должен быть настроен на разрешение входящих соединений с сервера Zabbix. Откройте файл конфигурации агента, расположенный в `/etc/zabbix/zabbix_agentd.conf` с помощью вашего любимого редактора.

1. Найти `Server=` опцию и задайте IP-адрес или имя хоста сервера с Zabbix Server;
2. Найти `UnsafeUserParameters=` или добавить новое и установить значение `1`.

Сохранить файл.

Zabbix Agent получает всю информацию от Astra с помощью скриптов, написанных на Python. Убедитесь, что на вашем сервере установлен Python3:

```
sudo apt install python3 python3-pip
```

для использования в системах на базе RPM `yum` вместо `apt`. Далее установите необходимую библиотеку для Python:

```
pip3 install requests
```

Загрузите скрипты для Zabbix Agent:

```
curl https://cdn.cesbo.com/astra/zabbix/agent.tar.gz | tar -zxC /opt
```

Сценарии будут сохраняться в файле `/opt/zabbix_agent` каталог. Загрузите файл конфигурации сервиса для Zabbix Agent:

```
curl -o /etc/zabbix/zabbix_agentd.d/astra.conf https://cdn.cesbo.com/astra/zabbix/astra.conf
```

И, наконец, перезапустите Zabbix Agent:

```
systemctl restart zabbix-agent
```

## Конфигурация Zabbix[](/ru/astra/monitoring/export/zabbix#zabbix-configuration)

### Установка шаблона Zabbix для Astra

Загрузите [шаблон](https://cdn.cesbo.com/astra/zabbix/zbx_astra.xml) на свой компьютер и импортируйте этот файл в Zabbix:

В веб-интерфейсе Zabbix откройте `Configuration` -> `Templates`, затем нажмите кнопку `Import` в правом верхнем углу. Щелкните `Browse` и выберите загруженный файл шаблона, затем нажмите кнопку `Import` кнопку. После успешного импорта появится зеленое сообщение `Imported successfully`

### Настройка шаблона

В веб-интерфейсе Zabbix откройте `Configuration` -> `Templates`, затем выберите `Astra API monitoring` и откройте вкладку Макросы. Заполните следующие значения:

- Первая строка, установка пароля администратора для веб-интерфейса Astra
- Во второй строке установите имя пользователя администратора на Astra Web Interface
- Последняя строка - порт веб-интерфейса Astra. Если у вас несколько процессов, укажите все порты через запятую. Например: `8000,8001,8002`

Нажмите `Update` кнопка для применения изменений

### Подключение Zabbix к Astra

В веб-интерфейсе Zabbix откройте Конфигурация -> Хосты, затем нажмите кнопку `Create host` в правом верхнем углу. Заполните следующие поля:

- `Hostname` - произвольное имя сервера, на котором установлена Astra, например: Astra
- `Groups` - выбор `Cesbo_templates` или создать новую группу
- `Interfaces` - нажмите кнопку добавить, выберите `Agent` и укажите IP-адрес или имя хоста сервера с Zabbix Agent

Откройте вкладку Шаблоны и в поле `Link new templates` добавить `Astra API monitoring`. Кроме того, если вы хотите контролировать общее состояние системы, добавьте также `Linux by Zabbix agent`.

Сохраните изменения. Примерно через 10 минут на экране появятся графики и триггеры о состоянии каналов и адаптеров

## Примеры диаграмм[](/ru/astra/monitoring/export/zabbix#chart-examples)

![Каналы в Zabbix](https://cdn.cesbo.com/help/astra/monitoring/export/zabbix/zabbix-channel.png)

![DVB в Zabbix](https://cdn.cesbo.com/help/astra/monitoring/export/zabbix/zabbix-dvb.png)
