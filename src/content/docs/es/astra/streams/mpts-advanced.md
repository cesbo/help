---
title: "MPTS: Advanced Settings"
sidebar:
    order: 24
---

La pestaña Avanzada contiene configuraciones especializadas de MPTS. Estas opciones se utilizan generalmente para solucionar problemas o para la integración con sistemas externos. La mayoría de los usuarios pueden dejar estas configuraciones en sus valores predeterminados.

![Opciones Avanzadas](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/advanced.png)

- `Disable PID's auto-remap`: Evita que Astra reasigne automáticamente los números PID. Úselo cuando necesite preservar los valores de PID originales de las transmisiones de origen
- `SI packets interval`: Con qué frecuencia se transmite la información de servicio (por defecto: 500 ms). Cambie solo si es requerido por equipos específicos
- `Pass NIT/SDT/EIT/TDT`: Omite el procesamiento de tablas y pasa las tablas originales desde la fuente. Habilite cuando use generadores de EPG externos o tablas preconfiguradas
- `PAT/NIT/CAT/SDT version`: Números de versión personalizados para las tablas de servicio. Por defecto, Astra incrementa automáticamente la versión cuando cambian las configuraciones para activar actualizaciones en los dispositivos. Rara vez se necesitan cambios manuales