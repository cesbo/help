# Cesbo Docs

## Markdown Style

### Page template

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

### Heading

Only 2 levels is available:

- `##` - second-level heading;
- `###` - third-level heading.

The first-level heading appends automatically to each page and based on the `title` option.

### Note

The `note` blocks for additional information:

```
{{< note "Optional header" >}}
Note content
{{< /note >}}
```

The `alert` block for alerts:

```
{{< alert "Optional header" >}}
Alert content
{{< /alert >}}
```

### Details

The `details` block provides more information in the hidden block with a link to turn block visible.

```
{{< details "Read more..." >}}
More information...
{{< /details >}}
```

### External Links

External links begins with `https://` or `http://`

```
[Optional Link Text](https://cesbo.com)
```

External links will be openned in the new browser tab.
If the link text is not defined will be used url.

### Internal Links

For internal link defined path in the content folder without `index.md` file:

```
[Optional Link Text](astra/quick-start/install)
```

If the link text is not defined will be used page title.
