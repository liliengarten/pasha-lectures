const BASE_URL = 'http://localhost:8080/';

export const api = async (url, options = {}) => {


    const response = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
            ...options.headers
        },
    })

    return await response.json()
}

api('products', { method: 'POST', body: { } })