import qs from 'qs';
import * as auth from 'auth-provider';
import { useAuth } from 'Context/auth-context';

const apiURL = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
    data?: object,
    token?: string
}

export const http = async(endpoint: string, {data, headers, token, ...customConfig}: Config={}) => {
    const config = {
        method: 'GET',
        headers: {
            authorization: token? `Bearer ${token}` : '',
            'content-type': data? 'application/json' : ''
        },
        ...customConfig
    }

    if(config.method.toUpperCase() === 'GET'){
        endpoint+=`?${qs.stringify(data)}`
    }else{
        config.body = JSON.stringify(data || {})
    }

    return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
        //unauthorized
        if(response.status === 401){
            auth.logout()
            //refresh the page
            window.location.reload()
            return Promise.reject({message:"Please login again"})
        }
        const data = response.json()
        if(response.ok){
            return data
        }else{
            return Promise.reject(data)
        }
    })
}

export const useHttp = () => {
    const {user} = useAuth()
    return (...[endpoint, config] : Parameters<typeof http>) => http(endpoint, {...config, token:user?.token});
}