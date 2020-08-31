import React, { useEffect, useContext } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useForm from '../../../hooks/useForm';
import API from '../../../API';
import { UserContext } from '../../../UserContext';

const LoginForm = () => {
    
    const {userLogin} = useContext(UserContext);

    const userName = useForm();
    const password = useForm();

    const handleSubmit = (event) =>{
        event.preventDefault();

        //Validando form
        if(userName.validate() && password.validate()) 
            userLogin(userName.value, password.value);
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label='Usuário'
                    name='user'
                    type='text'
                    {...userName} />
                <Input
                    label='Senha'
                    name='password'
                    type='password'
                    {...password} />
                <Button >Entrar</Button>
            </form>
        </section>
    )
}
export default LoginForm;