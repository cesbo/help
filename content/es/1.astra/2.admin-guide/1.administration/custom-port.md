---
title: "Puerto personalizado para la interfaz web de Astra"
date: 2023-02-21
---

El puerto por defecto de la Interfaz Web de Astra es `8000`. Puede establecer el puerto que desee:

```
astra init 4000 astra
```

`astra` al final del comando es un nombre de servicio por defecto.

Por último, reinicie el servicio para aplicar los cambios:

```
systemctl restart astra
```

Ahora la interfaz web estará disponible en el nuevo puerto: `http://your-server:4000`
