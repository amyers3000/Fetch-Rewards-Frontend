let BASE_URL = 'https://frontend-take-home.fetchrewards.com/form'


export function apiCall(method, payload, api) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
    }
    if( method === 'POST') {
        options.body = JSON.stringify(payload)
    }
    if(api){
        return fetch(`${BASE_URL}/${api}`, options)
    }else{
        return fetch(`${BASE_URL}`, options)
    }
}

