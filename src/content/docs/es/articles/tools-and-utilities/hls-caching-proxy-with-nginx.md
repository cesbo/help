---
title: "HLS Caching Proxy with Nginx"
date: 2023-03-01
sidebar:
    order: 7
---

Nginx se puede utilizar en servidores de borde para actuar como un proxy de caché HLS. Si una solicitud para un archivo no se encuentra en la caché, se recupera del servidor de origen con la dirección `http://192.168.88.100:8000`. El archivo se almacena en la carpeta `/opt/ramcache`, y luego se sirve al cliente.

Crea un archivo de configuración de Nginx para el Proxy de Caché HLS en `/etc/nginx/conf.d/hls_proxy.conf`:

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

y las opciones de proxy comunes en `/etc/nginx/hls_proxy_params.conf`:

```
proxy_redirect              off;

proxy_connect_timeout       5s;
proxy_send_timeout          180s;
proxy_read_timeout          180s;

# Búfer para encabezados
proxy_buffer_size           16k;
proxy_buffers               512  32k;
proxy_temp_file_write_size  512k;
proxy_max_temp_file_size    256m;

# Para mantener vivo
proxy_http_version          1.1;

proxy_set_header            Host $host;
proxy_set_header            X-Real-IP $remote_addr;
proxy_set_header            X-Forwarded-For $remote_addr;
proxy_set_header            X-Forwarded-Proto $scheme;

proxy_next_upstream         error timeout http_502 http_504;
proxy_next_upstream_tries   2;
```

Crea un directorio para la caché de nginx y establece al propietario el usuario apropiado:

```
mkdir -p /opt/ramcache
chown -R nginx:root /opt/ramcache
```

## Encabezado Expires

Es importante que el servidor fuente envíe una respuesta con encabezados adecuados que definan el tiempo de expiración del contenido que se está sirviendo.

Los encabezados `Expires` y `X-Accel-Expires` se pueden utilizar para especificar la cantidad de tiempo que una respuesta debe ser considerada fresca y puede ser almacenada en caché por Nginx. El encabezado Expires se puede utilizar para especificar un tiempo de expiración absoluto para el contenido, mientras que el encabezado X-Accel-Expires se puede utilizar para especificar un tiempo de expiración relativo en segundos.

En la configuración de Astra, puedes activar los encabezados en Configuración -> HLS -> Usar encabezado Expires.