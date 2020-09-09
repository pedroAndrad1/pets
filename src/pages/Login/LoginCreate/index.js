import React, { useContext } from 'react';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import { UserContext } from '../../../UserContext';
import API from '../../../API';

const LoginCreate = () => {

    const { userLogin, loading, login, error, createUser } = useContext(UserContext);

    const userName = useForm();
    const email = useForm('email');
    const password = useForm();


    const handleSubmit = (event) => {
        event.preventDefault();

        //Validando form
        if (userName.validate() && email.validate() && password.validate()) {
            createUser(userName.value, email.value, password.value);
        }

    }

    return (
        <section className='animeLeft'>
            <Title>Cadastro</Title>
            <form onSubmit={handleSubmit} className='form'>
                <Input
                    label='Usuário'
                    type='text'
                    name='user'
                    {...userName}
                />
                <Input
                    label='Email'
                    type='email'
                    name='email'
                    {...email}
                />
                <Input
                    label='Senha'
                    type='password'
                    name='password'
                    {...password}
                />
                {
                    loading ?
                        <Button disabled>Carregando</Button>
                        :
                        <Button>Cadastrar </Button>
                }

            </form>
        </section>
    )
}
export default LoginCreate;