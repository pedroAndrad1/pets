import React, { createContext, useState, useEffect, useCallback } from 'react';
import API from '../API'
import { useHistory } from 'react-router-dom';

//Context para ter acesso aos dados do user em qualquer ponto da aplicacao.

export const UserContext = createContext();

//Todos os components englobados por esse context terao acesso aos seus atributos e metodos
export const UserStorage = ({ children }) => {

    const [data, setData] = useState();
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();


    //Login por meio de token
    const tokenLogin = useCallback(token => {

        setError(null);
        setLoading(true);

        API.GET_USER(token)
            .then(res => {
                setData(res);
                setLogin(true)
            })
           
            .finally(() => setLoading(false))
    }, [])

    //Realiza o login no carregamento, caso tenha o token
    const autoLogin = useCallback(
        () => {
            const token = window.localStorage.getItem('token');

            if (token) {

                setError(null);
                setLoading(true);

                API.TOKEN_VALIDATE_POST(token)
                    .then(res => {
                        res ? tokenLogin(token) : userLogout()
                    })
                    .finally(() => setLoading(false))
            }
        }, [tokenLogin]
    )



    useEffect(() => autoLogin(), [autoLogin]);


    //Login por meio de userName e password
    const userLogin = (userName, password) => {

        setError(null);
        setLoading(true);

        API.TOKEN_POST(userName, password)
            .then(res => {
                window.localStorage.setItem('token', res.token);
                return API.GET_USER(res.token);
            })
            .then(res => {
                setData(res);
                setLogin(true);
                console.log(res)
                history.push('/conta')
            })
            .catch(e => {
                setError(e.message);
            })
            .finally(() => setLoading(false))
    }

    const userLogout = () => {
        setData(null);
        setLogin(false);
        setLoading(false);
        setError(null)
        window.localStorage.removeItem('token');
    }

    const createUser = (userName, email, password) => {

        setError(null);
        setLoading(true);

        API.USER_POST(userName, email, password)
            .then( () => {
                //Se a criacao do user for OK, ele vai ser logado
                userLogin(userName , password);
            })
            .catch( e => setError(e.message) )
            .finally(() => setLoading(false))
    }

    return (
        <UserContext.Provider value={{ userLogin, userLogout, createUser, data, login, error, loading }}>
            {children}
        </UserContext.Provider>
    )

}