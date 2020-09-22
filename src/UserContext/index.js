import React, { createContext, useState, useEffect, useCallback } from 'react';
import API from '../API'
import { useHistory } from 'react-router-dom';

//Context para ter acesso aos dados do user em qualquer ponto da aplicacao.

export const UserContext = createContext();

//Todos os components englobados por esse context terao acesso aos seus atributos e metodos
export const UserStorage = ({ children }) => {

    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(null);
    const [autoLoginIsHappening, setAutoLoginIsHappening] = useState(null);
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
            setLoading(true);
            setAutoLoginIsHappening(true);

            if (token) {

                //setError(null);

               await API.TOKEN_VALIDATE_POST(token)
                    .then( async res => {
                        //Tem que esperar o token login setar o data, senao o feed vai carregar a pag 1 duas vezes
                        res ? await tokenLogin(token) : userLogout()
                    })
                    .finally(() => {
                        setLoading(false);
                        setAutoLoginIsHappening(false);  
                    })
            }else{
                setLogin(false);
                setLoading(false)
                setAutoLoginIsHappening(false);
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

    const photoPost = async (formData, token) => {

        let error = null;
        // setError(null);
         setLoading(true);

         await API.PHOTO_POST(formData, token)
                .then( () => {
                    history.push('/conta');
                })
                .catch(e => {
                    error = e.message;
                })
                .finally(() => setLoading(false) );

        return error;
    }

/*
    const getPhoto = async id => {

        // ESTA CAUSANDO UM LOOP INFINITO QUANDO USADA EM UM useEfect!
        //JA TENTEI USAR O useCallback.

        // setError(null);
         setLoading(true);

        return await API.PHOTO_GET(id)
                .then( res => {
                    return res;
                })
                .catch(e => {
                    throw Error(e.message);
                })
                .finally(() => setLoading(false) );

    }
*/
    /*

    ESTA CAUSANDO UM LOOP INFINITO QUANDO USADA EM UM useEfect!
    JA TENTEI USAR O useCallback.

    const getPhotos =  async ({ page, total, user }) => {
        
        let error = null;

        setLoading(true);

        const res = await API.PHOTOS_GET({ page, total, user })
            .catch(e => error = e.message)
            .finally( () => setLoading(false) );

        return [res, error];

    }
    */

    return (
        <UserContext.Provider 
            value={{ userLogin, userLogout, createUser, photoPost, autoLoginIsHappening, data, login, loading }}
        >
            {children}
        </UserContext.Provider>
    )

}