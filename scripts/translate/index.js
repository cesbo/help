import fs from 'node:fs'
import {remark} from 'remark'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdx from 'remark-mdx'
import { removePosition } from 'unist-util-remove-position'
import { translateTo } from './translator.js'

const PAGE_WITH_EN_DOCS = '../../src/content/docs/en'

let page

try {
    page = fs.readFileSync(`${PAGE_WITH_EN_DOCS}/astra/delivery/mpts-settings.md`, 'utf8')
} catch (err) {
    console.error(err)
}

const parser = remark()
	.use(remarkFrontmatter, {type: 'yaml', marker: '-'})
	.use(remarkMdx)

const tree = parser.parse(page)

// console.log(page)
removePosition(tree, { force: true })
console.dir(tree, { depth: null })

const toTranslate = page.substring(0, 100)
// console.log(toTranslate)
translateTo(toTranslate, "ru")
	.then(console.log)
