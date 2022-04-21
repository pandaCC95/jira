import { Card } from "antd";
import { useState } from "react"
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
    const[isRegister, setRegister] = useState(false);
    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <Card>
                {isRegister? <RegisterScreen /> : <LoginScreen />}
                <button onClick={() => setRegister(!isRegister)}>switch {isRegister? 'Login' : 'Register'}</button>
            </Card>
           
        </div>
    )

}