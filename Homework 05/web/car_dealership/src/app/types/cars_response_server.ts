export const environment = {
    production: false,
    apiURL: 'http://localhost:3000/api'
}

export interface Response<T>{
    payload: T
    total: number
}
