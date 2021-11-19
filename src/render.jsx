/** @jsx h */
import { h } from 'preact'

export function renderItem(item, components) {
    return (
        <a className="aa-ItemLink" href={item.link}>
            <div className="aa-ItemContent">
                <div className="aa-ItemContentBody">
                    <div className="aa-ItemContentTitle">
                        <components.Highlight hit={item} attribute="title" />
                    </div>
                </div>
            </div>
        </a>
    )
}
