---
title: "MPTS: Advanced Settings"
sidebar:
    order: 24
---

The Advanced tab contains specialized MPTS settings. These options are typically used for troubleshooting or integration with external systems. Most users can leave these settings at their default values.

![Advanced Options](https://cdn.cesbo.com/help/astra/delivery/broadcasting/mpts/advanced.png)

- `Disable PID's auto-remap`: Prevents Astra from automatically reassigning PID numbers. Use when you need to preserve original PID values from source streams
- `SI packets interval`: How often service information is transmitted (default: 500ms). Only change if required by specific equipment
- `Pass NIT/SDT/EIT/TDT`: Skips table processing and passes original tables from source. Enable when using external EPG generators or pre-configured tables
- `PAT/NIT/CAT/SDT version`: Custom version numbers for service tables. By default Astra automatically increments version when settings change to trigger updates on devices. Manual changes are rarely needed
