import { useAuth } from "Context/auth-context"
import { ProjectListScreen } from "screen/project-list"

export const AuthenticatedApp = () => {
    const {logout} = useAuth();
    return <div>
        <button onClick={logout}>Logout</button>
        <ProjectListScreen />
    </div>
}