//import { login } from "auth-provider";
import { useAuth } from "Context/auth-context";
//import { FormEvent } from "react";
import { Button, Form, Input } from "antd";
import { LongButton } from "unauthenticated-app";

export const LoginScreen = () => {
    const {login} = useAuth();

    const handleSubmit = (values: {username: string, password: string}) => {
/*         event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value; */
        login(values);
    }

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} rules={[{required: true, message:'Please input the username'}]}>
                <Input id={'username'} type='text' placeholder="username" />
            </Form.Item>
            <Form.Item name={'password'} rules={[{required: true, message:'Please input the password'}]}>
                <Input id={'password'} type='text' placeholder="password"/> 
            </Form.Item>
            <Form.Item>
                <LongButton htmlType="submit" type={'primary'}>Login</LongButton>
            </Form.Item>
        </Form>
    )
}