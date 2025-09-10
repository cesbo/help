---
title: CAM Troubleshooting
description: Common issues with DVB-CI and Conditional Access Modules (CAM)
sidebar:
    order: 32
---

Conditional Access Modules (CAM) are used with DVB-CI to descramble encrypted channels.
Sometimes CAMs may not work as expected. Below are the most common issues and how to check them.

## CI+ modules not supported

CI+ modules are designed for consumer devices like TVs and set-top boxes.
They are not supported in professional headend use with Astra.
Only standard DVB-CI modules are compatible.

## Only one channel descrambled

Many CAMs can descramble only one channel at a time.
Some models support **multi-service descrambling**, but the exact number depends on the CAM manufacturer and firmware.
If you see only one clear channel while others remain encrypted, this is a CAM limitation.

## How to check CAM menu

If you need to see details from the CAM (such as provider info or smart card status), you can use the `gnutv` utility:

```sh
gnutv -adapter N -cammenu
```

Where N is the DVB-CI adapter number.
This opens the CAM menu and shows available information directly from the module.

## Delay before descrambling

Some CAMs require extra time before they are ready to descramble channels.
If you see channels not opening immediately, you may need to increase the CA Delay option in adapter settings.

## CAM not detected

If Astra does not show log messages about the CAM at startup, check:

- The CAM is firmly inserted into the CI slot
- The smart card is correctly placed in the CAM
- The driver for your DVB adapter is properly installed

## Related pages

- [External DVB-CI](/en/astra/adapters/external-ci/)
- [Internal DVB-CI](/en/astra/adapters/internal-ci/)
