---
hide:
  - navigation
  - toc
---

<div>
<style>
.md-main>.md-main__inner { max-width: 100%; }
.md-typeset { margin: 0; padding: 0; }
.md-typeset :is(h1, .md-content__button) { display: none; } /* hide header and edit button */
</style>
<link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css" />
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
<script>
window.onload = () => {
	window.ui = SwaggerUIBundle({
		url: 'https://cdn.cesbo.com/alta/openapi.yaml',
		dom_id: '#swagger-ui',
		supportedSubmitMethods: [],
	});
};
</script>
</div>
