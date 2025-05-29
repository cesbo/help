# Alta Cesbo Web UI – Channels Tab

## Overview

The **Channels** tab allows viewing and managing all streaming channels.
Each channel appears as a table row with controls to enable, preview, edit, export, or delete.

## Channel Table Fields

- **Channel Name**: User-defined label
- **Path**: Stream endpoint, part of HLS URL.
- **Receiver(s)**: Input source(s) for the stream.
- **Authorizer**: Access control (HTTP Backend, Secure token, IP allowlist). Read more [Authorizer]()
- **Storage**: Disk space usage per variant.
- **Duration**: Buffered content retention time

## Channel Control Options

- **Enable Toggle**: Start/stop the stream.
- **Export m3u**: Download M3U8 playlist. Read more [Export m3u]()
- **Create Channel**: Open form to add a new channel.

## Create/Edit Channel Dialog

Used for both new and existing channels. Includes:

1. **Enable**: Enable or disable stream.
2. **Name**: Channel identifier.
3. **Path**: HLS URL suffix (e.g., `/<path>` → `http://<alta_host>/<path>/index.m3u8`).
4. **Variants**: Enhances stream resilience (fallback if one variant fails).
   - Name of variant(e.g., hd/sd, or 1080p/720p, etc.).
   - Receiver. Each variant must have a defined receiver.

5. **Authorizer**:
   - Select predefined access control.
   - If disabled, stream is public.

6. **Storage & Duration**:
   - **Storage**: Disk quota per variant (select from existing storages). Read more [Storage]()
   - **Duration**: Retention time overrides storage default if different.

7. **EPG Option**:
   - `tvg-id`: XMLTV ID.
   - `tvg-logo`: Logo URL.

## Best Practices

- **Naming**: Use standardized labels for consistency.
- **Storage**: Adjust allocation based on expected viewership.
- **Security**: Always use Authorizer for public-facing channels.
- **Variants**: Configure only necessary resolutions to reduce load.
