import React, { useContext, useState } from 'react';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import useForm from '../../../hooks/useForm/index'; //Teste pra ver se builda no vercel
import Button from '../../../components/Button';
import { UserContext } from '../../../UserContext';
import Error from '../../../utils/Error';
import LoginTemplate from '../../../components/LoginTemplate';
import Head from '../../../utils/Head';


const LoginCreate = () => {

    const { loading, createUser } = useContext(UserContext);

    const userName = useForm();
    const email = useForm('email');
    const password = useForm();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Validando form
        if (userName.validate() && email.validate() && password.validate()) {
            const res = await createUser(userName.value, email.value, password.value);
            setError(res);
        }

    }

    return (
        <LoginTemplate>
            <Head title='Cadastro'/>
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
                    {
                        error && <Error>{error}</Error>
                    }

                </form>
            </section>
        </LoginTemplate>
    )
}
export default LoginCreate;