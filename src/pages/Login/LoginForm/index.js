import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useForm from '../../../Hooks/useForm';

const LoginForm = () => {

    
    const userName = useForm();
    const password = useForm();

    return (
        <section>
            <h1>Login</h1>
            <form>
                <Input
                    label='Usuário'
                    name='user'
                    type='text'
                    {...userName} />
                <Input
                    label='Senha'
                    name='password'
                    type='password'
                    {...password}/>
                <Button >Entrar</Button>
            </form>
        </section>
    )
}
export default LoginForm;