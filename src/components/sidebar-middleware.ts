import { defineRouteMiddleware } from '@astrojs/starlight/route-data'

const products = ['astra', 'alta', 'senta', 'misc']

export const onRequest = defineRouteMiddleware(async (context, next) => {
    if (!context.locals.starlightRoute.hasSidebar) {
        return
    }

    const { url } = context.request

    const currentProduct = new URL(url).pathname.split('/')[2]
    if (!currentProduct) {
        return
    }

    const productIndex = products.findIndex((product) => {
        return product.toLowerCase() === currentProduct.toLowerCase()
    });
    if (productIndex === -1) {
        return
    }

    // Next middleware will configure sidebar labels
    await next()

    const productSidebar = context.locals.starlightRoute.sidebar[productIndex]
    // @ts-ignore
    context.locals.starlightRoute.sidebar = [...productSidebar.entries]
})