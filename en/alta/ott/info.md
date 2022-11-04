# OTT

OTT (Over the Top) media service - is a media service offered directly to viewers via the Internet that bypasses MSO services. It works due to the content delivery network (CDN) that gives an opportunity to video hosts to transmit the data via the Internet. That allows the user to receive media content on any device with access to the Internet. 

> MSO (Multiple System Operator) - is an operator of multiple cable or direct-broadcast satellite television systems.

> CDN (Content Delivery Network or Content Distribution Network) - is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end users.

![CDN](/en/alta/ott/img/CDR-disc.png)

## How OTT works

### ABR

One of the inherent problems with serving TV content over the internet is being able to contend with the wide range of network performance. Performance depends on what speed the connection will support (e.g. Fiber, Wi-Fi, LTE, DSL), the display device (e.g. phone, streaming device or laptop), and then how many network hops there are between the provider and the end user. At a high-level, OTT systems and technologies are designed to minimize the impact these parameters have, by providing a “best effort” approach to serving up the content. That is, OTT technology will adjust to the network performance of the entire chain in real-time so that the video and audio are delivered without pauses caused by buffering.

For slower networks it will scale down to lower bit rates. For faster networks it will scale up to provide the best quality.
It does this with a technique called ABR which stands for Adaptive Bit Rate streaming.

> ABR content - is a set of files each containing 2 to 10 second consecutive chunks of material. When consumers watch the content, the device's player will continuously play these chunks for as long as the content remains available. The OTT service utilizes ABR to provide several video profiles with different bit rates from low to high.

### VOD abd LIVE

There are two kinds of content distributed within an OTT video delivery environment. The first is Video on Demand (VOD) - finished content such as a movie, ready for the consumer to view. The second is called LIVE - live streaming of content such as a sporting event, for the consumer to view in real time.

> For VOD, content chunks are a bit longer which makes the process more efficient. While it is being viewed, players can cache larger chunks of content far enough ahead to possibly download the entire length of the movie.

> For LIVE, content chunks are minimized to shorten the delay between the actual event and the remote viewing. The players cannot cache as far ahead, so they need to tune the bit rates in accordance with the actual current performance of the network. During a LIVE event, the service provider will encode and package their feed into small ABR file chunks and push these out into a CDN (Content Delivery Network). The consumer’s device then pulls each of these file chunks from that CDN to produce continuous playback.

### OTT technology  in action:

1. Broadcasters upload video content to an OTT video hosting platform
2. The video host transmits the data to remote servers via a content delivery network (CDN)
3. Users select the content they want to stream on the user-facing video gallery
4. The video player on the device pulls the video content from the CDN’s server with the internet

![OTT](/en/alta/ott/img/OTT.png)

>OTT video hosting platform - web server that contains media content.
It also has a user-facing video gallery - an interface through which the consumer is able to select media content.
