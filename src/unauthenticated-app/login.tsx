import { login } from "auth-provider";
import { useAuth } from "Context/auth-context";
import { FormEvent } from "react";

export const LoginScreen = () => {
    const {login} = useAuth();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        login({username, password});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">UserName</label>
                <input id={'username'} type='text' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id={'password'} type='text' /> 
            </div>
            <button type={'submit'}>Login</button>
        </form>
    )
}