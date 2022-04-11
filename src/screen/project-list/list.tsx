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
    return (<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Principal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(project => <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{users.find(user => user.id === project.personId)?.name || 'unknown'}</td>
                        </tr>)
                    }
                </tbody>
            </table>)
}