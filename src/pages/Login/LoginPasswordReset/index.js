import React, { useEffect, useState } from 'react';
import LoginTemplate from '../../../components/LoginTemplate';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import API from '../../../API';
import { useHistory } from 'react-router-dom';
import { Error } from '../../../components/Input/styles';
import Head from '../../../utils/Head';

const LoginPasswordReset = () => {

    const password = useForm()
    const [key, setKey] = useState(null);
    const [login, setLogin] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const history = useHistory();

    useEffect(() => {
        //Pegando os params da url
        const params = new URLSearchParams(window.location.search);
        //Extraindo os params
        const key = params.get('key');
        const login = params.get('login');
        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);


    const handleSubmit = async event => {
        event.preventDefault();

        //so faz o fetch se tiver um password
        if (password.validate()) {
            setLoading(true);

            await API.PASSWORD_RESET(login, key, password.value)
                .then(() => history.push('/login'))
                .catch(e => setError(e.message))
                .finally(setLoading(false));

        }
    }

    return (
        <LoginTemplate>
            <Head title='Nova senha'/>
            <section className='animeLeft'>
                <Title>Mudança de senha</Title>
                <form onSubmit={handleSubmit}>
                    <Input label='Nova senha' type="password" name="password" {...password} />
                    {
                        loading ?
                            <Button type="submit" disabled>Criando nova senha...</Button>
                            :
                            <Button type="submit">Criar nova senha</Button>
                    }
                    {
                        error && <Error>{error}</Error>
                    }
                </form>
            </section>
        </LoginTemplate>
    )
}
export default LoginPasswordReset;