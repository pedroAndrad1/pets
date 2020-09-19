import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import Page404 from '../Page404';
//Esse e um componente de roteamento das paginas de Login. Para fazer um nested routing.

const LoginRouting = () => {
    /*Se usar o BrowserRouter englobando o switch, o roteamento so vai funcionar quando carregar a pagina.
      Ou seja, quando clicar nos botoes, o roteamento nao vai funcionar. Apenas para o home.  
    */
    return (
            <Switch>
                <Route path='/login' exact component={LoginForm} />
                <Route path='/login/cadastro' component={LoginCreate} />
                <Route path='/login/recuperar-senha' component={LoginPasswordLost} />
                <Route path='/login/reset' component={LoginPasswordReset} />
                <Route path='*' component={Page404} />
            </Switch>
    )
}
export default LoginRouting;