---
title: License
description: Get demo, subscription, or lifetime licenses for Astra with installation, renewal, and troubleshooting instructions
sidebar:
    order: 3
---

Necesitas una licencia válida para usar Astra. Si es la primera vez que usas Astra, obtén una licencia demo gratuita de 40 días para probar todas las funciones.

**→ [Obtén tu licencia demo gratuita](https://app.cesbo.com/orders/software/astra/demo/)**

## Tipos de Licencia

Astra ofrece tres opciones de licencia:

- **Demo** - Prueba gratuita de 40 días con todas las funciones. Solo para evaluación, no para uso comercial.
- **Suscripción** - Incluye soporte técnico y actualizaciones regulares con nuevas características y correcciones de errores.
- **Vitalicia** - Compra única para uso permanente. Funciona con versiones lanzadas antes de la fecha de tu compra. Puedes actualizar en cualquier momento para obtener la última versión.

## Qué Ocurre Después de Obtener una Licencia

1. **Revisa tu correo electrónico** - Recibirás un correo con tu archivo de licencia e instrucciones de instalación.
2. **Instala la licencia** - Sigue las instrucciones paso a paso en el correo para instalar tu archivo de licencia en tu servidor.
3. **Reinicia Astra** - Ejecuta `systemctl restart astra` para activar tu nueva licencia.
4. **Comienza a usar Astra** - Tu licencia está ahora activa y puedes comenzar a configurar tu sistema de transmisión.

:::note
Los correos de licencia se envían inmediatamente. Si no ves el correo, revisa tu carpeta de spam.
:::

## Comprar Licencia

¿Listo para comprar una suscripción o una licencia vitalicia? Visita nuestro sitio web para ver opciones de precios y compra.

**→ [Comprar Licencia](https://cesbo.com/astra-license)**

Después de la compra, recibirás tu licencia por correo electrónico con instrucciones de instalación.

## Renovar Licencia

Te enviaremos recordatorios de renovación por correo electrónico:
- 7 días antes de que expire tu licencia
- El día que expire tu licencia

Ambos correos incluyen un enlace directo para renovar tu suscripción. También puedes renovar en cualquier momento en tu [Perfil](https://cesbo.com/profile).

Tu número de serie sigue siendo el mismo después de la renovación, por lo que no se necesita configuración adicional.

:::note
Después de renovar tu licencia, reinicia Astra para actualizar la información de licencia.
:::

## Actualizar Licencia

¿Necesitas añadir más servidores a tu suscripción? Puedes actualizar en cualquier momento en tu [Perfil](https://cesbo.com/profile).

**Cómo funciona el precio:**

- El costo de actualización se calcula en función de tus días de suscripción restantes.
- Obtienes un descuento para servidores adicionales.
- Utiliza nuestra calculadora de precios para ver los costos exactos antes de actualizar.

**Para degradar:** Contacta con nuestro equipo de soporte para obtener asistencia.

## Transferir Licencia

Puedes transferir tu licencia y suscripción a otra cuenta, por favor contáctanos en el chat.

## Restablecer Licencia

Si perdiste tu licencia o se ha filtrado, puedes restablecer tu número de serie. Abre tu perfil en nuestro sitio web: [Perfil](https://cesbo.com/profile) y haz clic en "Restablecer número de serie". Recibirás una nueva licencia y guía de instalación por correo inmediatamente.

## Solución de Problemas

### Error: "Error al verificar la licencia"

Astra verifica tu licencia al inicio conectándose a uno de estos servidores:

- `ls1.cesbo.com`
- `ls2.cesbo.com`
- `ls3.cesbo.com`

**Para resolver este error:**

1. Verifica que tu servidor tenga acceso a internet.
2. Asegúrate de que estos dominios no estén bloqueados por tu firewall.
3. Verifica que las conexiones salientes HTTP y HTTPS estén permitidas.

### Mensaje: "¡Licencia expirada!" después de la renovación

Si renovaste tu licencia pero Astra aún muestra "¡Licencia expirada!" en la interfaz web, reinicia Astra para actualizar la información de la licencia: Configuraciones → Reiniciar.