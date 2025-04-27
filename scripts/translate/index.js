import fs from 'node:fs'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { removePosition } from 'unist-util-remove-position'

const LIBRE_TRANSLATE_URL = 'http://103.249.134.120:10000'
const PAGE_WITH_EN_DOCS = '../../src/content/docs/en'

const processor = unified()
    .use(remarkParse)

let page

try {
    page = fs.readFileSync(`${PAGE_WITH_EN_DOCS}/astra/delivery/mpts-settings.md`, 'utf8')
} catch (err) {
    console.error(err)
}

const parseTree = processor.parse(page)
const tree = await processor.run(parseTree)

// removePosition(tree, { force: true })
// console.dir(tree, { depth: null })

const toTranslate = page.substring(0, 100)
console.log(toTranslate)

const res = await fetch(`${LIBRE_TRANSLATE_URL}/translate`, {
	method: "POST",
	body: JSON.stringify({
		q: toTranslate,
		source: "en",
		target: "ru",
		format: "text",
		alternatives: 1
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());