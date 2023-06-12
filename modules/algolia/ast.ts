type Parent = {
    children: Node[],
}

type Element = {
    type: 'element',
    tag: string,
    children: Node[],
}

type Text = {
    type: 'text',
    value: string,
}

type Node = Element | Text

const BLOCK = ['h2', 'h3', 'p', 'li', 'div']
const SKIP = ['code']

export function astToString(el: Parent, block: boolean = true): string {
    let result = ''

    el.children.forEach((node) => {
        switch(node.type) {
            case 'text':
                result += node.value
                break
            case 'element':
                if(!SKIP.includes(node.tag)) {
                    result += astToString(
                        node,
                        BLOCK.includes(node.tag)
                    )
                }
                break
            default:
                break
        }
    })

    if(block) {
        result += '\n'
    }

    return result
}
