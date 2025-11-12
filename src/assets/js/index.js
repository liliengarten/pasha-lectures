const BASE_URL = 'http://localhost:8080/';

export const api = (url, options = {}) => {
    return fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
            ...options.headers
        },
    })
}

api('products', g{ method: 'POST', body: { } })