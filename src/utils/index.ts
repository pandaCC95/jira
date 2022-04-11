import { useEffect, useState } from "react"

export const isFalsy = (value: unknown) => value === 0 ? false : !value 

export const cleanObject=(object: object)=>{
    const result = {...object} 
    Object.keys(result).forEach(key => {
        //@ts-ignore
        const value = result[key]
        //except value equal to 0
        if(isFalsy(value)){
            //@ts-ignore
            delete(result[key]);
        }
    })
    return result;
}

export const useMount = (callback: () => void) =>{
    useEffect(()=>{
        callback()
    }, [])
}

export const useDebounce = <V>(value: V, delay?: number) => {
    const[debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{
        //when the value or the delay changes, set a timeout
        const timeout = setTimeout(() => setDebounceValue(value), delay)
        //clearTimeout will run when the last useEffect done
        return () => clearTimeout(timeout)
    }, [value, delay])
    //return debounceValue that fit the above funtion
    return debounceValue;
}
