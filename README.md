# Cesbo Docs

## Page template

```
---
title: Page Title
description: Short information about page content
weight: 1
---

content ...
```

Each page should have an options at beginning:

- `title` - used in the side menu, first-level heading, browser tab title;
- `description` - used in the page meta-information.
The good description is useful for search engines;
- `weight` - is a number for page ordering. Used in the side menu;
- `content` - page content in the Markdown format.
Between options and content should be one empty line.

## Heading

Only 2 levels is available:

- `##` - second-level heading;
- `###` - third-level heading.

The first-level heading appends automatically to each page and based on the `title` option.

## Note

The `note` blocks for additional information:

```
{{< note "Optional header" >}}
Notice content
{{< /note >}}
```

The `alert` block for alerts:

```
{{< alert "Optional header" >}}
Alert content
{{< /alert >}}
```

## Details

The `details` block provides more information in the hidden block with a link to turn block visible.

```
{{< details "Read more..." >}}
More information...
{{< /details >}}
```

## External Links

External links begins with `https://` or `http://`

```
[Optional Link Text](https://cesbo.com)
```

External links will be openned in the new browser tab.
If the link text is not defined will be used link address.

## Internal Links

Internal links to content pages.

```
[Optional Link Text](astra/quick-start/install)
```

If the link text is not defined will be used page title.
If page is not found link will be in red color and linked to 404 page.

## Resource Links

Links to files for downloading without opening in browser.

```
[Optional Link Text](!index.html)
```

If the link text is not defined will be used file name.
