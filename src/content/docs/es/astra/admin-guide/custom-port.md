---
title: Custom port for Astra Web Interface
sidebar:
    order: 7
---

El puerto predeterminado para la Interfaz Web de Astra es `8000`. Puede establecer cualquier puerto que desee:

```
astra init 4000 astra
```

`astra` al final del comando es el nombre de servicio predeterminado.

Finalmente, reinicie el servicio para aplicar los cambios:

```
systemctl restart astra
```

Ahora la interfaz web estará disponible en el nuevo puerto: `http://your-server:4000`