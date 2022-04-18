import { useState } from "react"
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
    const[isRegister, setRegister] = useState(false);
    return <div>
        {
            isRegister? <RegisterScreen /> : <LoginScreen />
        }
        <button onClick={() => setRegister(!isRegister)}>switch {isRegister? 'Login' : 'Register'}</button>
    </div>

}