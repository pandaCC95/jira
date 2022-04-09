import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject } from "utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const[users, setUsers] = useState([]);

    const[param, setParam] = useState({
        name:'',
        personId:''
    });
    const[list, setList] = useState([]);
    const debounceParam = useDebounce(param,5000)

    useEffect(() =>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debounceParam]);

    //intialize the user list
    useMount(() =>{
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok){
                setUsers(await response.json())
            }
        })
    });

    return ( 
            <div>
                <SearchPanel param={param} setParam={setParam} users={users}/>
                <List list={list} users={users}/>
            </div>
    );
}

export const useMount = (callback) =>{
    useEffect(()=>{
        callback()
    }, [])
}

export const useDebounce = (value, delay) => {
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
