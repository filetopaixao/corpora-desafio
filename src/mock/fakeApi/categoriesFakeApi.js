export default function categoriesFakeApi(server, apiPrefix) {
    server.get(`${apiPrefix}/categories`, (schema) => {
        const categories = schema.db.categoriesData
        if (categories) {
            return categories
        }
    })
}
