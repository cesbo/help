import fs from 'node:fs'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { removePosition } from 'unist-util-remove-position'

const processor = unified()
    .use(remarkParse)

let page

try {
    page = fs.readFileSync('./pages/mpts-settings.md', 'utf8')
    console.log(page)
} catch (err) {
    console.error(err)
}

const parseTree = processor.parse(page)
const tree = await processor.run(parseTree)

removePosition(tree, { force: true })

console.dir(tree, { depth: null })