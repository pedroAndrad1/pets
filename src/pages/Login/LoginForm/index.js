import React, { useContext, useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../UserContext';
import { useHistory } from 'react-router-dom';
import { PerdeuSenha, SubTitle, Cadastro } from './styles';
import Title from '../../../components/Title';
import Error from '../../../utils/Error';
import LoginTemplate from '../../../components/LoginTemplate';
import Head from '../../../utils/Head';

const LoginForm = () => {

    const { userLogin, loading, login } = useContext(UserContext);
    const history = useHistory();
    const [error, setError] = useState(null);

    //Se o usario ja estiver logado, redirecionar para a page conta
    if (login) history.push('/conta')

    const userName = useForm();
    const password = useForm();

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Validando form
        if (userName.validate() && password.validate()) {

            const erro = await userLogin(userName.value, password.value);

            console.log(erro)
            setError(erro)

        }

    }

    return (
        <LoginTemplate>
            <Head title='Login'/>
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
                            <Button>Entrar</Button>
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
        </LoginTemplate>
    )
}
export default LoginForm;