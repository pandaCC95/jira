import { Button, Form } from "antd";
import { useAuth } from "Context/auth-context";
import { LongButton } from "unauthenticated-app";
//import { FormEvent } from "react"

export const RegisterScreen = () => {
    const {register} = useAuth();

    const handleSubmit = (values: {username: string, password: string}) => {
/*         event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value; */
        register(values);
    }

    return(
        <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required: true, message:"Please input the username"}]} >
                <input id={'username'} type='text' placeholder="username" />
            </Form.Item>
            <Form.Item name={'password'} rules={[{required: true, message:'Please input the password'}]}>
                <input id={'password'} type='text' placeholder="password" />
            </Form.Item>
            <Form.Item>
                <LongButton htmlType="submit" type="primary">Register</LongButton>
            </Form.Item>
        </Form>
    )
}