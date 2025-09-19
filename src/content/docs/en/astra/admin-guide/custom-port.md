---
title: Custom port for Astra Web Interface
sidebar:
    order: 7
---

Default port for Astra Web Interface is `8000`. You may set any port you want:

```
astra init 4000 astra
```

`astra` at the end of command is a default service name.

Finally restart service to apply changes:

```
systemctl restart astra
```

Now web interface will be available on new port: `http://your-server:4000`
