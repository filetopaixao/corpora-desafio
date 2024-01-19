import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'

import { signInUserData } from './data/authData'
import { productsData } from './data/productsData'

import { authFakeApi } from './fakeApi'
import { productsFakeApi } from './fakeApi'

const { apiPrefix } = appConfig

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                signInUserData,
                productsData
            })
        },
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough((request) => {
                let isExternal = request.url.startsWith('http')
                return isExternal
            })
            this.passthrough()

            authFakeApi(this, apiPrefix)
            productsFakeApi(this, apiPrefix)
        },
    })
}
