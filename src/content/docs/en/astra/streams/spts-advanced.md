---
title: "Stream: Advanced Settings"
sidebar:
    order: 16
---

![Stream: Form for Advanced Settings](https://cdn.cesbo.com/help/astra/admin-guide/stream/advanced.png)

- `Enable monitoring`: analyze stream status and send reports to the monitoring system
- `Channel Number`: option used to order channels in the playlist
- `Start stream on demand`: Astra will wait for an incomming request to start stream. This mode is turned of for channels with UDP or HLS outputs
- `Keep Active`: additional option for the on-demand mode. By default, when the last client is closes connection, Astra turns channel off. This option allows the channel to remain active for some time
- `HLS Header`: custom HLS stream information for the `EXT-X-STREAM-INF`
