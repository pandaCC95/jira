import { Table } from 'antd';
import {User} from 'screen/project-list/search-panel'

interface Project{
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
}

interface ListProps{
    list: Project[],
    users: User[];
}

export const List = ({list, users}: ListProps) => {
    return (
    <Table pagination={false} dataSource={list} columns={[{
        title:'名称',
        dataIndex:'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
        },{
            title:'负责人',
            render(value, project){
                return <span>
                    {users.find(user => user.id === project.personId)?.name || 'unknown'}
                </span>
            }
        }
        ]}>
            </Table>)
}