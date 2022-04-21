import { Input, Select } from "antd";

export interface User{
    id: string;
    name: string;
    organization: string;
    titile: string;
    email: string;
    token: string;
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
                <Input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })} />
                <Select value={param.personId} onChange={value => setParam({
                    ...param,
                    personId: value
                })} >
                    <Select.Option value={''}>principal</Select.Option>
                    {
                        users.map(user => <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
                    }
                </Select>
            </div>
        </form>
    );
}