---
title: "Instalar"
date: 2023-02-21
sidebar:
    order: 2
---

La instalación de Astra es un proceso sencillo: basta con copiar un único archivo binario a su servidor.

## Requisitos[](/es/astra/getting-started/first-steps/install#requirements)

- Cualquier sistema operativo basado en Linux
- CPU x86 de 64 bits
- Conexión a Internet de su servidor
- Se requiere un acceso periódico a Internet para que Astra valide la licencia en los servidores: `ls1.cesbo.com`, `ls2.cesbo.com`y `ls3.cesbo.com`

:::note En esta guía utilizamos el **rizo** para descargar archivos. La mayoría de las distribuciones de Linux tienen preinstalado **rizo**
:::

## Instalar Astra[](/es/astra/getting-started/first-steps/install#install-astra)

Abra la consola de su servidor y descargue el archivo binario:

`curl -Lo /usr/bin/astra https://cesbo.com/astra-latest` 

Establecer permiso de ejecución:

`chmod +x /usr/bin/astra` 

Instalación completada, ahora puede comprobar el número de versión:

`astra -v` 

## Obtener licencia[](/es/astra/getting-started/first-steps/install#get-license)

Se requiere una licencia válida para ejecutar Astra en su servidor. Puede obtener una licencia de demostración gratuita o comprar una suscripción en nuestro sitio web: [https://cesbo.com/astra-license](https://cesbo.com/astra-license)

Para instalar la licencia siga las instrucciones del correo electrónico con la nueva licencia.

## Lanzar Astra[](/es/astra/getting-started/first-steps/install#launch-astra)

Después de la instalación, registre el nuevo servicio en el systemd:

`astra init` 

Este comando registra Astra como un servicio del sistema con el nombre `astra` y con puerto de gestión `8000`. Para iniciar el servicio lance el comando:

`systemctl start astra` 

Más información sobre la gestión de servicios y el lanzamiento de servicios adicionales en su servidor: [Gestionar el servicio Astra](/es/astra/getting-started/first-steps/manage-service).

## Activar la ejecución automática[](/es/astra/getting-started/first-steps/install#enable-autorun)

Active la ejecución automática para su servicio:

`systemctl enable astra` 

Servicio Now `astra` se iniciará automáticamente al arrancar el sistema.

## Iniciar sesión en la interfaz web[](/es/astra/getting-started/first-steps/install#login-to-web-interface)

Después de instalar Astra, puedes acceder a su interfaz web utilizando un navegador web - Chrome, Safari o Firefox. El puerto por defecto para la interfaz web es 8000. Así que la dirección de la interfaz será `http://your-server-address:8000`. Para iniciar sesión en la interfaz web, utilice el nombre de usuario y la contraseña predeterminados, ambos configurados como "admin". Se recomienda cambiar la contraseña predeterminada para evitar accesos no autorizados.

Leer el siguiente artículo sobre [Astra Web Interface](/es/astra/getting-started/first-steps/web-interface)
