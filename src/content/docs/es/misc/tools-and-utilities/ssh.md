---
title: "SSH"
date: 2023-02-28
sidebar:
    order: 11
---

SSH - es el principal protocolo y herramienta para la gestión de servidores remotos. También le permite crear túneles y transferir archivos.

## Conexión al servidor[](/es/misc/tools-and-utilities/ssh#connection-to-server)

```
ssh root@192.168.1.1
```

## Configuración de clientes[](/es/misc/tools-and-utilities/ssh#client-configuration)

El cliente SSH puede funcionar sin un archivo de configuración y recuperar todos los parámetros necesarios de los argumentos de la línea de comandos. Sin embargo, puede crear un archivo de configuración llamado `~/.ssh/config`. Este archivo debe contener la siguiente información:

```
Host server-alias
    HostName 192.168.1.1
    User root
    Port 222
    IdentityFile ~/.ssh/server_ed25519
```

- `Host` - nombre del servidor. Este es el nombre utilizado en el comando de conexión: `ssh server-alias`
- `HostName` - una dirección de servidor opcional. Si no se define HostName, la dirección o el nombre de host adecuados deben definirse en `Host`
- `User` - nombre de usuario
- `Port` - el puerto del servidor. Por defecto: `22`
- `IdentityFile` - un campo opcional que especifica la ruta completa al archivo de clave privada

## Generación de claves[](/es/misc/tools-and-utilities/ssh#key-generation)

Por razones de seguridad, se recomienda encarecidamente utilizar claves de autenticación en lugar de contraseñas.

Para generar una clave de autenticación, ejecute el siguiente comando:

```
ssh-keygen -t ed25519 -f ~/.ssh/server_ed25519
```

- `ed25519` - selecciona el tipo de cifrado. Ed25519 es la elección óptima
- `~/.ssh/server_ed25519` - la ruta al archivo de la clave privada. La clave pública se generará como `~/.ssh/server_ed25519.pub`

Una vez iniciado el comando, le pedirá que introduzca una contraseña. Esta contraseña proporciona un nivel adicional de seguridad y debe introducirse al conectarse al servidor.

La clave pública es una sola línea con el siguiente formato:

```
ssh-ed25519 AAAA...UUUU user@example.com
```

En el servidor, añada esta línea al archivo `~/.ssh/authorized_keys` archivo. Este archivo puede contener una o más claves. Para añadir la clave pública, ejecute el siguiente comando:

```
echo "ssh-ed25519 AAAA...UUUU user@example.com" >>~/.ssh/authorized_keys
```

## Copiar archivo al servidor[](/es/misc/tools-and-utilities/ssh#copy-file-to-server)

Para copiar archivos en el servidor, utilice el siguiente comando:

```
scp FILE 192.168.1.1:REMOTE
```

- `FILE` - ruta al archivo en el ordenador local
- `192.168.1.1` - dirección del servidor
- `REMOTE` - ruta absoluta al archivo en el servidor

## Reenvío de puertos[](/es/misc/tools-and-utilities/ssh#port-forwarding)

Para reenviar el tráfico de un servidor remoto a un equipo local, utilice el siguiente comando:

```
ssh -L 4000:192.168.88.100:554 192.168.1.1
```

- `4000` - el número de puerto en el ordenador local con cliente ssh
- `192.168.88.100:554` - la dirección IP y el número de puerto del ordenador remoto
- `-fNT` - opciones adicionales para ejecutar el cliente SSH en segundo plano

Por ejemplo, si la dirección remota es una cámara IP con la dirección de flujo `rtsp://admin:123@192.168.88.100:554/stream1`SSH reenviará todas las peticiones al puerto `4000` a esta cámara. Una vez iniciada la transmisión, puede abrirse en VLC utilizando la siguiente URL: `rtsp://admin:123@127.0.0.1:4000/stream1`.
