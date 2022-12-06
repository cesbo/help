# Cesbo Docs

Docs with [mkdocs](https://www.mkdocs.org/). Just write Markdown files

All docs separated by language and category.

Categories:

- `alta` - Cesbo Alta
- `astra` - Cesbo Astra
- `codex` - Protocols, Transports, Encoding, and System Administration

## Requirements

- Python 3.7+
- MkDocs 1.4+

To deploy on Cloudflare Pages need to set environment variable `PYTHON_VERSION` to `3.7`

## Installation

MkDocs requires a recent version of Python and the Python package manager, **pip**, to be installed on your system.

You can check if you already have these installed from the command line:

```bash
$ python --version
Python 3.10.8
$ pip --version
pip 22.2.2 from /usr/local/lib/python3.10/site-packages/pip (python 3.10)
```

If you already have those packages installed, you may install all dependencies with next command:

```bash
pip install -r requirements.txt
```

## Development

For documentation writing you may start builtin development server:

```bash
mkdocs serve -f en-alta.yml
```

Page will be available on http://localhost:8000/en/alta/
Development server has live reload feature. On save file page will be reloaded automatically.

## Formatting rules

### Heading

Only 3 levels is available:

- `#` - first-level is available only in the first row
- `##` - second-level heading
- `###` - third-level heading

### Text decoration

- Bold - names:
    - Form field
    - Button
    - Menu item
    - Application name
- Code - examples and example parts:
    - Part of the log
    - Command
    - Example URL

### Keyboard keys

To display keyboard keys use `++`:

```
++ctrl+c++
```

Should be in lowercase without spaces.

### Note: General tip

Used for additional information

```
!!! note ""
    Second row
```

### Note: Alert block

For attention

```
!!! danger ""
    Second row
```

### Expandable block: Troubleshooting

```
??? question "Not working..."

    Description
```

All content inside block should be indented with 4 spaces.

### Expandable block: Examples

```
??? example "Example script on PHP"

    ```php
    <?php
    echo "Hello world!";
    ```
```

All content inside block should be indented with 4 spaces.
