import { FormEvent} from "react";

const apiURL = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {

    const login = (param: {username: string; password: string}) => {
        fetch(`${apiURL}/login`,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(param)
        }).then(async Response => {
            if(Response.ok){

            }
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password});
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">UserName</label>
                <input type='text' id={"username"} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' id={"password"} /> 
            </div>
            <button type={'submit'}>Submit</button>
        </form>
    )
}