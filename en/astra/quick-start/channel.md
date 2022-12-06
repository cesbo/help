# Streams

Using this interface, you can add and configure broadcast streams.

Stream could be two types:

- SPTS - Single-Program Transport Stream. Streaming channels to the end users over IP network
- MPTS - Multi-Program Transport Stream. Preparing multiplexes to DVB modulators
  
Basically each channel has:

- inputs - one or more source
- outputs - any supported destinations or without destination at all
- processing options

![Streams-general](en/astra/quick-start/materials/../../../../../../astra/quick-start/materials/streams-general.png)

1. Name - name of the stream. Any name you want to find channel in the interface or in the log
2. ID - unique identifier of the stream. ID will be defined on creating new stream
3. Multi Program Stream - MPTS stream. [Read more](https://cesbo.com/en/book-archive/streams/mpts.html){target="_blank"}
4. Start stream on demand - turn all inputs off if no active users. In current version this option works only for HTTP output. For HLS or UDP stream works permanently
5. Keep Active - additional option for the "Start stream on demand" function. Is a delay before turn stream off after last client is goes off
6. Cahannel Number - deprecated
7. Input List - list of inputs for receiving the media stream. [Read more](https://help.cesbo.com/en/astra/input/){target="_blank"}
8. New Input - append new input. Multiple inputs can be used for backup - if Input 1 is unavailable, Astra will switch to Input 2
9. Arrow icon - change order of media streams
10. Gear icon - opens the wizard to configure media addresses
11. Output List - list of outputs for sending the media stream. [Read more](https://help.cesbo.com/en/astra/output/){target="_blank"}
12. Arrow icon - change order of media addresses
13. Gear icon - opens the wizard to configure media addresses