export type AlgoliaIndexObject = {
    objectID: string,
    title: string,
    content: string,
    category?: string,
    _tags?: string[],
}

export type AlgoliaConfig = {
    categories: { path: string, category: string }[],
}
