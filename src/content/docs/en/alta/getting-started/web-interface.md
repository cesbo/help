---
title: Web Interface
sidebar:
    order: 2
---

Alta provides a web interface that you can use to manage and configure the software.

## Accessing the Web Interface

Web Interface works well in next browsers: Firefox, Chrome, or Safari.

Port for the web interface depends on your configuration, by the default it `8100`. To access the web interface, enter the following URL in your web browser: `http://your-server:8100`, where your-server is the IP address or hostname of the server where Alta is installed.

## Login to Web Interface

![Web Interface Login](https://cdn.cesbo.com/help/alta/getting-started/web-interface/login.png)

Default login is `admin`. Password defines in the wizard on service initialization.

## Dashboard

The **Dashboard** provides a real-time overview of all configured **Channels** and **Receivers**, showing key metrics for system monitoring:

- **Stream Bitrates**
- **Active User Counts**
- **Storage Usage** (if enabled)

Each Channel/Receiver is shown as a **card** with a color-coded border indicating its status.

### Card Status Indicators

- **Green Border**: Enabled and streaming normally.
- **Gray Border**: Disabled or no stream.
- **Yellow Border**: One or more stream variants inactive.

### Card Header Contents

- **Name**: Identifier for Channel/Receiver
  - ⚙️ icon: Opens Channel settings
  - `<Variant>/<Channel>`: Opens Edit Receiver dialog
- **User Count**: Number of active stream viewers
- **Bitrate**: Real-time bitrate in **Mbit/s**
- Clicking a card expands it to show more details.

### Expanded Card Details

- **Stream Details**
  - **Variants List**: e.g., `HD / SD`, `Receiver A / Receiver B`
  - **Individual Bitrates**: Shown per resolution/variant

- **Storage Usage** if enabled shows variants with:
  - **Data Size**: Total storage used by the variant
  - **Time Frame**: Duration for which content is stored

## Usage Tips

- **Search & Sort** via Navigation Bar to find Channels/Receivers
- **Monitor**:
  - **Bitrate** and **user count** for performance
- **Troubleshooting**:
  - **Gray card**: Check if stream is enabled and receiving input
  - **Yellow card**: Check variant statuses in settings
