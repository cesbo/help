# Cesbo Docs

All docs separated by language and category.

Categories:

- `astra` - Cesbo Astra
- `misc` - Tools, Utilities, System Administration, etc

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
::note
New feature now available! Check it out
::
```

### Alert block

For attention

```
::alert
Please update your password immediately
::
```

### Spoiler block

For hidden content like examples

```
::spoiler{title="Example"}
Spoiler content in markdown format
::
```

### Badge

```
:badge[Version]
:badge[Warning]{type="warning"}
:badge[Error]{type="error"}
```

### YouTube

```
:youtube[Description]{id="video-id"}
```


## Search Index

### Configure Language

1. Go to Algolia dashboard and select your index
2. Click the **Configuration** tab, then click on **Language**
3. Select required language in **Index Languages**

### Configure Grouping

1. Go to Algolia dashboard and select your index
2. Click the **Configuration** tab, then click on **Facets**
3. Append attribute `category` to the **Attributes for faceting** list
4. Save changes

### Update Algolia index

Append Admin API key to the environment variables:

```
ALGOLIA_SECRET_KEY="..."
```

Launch:

```
npm run generate
```

## Deploy

```
npm run generate
tar -zHcf - dist | ssh cesbo.dev tar -C /opt/help -zxf -
```
