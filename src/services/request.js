import registry from 'app-registry';
import { store } from '../store';

//#region saga api request functions
function postMethod(url, requestOption) {
    return new Promise((resolve) => fetch(url, requestOption)
        .then(response => response.json())
        .then(responseJson => {
            resolve(responseJson);
        })
    )
}

function getMethod(url) {
    const requestOptions = {
        crossDomain: true,
        method: 'GET',
        headers: {
            'Content-Type': 'application/text'
        }
    };
    return new Promise((resolve) => fetch(url, requestOptions)
        .then(response => { 
            if(response.status)
                if(response.status < 300)
                    return response.json()
        })
        .then(responseJson => {
            resolve(responseJson);
        })
        // .catch(response => alert(response.status))
    )
}

function deleteMethod(url, requestOption) {
    return new Promise((resolve) => fetch(url, requestOption)
        .then(response => response.json())
        .then(responseJson => {
            resolve(responseJson);
        })
    )
}

function putMethod(url, requestOption) {
    return new Promise((resolve) => fetch(url, requestOption)
        .then(response => response.json())
        .then(responseJson => {
            resolve(responseJson);
        })
    )
}

export default {
    postMethod,
    getMethod,
    deleteMethod,
    putMethod
}
//#endregion