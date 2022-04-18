import { User } from "screen/project-list/search-panel";


const apiURL = process.env.REACT_APP_API_URL;

export const localStorageKey = '__auth_provider_token__';

export const getToken = window.localStorage.getItem(localStorageKey);

export const handleUserStorage = ({user}:{user: User}) => {
    window.localStorage.setItem(localStorageKey, user.token || '');
    return user;
}

export const register = (data: {username: string, password: string}) => {
    return fetch(`${apiURL}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (response: Response)=> {
        if(response.ok){
            return handleUserStorage(await response.json());
        }else{
            return Promise.reject(data);
        }
    })
}

export const login = (data: {username: string, password: string}) => {
        return fetch(`${apiURL}/login`, {
                    method: 'POST',
                    headers: {
                                'content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    }).then(async (response: Response) => {
                     if(response.ok) {
                    return handleUserStorage(await response.json());
                    }else{
                    return Promise.reject(data);
                    }
        })
}

export const logout = async() => window.localStorage.removeItem(localStorageKey);