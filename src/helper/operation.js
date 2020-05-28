const CONTENT_TYPES = {
    JSON: 'application/json;charset=UTF-8'
}


const validate = (response) => {
    if (!response.ok) {
        throw new Error(response);
    }
    return response;
};


export const perform = ({method, url, body,}) => {
    return fetch(url, {
        headers: {
            accept: CONTENT_TYPES.JSON,
            'Content-Type': CONTENT_TYPES.JSON,
            'Access-Control-Allow-Origin': '*'
        },
        method,
        body: JSON.stringify(body),
    }).then(validate)
        .then(response => response.json())
        .catch(error => console.error(error))
}