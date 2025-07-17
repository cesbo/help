---
title: "MPTS: NIT Settings"
sidebar:
    order: 23
---

La pestaña NIT (Tabla de Información de Red) te permite configurar la información de red para tu flujo MPTS. Proporciona información a los dispositivos de los espectadores sobre las redes disponibles, incluyendo el ID de la red, el nombre y la frecuencia.

![Opciones de Red](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/nit.png)

- `Versión LCN`: El Número de Canal Lógico controla cómo se ordenan los canales en los dispositivos de los espectadores en tu región.
- `Tipo de Entrega`: Método utilizado para entregar la señal (cable, terrestre, satélite).
- `Frecuencia`: Frecuencia de salida de la señal en MHz. Rango: 45-1002 MHz dependiendo del tipo de entrega.
- `Tasa de Símbolos`: Tasa de símbolos en KBaud (kilobaud - miles de símbolos por segundo).
- `FEC`: Configuración de Corrección de Errores Directa. Usa por defecto a menos que tus flujos requieran un FEC específico.
- `Modulación`: Tipo de modulación de señal para el servicio.

## Búsqueda de Red

Con la búsqueda de red configurada, los decodificadores y televisores pueden usar la Búsqueda Rápida en lugar de un escaneo completo de canales. Esto ahorra tiempo a los espectadores evitando búsquedas largas de canales.

Para configurar la Búsqueda de Red:

1. Crea todos los flujos MPTS necesarios y configura sus parámetros de Tipo de Entrega. Por ejemplo:
  - mpts_1 con frecuencia de 378 MHz
  - mpts_2 con frecuencia de 386 MHz
  - mpts_3 con frecuencia de 394 MHz
2. Abre la configuración para mpts_1 y ve a la pestaña NIT.
3. Marca todos los multiplex relacionados para incluirlos en la información de la red.
4. Guarda tu configuración.

### Cómo funciona

Cuando un televisor o decodificador encuentra la frecuencia de 378 MHz con `mpts_1`, obtiene las tablas NIT de todos los multiplex vinculados y los escanea rápidamente en lugar de buscar en cada frecuencia posible.

## Moduladores

Astra utiliza la configuración NIT para configurar automáticamente los moduladores DigitalDevices y TBS definidos en la Lista de Salida MPTS. Cuando configuras los parámetros NIT en tu flujo MPTS, Astra aplica estas configuraciones directamente al hardware del modulador:

- `Frecuencia`: Configura la frecuencia de salida RF en el modulador.
- `Tasa de Símbolos`: Establece la tasa de símbolos para la señal modulada.
- `Modulación`: Aplica el esquema de modulación (QPSK, QAM16, QAM64, etc.).
- `FEC`: Configura la Corrección de Errores Directa en el hardware.

Esta integración elimina la necesidad de una configuración separada del modulador, ya que Astra sincroniza automáticamente la configuración de tu flujo con el hardware.