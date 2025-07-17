---
title: "SSH: Basics"
sidebar:
    order: 11
---

SSH - es el protocolo y herramienta principal para la gestión de servidores remotos. También te permite crear túneles y transferir archivos.

## Utilidades SSH

### Servidor OpenSSH

- `sshd` (Daemon de OpenSSH): Un demonio del lado del servidor que escucha conexiones SSH entrantes. Autentica a los usuarios y establece sesiones seguras.
- `sftp-server` (subsistema del servidor SFTP): Un programa para transferencias de archivos usando el protocolo SFTP, usualmente invocado automáticamente por el demonio sshd.

### Cliente OpenSSH

- `ssh` (cliente SSH): Inicia sesión en un servidor remoto, proporciona un terminal virtual y ejecuta comandos.
- `ssh-keygen`: Crea y gestiona claves de autenticación.
- `scp`: Copia archivos entre máquinas locales y remotas usando un canal cifrado.
- `sftp`: Transfiere archivos a través de un canal seguro, similar a FTP.

## Conexión al servidor

```bash
ssh root@example.com
```

Conectar al servidor con un puerto personalizado:

```bash
ssh -p 2222 root@example.com
```

Conectar al servidor con una clave privada específica:

```
ssh -i ~/.ssh/server_ed25519 root@example.com
```

## Configuración del Cliente

El cliente SSH puede funcionar sin un archivo de configuración y obtener todos los parámetros necesarios de los argumentos de línea de comandos. Sin embargo, puedes crear un archivo de configuración llamado `~/.ssh/config`. Este archivo debe contener la siguiente información:

```
Host example.com
    HostName 192.168.1.1
    User root
    Port 2222
    IdentityFile ~/.ssh/server_ed25519
```

- `Host`: nombre del servidor. Este es el nombre usado en el comando de conexión: `ssh example.com`
- `HostName`: dirección del servidor opcional. Si no se define HostName, se debe definir la dirección o nombre de host adecuado en `Host`
- `User`: nombre de usuario
- `Port`: el puerto del servidor. Predeterminado: `22`
- `IdentityFile`: un campo opcional que especifica la ruta completa al archivo de clave privada

## Claves SSH

Las claves SSH son una forma más segura de iniciar sesión en un servidor SSH, en comparación con usar contraseñas. Consisten en un par de claves: una clave pública y una clave privada. La clave pública se coloca en el servidor al que deseas conectarte, mientras que la clave privada permanece en tu máquina local.

:::caution
¡No compartas tus claves privadas!
:::

### Generación

Para generar un par de claves SSH, usa el siguiente comando:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/server_ed25519
```

- `ed25519` - selecciona el tipo de cifrado. Ed25519 es la opción óptima
- `~/.ssh/server_ed25519` - la ruta al archivo de clave privada. La clave pública se generará como `~/.ssh/server_ed25519.pub`

Una vez que se inicie el comando, te pedirá que ingreses una contraseña. Esta contraseña proporciona un nivel adicional de seguridad y debe ingresarse al conectarse al servidor.

La clave pública es una sola línea con el siguiente formato:

```
ssh-ed25519 AAAA...UUUU user@example.com
```

### Copiar Clave Pública al Servidor

En el lado del servidor, añade esta línea al archivo `~/.ssh/authorized_keys`. Este archivo puede contener una o más claves. Para añadir la clave pública, ejecuta el siguiente comando:

```bash
echo "ssh-ed25519 AAAA...UUUU user@example.com" >>~/.ssh/authorized_keys
```

## Reenvío del Agente SSH

El reenvío del agente SSH te permite usar tus claves SSH locales en un servidor remoto sin compartirlas. Esto es útil cuando necesitas acceder a otro servidor desde el primer servidor sin almacenar tus claves en el servidor remoto.

Puedes habilitar el reenvío del agente SSH usando la opción -A con el comando ssh:

```bash
ssh -A example.com
```

Alternativamente, puedes habilitarlo permanentemente para un host específico en tu archivo de configuración SSH `~/.ssh/config`:

```
Host example.com
    ForwardAgent yes
```

:::note
El Agente SSH solo se reenviará en una sesión SSH activa, y la clave privada no se copiará al servidor remoto. No se recomienda el reenvío del agente SSH para servidores no confiables.
:::

## SSH Proxy Jump

ProxyJump es otro mecanismo útil. Te permite conectar a un servidor remoto a través de un servidor SSH intermedio, también conocido como "jump host".

Para conectarte al server2 a través del server1:

```bash
ssh -J user@server1 server2
```

Alternativamente, puedes habilitarlo permanentemente para un host específico en tu archivo de configuración SSH `~/.ssh/config`:

```
Host server2
    ProxyJump user@server1
```

Ahora simplemente puedes usar:

```bash
ssh server2
```