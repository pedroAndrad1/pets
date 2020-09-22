import React, { useState } from 'react';
import LoginTemplate from '../../../components/LoginTemplate';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import useForm from '../../../Hooks/useForm';
import API from '../../../API';
import { Error } from '../../../components/Input/styles';
import Head from '../../../utils/Head';

//Um email sera enviado para resetar a senha da cota

const LoginPasswordLost = () => {

    const login = useForm();
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [ok, setOk] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();

        if (login.validate()) {

            setLoading(true);
            await API.PASSWORD_LOST(login.value, window.location.href.replace('recuperar-senha', 'nova-senha'))
                .then(() => {
                    setOk(true)
                })
                .catch(e => setError(e.message))
                .finally(() => setLoading(false))
        }

    }


    return (
        <LoginTemplate>
            <section className='animeLeft'>
                <Head title='Recuperar senha'/>
                <Title>Perdeu a senha?</Title>
                {
                    ok ?
                        <p style={{ color: '#4c1' }}>Email para recuperação de senha enviado com sucesso!</p>
                        :
                        <form onSubmit={handleSubmit}>
                            <Input label='Usuário ou Email' {...login} type='email'  />
                            {
                                loading ?
                                    <Button type='submit' disabled>Enviando...</Button>
                                    :
                                    <Button type='submit'>Enviar email</Button>
                            }
                            {
                                <Error>{error}</Error>
                            }
                        </form>
                }
            </section>
        </LoginTemplate>
    )
}
export default LoginPasswordLost;