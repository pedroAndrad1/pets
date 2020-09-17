import React, { useContext } from 'react';
import {Route, useHistory} from 'react-router-dom';
import { UserContext } from '../../../UserContext';

//A rota conta e uma rota protegida. So pode ser acessada caso o user esteja logado.

const RouteConta = props => {
    const history = useHistory();
    const {login} = useContext(UserContext);

    switch(login){
        //Se o user esta logado, ele pode acessar a conta
        case true:
            return <Route {...props}/>
        //Caso nao esteja deve ir para login
        case false:
            history.push('/login');
            return <></>
        //Caso isso nao tenha sido averiguado, deve retornar nada.
        default:
            return <></>
    }

}
export default RouteConta;