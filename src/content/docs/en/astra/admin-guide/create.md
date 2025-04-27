---
title: "Create New Stream"
date: 2023-05-22
sidebar:
    order: 10
---

A Stream is a central aspect of Astra configuration, includes a list of Inputs for media reception and Outputs for distributing or providing access. Each stream also contains options for data processing.

## Single Program Stream

![Single Program Stream Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/create/spts.png)

The Single Program Stream (SPTS, also known as Channel or Service) serves as the default stream type in Astra configuration, commonly used to form TV channels. It can employ multiple inputs for redundancy purposes, enhancing the reliability of the stream. The integrated analyzer continuously monitors the active input, and if a fault is detected, it immediately switches to an alternate input.

In addition to redundancy, SPTS offers a range of processing options. These include filtering for transmitting only required media data, modifying stream information, descrambling to access protected streams, and scrambling to safeguard transmitted streams. Thus, SPTS provides a versatile and secure solution for TV channel formation.

Read more about [Stream General Settings](/astra/admin-guide/stream/general)

## Multi Program Stream

![Multi Program Stream Options](https://cdn.cesbo.com/help/astra/admin-guide/stream/create/mpts.png)

The Multi Program Stream (MPTS, also known as Multiplex) is another type of stream available in Astra, activated via an option of the same name within stream settings. MPTS takes all provided inputs and multiplexes them into a singular stream for broadcasting purposes.

This stream type also provides several features designed for broadcasting. These include options for defining the stream description, network information, network search, and logical channel numbers.

Read more about [MPTS Settings](/astra/delivery/broadcasting/mpts-settings)
