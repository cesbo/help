---
title: General Options
weight: 2
---

- Enable - turns adapter on/off
- Name - adapter name
- ID - unique adapter identifier. Keep it blank and Astra generates it on Save
- Adapter - hardware adapter selection list. Adapter number relates to the system device in the `/dev/dvb`
- Type - adapter type

Additional fields depends of the adapter type.

DVB-S/S2:

- Frequency - carrier frequency (950-13250 MHz)
- Polarization - signal polarization (Vertical, Horizontal, Right, Left)
- Symbolrate - symbol rate (1000-50000 Kbaud)

DVB-T/T2, ATSC, ISDB-T:

- Frequency - carrier frequency (0-1000 MHz)

DVB-C

- Frequency - carrier frequency (80-1000 MHz)
- Symbolrate - symbol rate (1000-10000 Kbaud)

For example: DVB-S adapter, satellite at 28.2E with transponder options "11038:V:22000"

{{< figure src="/assets/img/docs/adapters/dvb-general.png" alt="DVB-S Gerneral Options" >}}
