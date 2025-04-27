import remarkParse from 'remark-parse'
import {unified} from 'unified'
import {removePosition} from 'unist-util-remove-position'

const processor = unified()
  .use(remarkParse)

const value = '# Pluto\n\n**Pluto** (minor-planet designation: *13434…'
const parseTree = processor.parse(value)
const tree = await processor.run(parseTree)

removePosition(tree, {force: true})

console.dir(tree, {depth: null})