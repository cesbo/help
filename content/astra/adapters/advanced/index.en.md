---
title: Advanced Options
weight: 5
---

- Modulation - signal modulation. Default: QPSK for DVB-S, PSK8 for DVB-S2, not set for any other (detects by adapter automatically)
- FEC - forward error correction. Default: Auto
- Roll-Off - spectrum efficiency. used only for DVB-S2. Possible values: 35, 25, 20, AUTO. Default: 35
- Stream ID - PLP stream ID, only for DVB-S2 and DVB-T2:
    - PLS Mode - possible value: Root, Gold, Combo
    - PLS Code - possible value: 0 - 262143
    - Stream ID - possible value: 0 - 255
- Timeout - delay in seconds for DVR error checking. Default: 2 seconds
- CI - bind adapter to DigitalDevices or TBS DVB-CI. The value corresponds to the adapter number on the system
- CI Device - CI device number
- CA Delay - delay, in seconds, before sending channel information to the conditional access module
- Budget Mode - turn off packets filterring
