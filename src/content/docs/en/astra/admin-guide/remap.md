---
title: "Stream Remap Settings"
date: 2023-08-14
sidebar:
    order: 13
---

The Remap feature allows to modify stream identifiers and filter unneded packets

![Stream Remap Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/remap.png)

- `Map PID's` - modify the Packet Identifier (PID) for MPEG-TS elementary streams. Read more in [Remapping Stream PIDs](/astra/processing/mpegts/remap)
- `Filter PID's` - removes specific packets within the MPEG-TS stream based on their PIDs. Read more in [Filtering Stream PIDs](/astra/processing/mpegts/filter)
- `Change PNR` - change program number. Program number could be in range from 1 to 65535
- `Change TSID` - change transport stream identifier
