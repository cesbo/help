---
hide:
  - navigation
  - toc
---

<div>
<style>
.md-main>.md-main__inner { max-width: 100%; }
.md-typeset { margin: 0; }
.md-typeset :is(h1, .md-content__button) { display: none; } /* hide header and edit button */
#redoc-container .menu-content>:first-child { display: none; } /* hide logo */
</style>
<div id="redoc-container"></div>
<script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"></script>
<script>
Redoc.init(
	'https://cdn.cesbo.com/alta/openapi.yaml',
	{ hideLogo: true },
	document.getElementById('redoc-container')
)
</script>
</div>
