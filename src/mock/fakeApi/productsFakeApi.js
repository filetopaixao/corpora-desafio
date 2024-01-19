export default function productsFakeApi(server, apiPrefix) {
    server.get(`${apiPrefix}/products`, (schema) => {
        const products = schema.db.productsData
        if (products) {
            return products
        }
    })
}
