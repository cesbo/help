# Cesbo Docs

All docs separated by language and category.

Categories:

- `astra` - Astra
- `alta` - Alta
- `senta` - Senta Transcoder
- `articles` - Tools, Utilities, System Administration, etc

## Formatting rules

### Heading

Only 2 levels is available:

- `##` - second-level heading
- `###` - third-level heading

### Lists

Nested lists is illegal

### Text decoration

Bold - names:

- Form field
- Button
- Menu item
- Application name

Code - examples and example parts:

- Part of the log
- Command
- Example URL

### General note

Used for additional information

```
:::note
New feature now available! Check it out
:::
```

### Alert block

For attention

```
:::danger
Please update your password immediately
:::
```

## Deploy

```
npm run build
tar -zHcf - dist | ssh cesbo.dev tar -C /opt/help -zxf -
```
