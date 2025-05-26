---
title: "Proxy de caché HLS con Nginx"
date: 2023-03-01
sidebar:
    order: 7
---

Nginx podría utilizarse en servidores edge para actuar como proxy de caché HLS. Si una solicitud de un archivo no se encuentra en la caché, se recupera del servidor de origen con dirección `http://192.168.88.100:8000`. Archivo almacenado en el `/opt/ramcache` y luego se sirve al cliente.

Crear un archivo de configuración Nginx para HLS Caching Proxy en `/etc/nginx/conf.d/hls_proxy.conf`:

```
proxy_cache_path "/opt/ramcache" use_temp_path=off keys_zone=hls:1m inactive=30s max_size=10g;

server {
    listen 4000;
    server_name _;

    location ~* \.(m3u8)$ {
        proxy_cache off;
        expires -1;
        proxy_pass http://192.168.88.100:8000;
        include /etc/nginx/hls_proxy_params.conf;
    }

    location ~* \.(ts)$ {
        proxy_pass http://192.168.88.100:8000;
        proxy_cache hls;
        proxy_cache_key $request_uri;
        proxy_cache_valid 200 10s;
        proxy_cache_lock on;
        proxy_cache_lock_timeout 5s;
        proxy_cache_lock_age 5s;
        include /etc/nginx/hls_proxy_params.conf;
    }
}
```

y opciones de representación comunes en `/etc/nginx/hls_proxy_params.conf`:

```
proxy_redirect              off;

proxy_connect_timeout       5s;
proxy_send_timeout          180s;
proxy_read_timeout          180s;

# Buffer for headers
proxy_buffer_size           16k;
proxy_buffers               512  32k;
proxy_temp_file_write_size  512k;
proxy_max_temp_file_size    256m;

# For keepalive
proxy_http_version          1.1;

proxy_set_header            Host $host;
proxy_set_header            X-Real-IP $remote_addr;
proxy_set_header            X-Forwarded-For $remote_addr;
proxy_set_header            X-Forwarded-Proto $scheme;

proxy_next_upstream         error timeout http_502 http_504;
proxy_next_upstream_tries   2;
```

Cree un directorio para la caché de nginx y establezca el propietario en el usuario adecuado:

```
mkdir -p /opt/ramcache
chown -R nginx:root /opt/ramcache
```

## Cabecera Expires[](/es/misc/tools-and-utilities/hls-caching-proxy-with-nginx#expires-header)

Es importante que el servidor de origen envíe una respuesta con las cabeceras adecuadas que definan el tiempo de caducidad del contenido que se está sirviendo.

En `Expires` y `X-Accel-Expires` se pueden utilizar para especificar la cantidad de tiempo que una respuesta debe ser considerada fresca y puede ser almacenada en caché por nginx. La cabecera Expires se puede utilizar para especificar un tiempo de caducidad absoluto para el contenido, mientras que la cabecera X-Accel-Expires se puede utilizar para especificar un tiempo de caducidad relativo en segundos.

En los ajustes de Astra puede activar las cabeceras en Ajustes -> HLS -> Usar cabecera Expires
