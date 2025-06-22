---
title: "MPTS: Advanced Settings"
sidebar:
    order: 24
---

The Advanced tab contains special, advanced options for configuring MPTS

![Advanced Options](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/advanced.png)

- `Disable PID's auto-remap` - Disable automatic redefinition of PID numbers in MPTS
- `SI packets interval` - this is the interval for sending stream data. The default value is 500 milliseconds. This value does not need to be changed
- `Pass NIT/SDT/EIT/TDT` - disables Astra processing of these tables. For example, tables are prepared by an external generator
- `PAT/NIT/CAT/SDT version` - table version number. The number is incremented each time the mpts settings are updated. When the dvb receiver finds a change in the table number, it immediately re-reads it. There is no need to change the values manually
