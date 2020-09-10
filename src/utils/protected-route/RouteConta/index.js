import React, { useContext } from 'react';
import {Route, useHistory} from 'react-router-dom';
import { UserContext } from '../../../UserContext';

//A rota conta e uma rota protegida. So pode ser acessada caso o user esteja logado.

const RouteConta = props => {
    const history = useHistory();
    const {login} = useContext(UserContext);

    console.log('entrei aqui');
    console.log(login);



    switch(login){
        //Se o user esta logado, ele pode acessar a conta
        case true:
            return <Route {...props} />
        //Caso nao esteja deve ir para login
        case false:
            history.push('/login');
            return <></>
        //Caso isso nao tenha sido averiguado, deve retornar nada.
        default:
            console.log('entrei default');
            return <></>
    }

/*
    //Se o user esta logado, ele pode acessar a conta
    if(login === true){
        return <Route {...props} />
    }//Caso nao esteja deve ir para login
    else if(login === false){
        useHistory().push('/login');
    }//Caso isso nao tenha sido averiguado, deve retornar nada.
    else{
        return (
            <>
            </>
        )
    }
*/
}
export default RouteConta;