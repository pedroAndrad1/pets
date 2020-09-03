import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../UserContext';
import { useHistory } from 'react-router-dom';
import {PerdeuSenha } from './styles';
import Title from '../../../components/Title';

const LoginForm = () => {

    const { userLogin, loading, login } = useContext(UserContext);
    const history = useHistory();

    //Se o usario ja estiver logado, redirecionar para a page conta
    if (login) history.push('/conta')

    const userName = useForm();
    const password = useForm();

    const handleSubmit = (event) => {
        event.preventDefault();

        //Validando form
        if (userName.validate() && password.validate())
            userLogin(userName.value, password.value);
    }

    return (
        <section className='animeLeft'>
            <Title>Login</Title>
            <form onSubmit={handleSubmit} style={{marginBottom: '2rem'}}>
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
                {
                    loading ?
                        <Button disabled>Carregando</Button>
                        :
                        <Button>Entrar </Button>
                }
            </form>
            <PerdeuSenha to='login/recuperar-senha'>Perdeu a Senha?</PerdeuSenha>
        </section>
    )
}
export default LoginForm;