---
title: HTTP MPEG-TS
date: 2023-06-13
sidebar:
    order: 4
---

HTTP (HyperText Transfer Protocol) is a protocol at the heart of any data exchange on the Web. It serves as a request-response protocol in the client-server computing model. In simple terms, an HTTP client, such as a web browser or media player, sends a request to an HTTP server to fetch data or to perform an action.

For a detailed description, please refer to the [RFC9112](https://www.rfc-editor.org/rfc/rfc9112){target="_blank"} standard.

## HTTP for Digital TV

While HTTP is predominantly associated with serving web pages in a browser, it also finds use in delivering Digital TV. Particularly, the MPEG-TS format is often delivered over HTTP in a method frequently referred to as "HTTP MPEG-TS." This approach to streaming digital television has gained popularity due to its simplicity, compatibility, and adaptability to various network conditions.

## HTTP MPEG-TS Workflow

The HTTP MPEG-TS workflow operates on a client-server model, much like traditional HTTP operations. The significant difference lies in the nature of the data being transferred.

In this workflow, the client sends an HTTP GET request to the server, asking for a specific media stream. The server starts to send the MPEG-TS stream as the response to the client's HTTP request. This process is similar to downloading a file from the internet, but with a crucial difference: the file, in this case, the MPEG-TS stream, is theoretically endless.

## Advantages of HTTP MPEG-TS

- Reliability - HTTP MPEG-TS uses TCP, which guarantees the delivery of data to the destination. It ensures that no data packets are lost during transmission, leading to uninterrupted, high-quality streams
- Access Control - HTTP MPEG-TS supports authorization-based access control, does not necessarily require encryption to protect streamed data
- HTTPS Support - For added security, streams can be transferred with TLS encryption using HTTPS, offering an additional layer of protection
- Analytics Support - Sessions can be metered for analytics purposes. Information such as which channels are most popular, viewing durations, and more can be captured, helping broadcasters make data-driven decisions

## Disadvantages of HTTP MPEG-TS

- Performance - TCP is generally slower than UDP due to the nature of the protocol, which includes mechanisms for guaranteeing data delivery. These mechanisms make TCP more resource-intensive, potentially impacting server performance or limiting scalability
- Latency - HTTP MPEG-TS streams can have more latency than UDP. The extra time spent on establishing TCP connections and the built-in error correction mechanisms of TCP can lead to slight delays in data transmission
- Stability Requirement - Similar to UDP, HTTP MPEG-TS requires a stable network to receive data in a timely manner
- Lack of Multicast Support - HTTP MPEG-TS cannot be multiplexed like UDP Multicast, which allows a single packet to be sent to multiple recipients. Each HTTP MPEG-TS request has to be served individually by the server, potentially limiting scalability, particularly for live broadcasts with many viewers
