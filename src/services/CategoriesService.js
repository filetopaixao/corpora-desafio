import ApiService from './ApiService'

export async function apiGetCategories(data) {
    return ApiService.fetchData({
        url: '/categories',
        method: 'get',
        data,
    })
}

