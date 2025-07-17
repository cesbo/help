---
title: "HTTP Server"
date: 2024-09-09
sidebar:
    order: 6
---

En el sistema Cesbo Alta, la configuración del servidor HTTP te permite gestionar los ajustes del servidor para la gestión de aplicaciones y para el streaming OTT. Los siguientes parámetros son personalizables:

![Opciones del Servidor HTTP](https://cdn.cesbo.com/help/alta/admin-guide/settings/http-server/server.png)

- **Interfaz**:
    - **Any**: Acepta conexiones desde todas las interfaces de red disponibles.
    - **Localhost**: Limita las conexiones solo a la máquina local.
- **Puerto**: Puedes seleccionar cualquier número de puerto disponible (sin usar). Por defecto, los siguientes puertos están configurados durante el proceso de `alta init`:
    - **Puerto de Gestión**: Usado para la interfaz web y acceso a la API.
    - **Puerto OTT**: Dedicado al acceso de streaming a los canales.

## HTTPS

- **Certificado**: Ruta completa a la cadena de certificados SSL/TLS que aseguran las conexiones HTTPS. Por ejemplo, `/etc/dehydrated/certs/example.com/fullchain.pem`.
- **Clave Privada**: Ruta completa a la clave privada correspondiente al certificado. Por ejemplo, `/etc/dehydrated/certs/example.com/privkey.pem`.

Puedes obtener un certificado TLS gratuito de [Let's Encrypt](https://letsencrypt.org/) usando herramientas como Dehydrated. Para más información, consulta la guía sobre la configuración de certificados HTTPS.

## Encabezados del Servidor

- **Tokens del Servidor**: Este es el encabezado HTTP `Server`. Por defecto, contiene el nombre y la versión del servidor, como `Alta/version-number`. Puedes elegir revelar u ocultar esta información según tus preferencias de seguridad.
- **Permitir Origen**: Controla qué dominios pueden acceder a tu servidor añadiendo dominios de confianza para CORS (Intercambio de Recursos de Origen Cruzado) a través del botón **Añadir**.

## Tiempos de Espera y Límites

- **Lectura (Seg)**: Configurado a **2 segundos** para limitar el tiempo de lectura de datos de los clientes.
- **Escritura (Seg)**: Configurable a **10 segundos** para el envío de datos.
- **Inactividad (Seg)**: Configurado a **10 segundos** para desconectar conexiones inactivas.
- **Límite**: El valor predeterminado es **5000**, lo que permite hasta 5000 conexiones simultáneas.

Estas configuraciones proporcionan flexibilidad y seguridad al configurar tu servidor OTT, asegurando un rendimiento óptimo y compatibilidad para aplicaciones de streaming.