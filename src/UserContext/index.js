import React, { createContext, useState, useEffect, useCallback } from 'react';
import API from '../API'
import { useHistory } from 'react-router-dom';

//Context para ter acesso aos dados do user em qualquer ponto da aplicacao.

export const UserContext = createContext();

//Todos os components englobados por esse context terao acesso aos seus atributos e metodos
export const UserStorage = ({ children }) => {

    const [data, setData] = useState();
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    //const [error, setError] = useState(null);
    const history = useHistory();

    //Toda function vai retornar um error, caso nao haja error no fetch, o error sera null.


    //Login por meio de token
    const tokenLogin = useCallback(async token => {

        //setError(null);
        setLoading(true);

       await API.GET_USER(token)
            .then(res => {
                setData(res);
                setLogin(true)
            })
           
            .finally(() => setLoading(false))
    }, [])

    
    //useEffect(() => autoLogin(), [autoLogin]);
    //Realiza o login no carregamento, caso tenha o token
    useEffect( () => {
        
        //Estou criando a funcao aqui para poder usar o async/await
        const autoLogin = async () => {
            const token = window.localStorage.getItem('token');

            if (token) {

                //setError(null);
                setLoading(true);

               await API.TOKEN_VALIDATE_POST(token)
                    .then(res => {
                        res ? tokenLogin(token) : userLogout()
                    })
                    .finally(() => setLoading(false))
            }else{
                setLogin(false);
            }
        }

        //Chamando a funcao
        autoLogin();

    }, [tokenLogin])

    //Login por meio de userName e password
    const userLogin = async (userName, password) => {

        let error = null;

        //setError(null);
        setLoading(true);

       await API.TOKEN_POST(userName, password)
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
                //setError(e.message);
                error = e.message;
            })
            .finally(() => {
                setLoading(false)
            })

        return error;
    }

    const userLogout = () => {
        setData(null);
        setLogin(false);
        setLoading(false);
       // setError(null)
        window.localStorage.removeItem('token');
    }

    const createUser = async (userName, email, password) => {

        let error = null;
       // setError(null);
        setLoading(true);

        await API.USER_POST(userName, email, password)
            .then( () => {
                //Se a criacao do user for OK, ele vai ser logado
                userLogin(userName , password);
            })
            .catch( e => {
                //setError(e.message) 
                error = e.message;
            }
            )
            .finally(() => setLoading(false))

        return error;
    }

    return (
        <UserContext.Provider value={{ userLogin, userLogout, createUser, data, login, loading }}>
            {children}
        </UserContext.Provider>
    )

}