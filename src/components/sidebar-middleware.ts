import { defineRouteMiddleware } from '@astrojs/starlight/route-data'

const products = ['astra', 'alta', 'senta', 'misc']

export const onRequest = defineRouteMiddleware((context) => {
    const { url } = context.request
    const { sidebar: originalSidebar } = context.locals.starlightRoute;
    console.log("So url is: " + new URL(url).pathname)

    const currentProduct = new URL(url).pathname.split('/')[2]
    console.log("So currentProduct is: " + currentProduct)

    if (!currentProduct) {
        return
    }

    const productIndex = products.findIndex((product) => {
        return product.toLowerCase() === currentProduct.toLowerCase();
    });
    if (productIndex === -1) {
        return
    }
    console.log('productIndex', productIndex)
    const productSidebar = originalSidebar[productIndex]
    // @ts-ignore
    context.locals.starlightRoute.sidebar = [...productSidebar.entries]
})