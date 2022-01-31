# DVB, ATSC, ISDB-T

DVB (Digital Video Broadcast) is a set of international open standards for digital television [Read more](/en/book/delivery/dvb)

## Address format

```
dvb://adapter-id
dvb://adapter-id#options
```

- `adapter-id` - adapter identifier

Options:

- `pnr=Number` - select program from MPTS (Multi-Program Transport Stream)

## Web Interface

In the web interface DVB options separated on two parts:

### Adapter options

Adapter options depends of the delivery system:

<!-- tabs:start -->

#### **DVB-S/S2**

General options include base tuner configuration:

![DVB-S/S2 Tuner](dvb-s-696w.png ':size=696')

LNB (Low-Noise Block) options:

![DVB-S/S2 Tuner](dvb-s-696w.png ':size=696')

#### **DVB-T/T2**

For DVB-T/T2

#### **DVB-C**

For DVB-C

<!-- tabs:end -->

### Stream options

In the web interface DVB Input options available in the Stream options. You can write source address directly to the Input address line:

![Input address](input-list-696w.png ':size=696')

Or click to the gear icon and use an Input configuration form:

![DVB Input options](dvb-696w.png ':size=696')

## Scan Adapter

## Troubleshooting
