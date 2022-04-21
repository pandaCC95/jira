import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useMount, useDebounce} from "utils";
import { useHttp } from "utils/http";

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const[users, setUsers] = useState([]);

    const[param, setParam] = useState({
        name:'',
        personId:''
    });
    const[list, setList] = useState([]);
    const debouncedParam = useDebounce(param,2000);
    const client = useHttp();

    useEffect(() =>{
        client('projects', {data: cleanObject(debouncedParam)}).then(setList)
    }, [debouncedParam]);

    //intialize the user list
    useMount(() =>{
        client('users').then(setUsers)
    });

    return ( 
            <div>
                <SearchPanel param={param} setParam={setParam} users={users}/>
                <List list={list} users={users}/>
            </div>
    );
}



