import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../UserContext';
import { useHistory } from 'react-router-dom';
import { PerdeuSenha, SubTitle, Cadastro } from './styles';
import Title from '../../../components/Title';
import Error from '../../../utils/Error';

const LoginForm = () => {

    const { userLogin, loading, login, error} = useContext(UserContext);
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
            <form onSubmit={handleSubmit} className='form'>
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
            {
                error &&
                    <Error>{error}</Error>
            }
            <PerdeuSenha to='login/recuperar-senha'>Perdeu a Senha?</PerdeuSenha>
            <Cadastro>
                <SubTitle>Cadastre-se</SubTitle>
                <p style={{ margin: '2rem 0' }}>
                    Ainda não possui uma conta? Cadastre-se e
                    compartilhe dessa overdose de fofura!
                </p>
                <Button link to='login/cadastro'>Cadastro</Button>
            </Cadastro>
        </section>
    )
}
export default LoginForm;