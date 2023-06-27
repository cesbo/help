---
title: "Types of fiber optic connectors: a simple guide"
date: 2023-05-26
---

In this article, we will try to describe the most common optical connectors that are used in data networks and television networks.

## The fiber ferrule

The fiber ferrule is a ceramic part of a cylindrical connector. An optical fiber is inserted into the center of the ferrule. It is used to pass laser radiation through two optical fibers.

The most common fiber ferrule diameters are 2.5 mm (in FC, SC, ST type connectors) and 1.25 mm (in LC type connectors).

![Connector](https://cdn.cesbo.com/help/misc/hardware-and-drivers/types-of-optic-connectors/connector.jpeg)

## SC Connector

![SC](https://cdn.cesbo.com/help/misc/hardware-and-drivers/types-of-optic-connectors/sc.png)

SC Connector was developed by Nippon Telegraph and Telephone. The invention has become the most popular due to lower production costs.

### Features and applications of SC connectors:

* simple installation;
* high connection speed;
* high mounting density;
* plastic shell (quickly wears out, not resistant to vibration);
* used with singlemode and multimode fiber;
* loss of 0.25 dB.;
* used in FTTH, telephony, cable TV, etc.

## FC Connector

![FC](https://cdn.cesbo.com/help/misc/hardware-and-drivers/types-of-optic-connectors/fc.png)


FC Connector was developed by Nippon Telegraph and Telephone. It was the first optical connector, that used a ceramic tip. This was the first optical connector that used a ceramic tip. It is not currently used due to the more popular SC and LC connectors.

### Features and applications of FC connectors:

* metal shell with threaded connection (not so wear out and resistant to vibration);
* less mounting density (compared to the SC connector);
* used in telecommunications, industry and measuring devices;
* used with singlemode fiber;
* loss of 0.3 dB.

## LC Connector

![LC](https://cdn.cesbo.com/help/misc/hardware-and-drivers/types-of-optic-connectors/lc.png)

LC connector was developed by Lucent Technologies and released in 1997.

### Features and applications of LC connectors:

* high mounting density;
* the small diameter of the fiber ferrule (this reduces the reliability and resistance to mechanical loads);
* used in structured cable networks, telecommunications and data centers;
* used with singlemode and multimode fiber;
* loss of 0.10 dB.

## ST Connector

ST Connector was developed in the United States by AT&T and used in professional environments: corporate networks, in the military field.

### Features and applications of ST connectors:

* metal shell (not so wear out);
* less mounting density (compared to the SC connector);
* less convenient in connection than SC connector, but more convenient than FC connector;
* used with multimode fiber;
* loss of 0.25 dB.

## Types of polish on fiber optic connectors

Over the years, experts have upgraded the shape and characteristics of optical connectors, trying to achieve minimal losses and reflections on the connector.
It is no secret that losses on the connector connection reduce the signal power, which leads to a decrease in the distance to which it can be transmitted.
The reflected part of the signal can also introduce errors (BER) and heat the SFP module, which in turn reduces the quality of the transmitted information and leads to a reduction in the service life of the transmitting equipment.

That is why the types of polishing of optical connectors have been changed. The most popular types of optical connector polishing are PC (physical contact), UPC (ultraphysical contact), and APC (angular physical contact).

You can determine the type of connector/port polishing by its color:

* PC-black
* UPC-blue
* APC-green

![Polir](https://cdn.cesbo.com/help/misc/hardware-and-drivers/types-of-optic-connectors/polir.png)

### PC: Physical Contact

The ferrule is beveled and processed on a flat surface. This avoids empty spaces between the tips of the connected connectors and provides losses in the range from -30 dB to -40 dB. This type is not relevant now.

### UPC: Ultra Physical contact

UPC polished connectors are widely used in data transmission systems.They have a lower cost, then APC. Because of the low signal power in such systems, the reflected signal also has a low value.
The connectors are similar to the PC type. Due to a clearer bevel curve, losses are reduced to the limit of -40 to -55 dB.

### APC: Angled Physical Contact

APC polished connectors provide less reflected signal towards the source.The surface of the ferrule is beveled at an angle of 8-9 degrees. Because of this, the signal is not reflected from the connector at a 180-degree angle, so the reflected signal does not return to the transmitter at all, or returns with less power. APC polished connectors are used in systems with a high-power signal. This is why they are common in cable TV and PON networks.

⚠️ It is forbidden to connect the APC and UPC connectors. This causes damage to the connectors and increases the risk of signal attenuation and reflection.
