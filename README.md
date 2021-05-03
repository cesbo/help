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

Only 2 levels available:

- `##` - second-level heading;
- `###` - third-level heading.

The first-level heading appends automatically to each page and based on the `title` option.

### Notice

The `notice` blocks for additional information:

```
{{< notice >}}
### Optional header

Notice content
{{< /notice >}}
```

The `alert` block for alerts:

```
{{< alert >}}
### Optional header

Alert content
{{< /alert >}}
```

Only third-level heading is available in the notice beginning.

### Details

The `details` block provides more information in the hidden block with a link to turn block visible.

```
{{< details "Read more..." >}}
More information...
{{< /details >}}
```
