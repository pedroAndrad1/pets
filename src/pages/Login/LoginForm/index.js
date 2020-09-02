import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../UserContext';
import { useHistory } from 'react-router-dom';

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
                {
                    loading ?
                        <Button disabled>Carregando</Button>
                        :
                        <Button>Entrar </Button>
                }
            </form>
        </section>
    )
}
export default LoginForm;