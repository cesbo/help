# Cesbo Docs

Docs with [mkdocs](https://www.mkdocs.org/). Just write Markdown files

All docs separated by language and category.

Categories:

- `alta` - Cesbo Alta
- `astra` - Cesbo Astra
- `book` - Rrotocols, Transports, and Encoding
- `linux` - System administration

## Requirements

- Python 3.7+

To deploy on Cloudflare Pages need to set environment variable `PYTHON_VERSION` to `3.7`

## Heading

Only 3 levels is available:

- `#` - first-level is available only in the first row
- `##` - second-level heading
- `###` - third-level heading

## Text decoration

- Bold - names:
    - Form field
    - Button
    - Menu item
    - Application name
- Code - examples and example parts:
    - Part of the log
    - Command
    - Example URL

## Keyboard keys

To display keyboard keys use `++`:

```
++ctrl+c++
```

Should be in lowercase without spaces.

## Note

### General tip

Used for additional information

```
!!! note ""
    Second row
```

### Alert block

For attention

```
!!! danger ""
    Second row
```

### Expandable block for troubleshooting

```
??? question "Not working..."

    Description
```

All content inside block should be indented with 4 spaces.

### Expandable block for examples

```
??? example "Example script on PHP"

    ```php
    <?php
    echo "Hello world!";
    ```
```

All content inside block should be indented with 4 spaces.
