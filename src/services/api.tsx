const API_ROOT = '/api';

export function callApi(endpoint: string, config?: RequestInit) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return fetch(fullUrl, config)
        .then( response => response.json().then( json => ({ json, response}) ))
        .then( ({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }

            return {
                ...json
            };
        })
        .then(
            response => ({ response }),
            error => ({ error: error.message || 'Something bad happened' })
        );
}

const CONFIG_POST = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
};

const CONFIG_PUT = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
};

export const get = (endpoint: string) => callApi(endpoint);

export const post = (endpoint: string, body: object) => callApi(endpoint, {
    ...CONFIG_POST,
    body: JSON.stringify(body)
});

export const put = (endpoint: string, body: object) => callApi(endpoint, {
    ...CONFIG_PUT,
    body: JSON.stringify(body)
});
