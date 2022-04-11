export interface User{
    id: string;
    name: string;
    organization: string;
    titile: string;
    email: string;
}

interface SearchPanelProps{
    users: User[],
    param: {
        name: string;
        personId: string;
    }
    setParam: (param: SearchPanelProps['param']) => void;
}
export const SearchPanel = ({param, setParam, users}: SearchPanelProps) => {

    return(
        <form action="">
            <div>
                <input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })} />
                <select value={param.personId} onChange={evt => setParam({
                    ...param,
                    personId: evt.target.value
                })} >
                    <option value={''}>principal</option>
                    {
                        users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>
            </div>
        </form>
    );
}