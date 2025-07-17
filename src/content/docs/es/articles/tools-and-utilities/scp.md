---
title: SCP
sidebar:
    order: 13
---

SCP (Protocolo de Copia Segura) es una utilidad de línea de comandos para transferir archivos de manera segura entre sistemas locales y remotos a través de SSH. Utiliza los mismos mecanismos de autenticación y seguridad que SSH, asegurando que los datos estén cifrados durante la transmisión.

Para copiar archivos al servidor, use el siguiente comando:

```bash
scp FILE example.com:REMOTE
```

- `FILE` - ruta al archivo en la computadora local
- `192.168.1.1` - dirección del servidor
- `REMOTE` - ruta absoluta al archivo en el servidor