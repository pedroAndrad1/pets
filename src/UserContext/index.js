import React, { createContext, useState, useEffect } from 'react';
import API from '../API'

//Context para ter acesso aos dados do user em qualquer ponto da aplicacao.

export const UserContext = createContext();

//Todos os components emglobados por esse context terao acesso aos seus atributos e metodos
export const UserStorage = ({ children }) => {

    const [data, setData] = useState();
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => autoLogin(), [] );


    const autoLogin = () => {
        const token = window.localStorage.getItem('token');

        if (token) {

            setError(null);
            setLoading(true);

            API.TOKEN_VALIDATE_POST(token)
                .then(res => {
                    res ? tokenLogin(token) : userLogout()
                })
                .finally( () => setLoading(false) )
        }
    }

    const tokenLogin = token => {

        setError(null);
        setLoading(true);

        API.GET_USER(token)
            .then(res => setData(res))
            .catch(e => {
                setError(e);
                console.log(error.message)
            })
            .finally( () => setLoading(false) )
    }

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
            })
            .catch(e => {
                setError(e);
                console.log(error.message)
            })
            .finally( () => setLoading(false) )
    }

    const userLogout = () => {
        setData(null);
        setLogin(false);
        setLoading(false);
        setError(null)
        window.localStorage.removeItem('token');
    }

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data }}>
            {children}
        </UserContext.Provider>
    )

}