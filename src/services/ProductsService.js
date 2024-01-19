import ApiService from './ApiService'

export async function apiGetProducts(data) {
    return ApiService.fetchData({
        url: '/products',
        method: 'get',
        data,
    })
}

