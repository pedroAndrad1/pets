import React, { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const LoginForm = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section>
            <h1>Login</h1>
            <form>
                <Input
                    label='Usuário'
                    name='user'
                    type='text'
                    value={user} onChange={({ target }) => setUser(target.value)} />
                <Input
                    label='Senha'
                    name='password'
                    type='password'
                    value={password} onChange={({ target }) => setPassword(target.value)} />
                <Button >Entrar</Button>
            </form>
        </section>
    )
}
export default LoginForm;