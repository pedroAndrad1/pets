import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import bgLogin from '../../assets/login.jpg';
import bgCadastro from '../../assets/hulk_deitado.jpg';
import bgPerdiSenha from '../../assets/ovelha_dormindo.jpg';

const LoginContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 100%;

    &:before{
        content: '';
        display: block;
        ${({ backGround }) => {
            return backGround && css`
                            background: url(${backGround}) no-repeat center center;
                            background-size: cover;
                    `
         }
        }
    }

    @media(max-width: 40rem ) {
        grid-template-columns: 1fr;

        &:before{
            display: none
        }

    }
    
`
const FormContainer = styled.div`
    max-width: 30rem;
    padding: 3rem;
    margin-top: 15vh;

    @media(max-width: 40rem){
        margin-top: 5vh;
    }
`

const LoginTemplate = ({ children }) => {

    const [background, setBackground] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {

        switch (pathname) {
            case '/login':
                setBackground(bgLogin);
                break;
            case '/login/cadastro':
                setBackground(bgCadastro);
                break;
            case '/login/recuperar-senha':
                setBackground(bgPerdiSenha);
                break;
            default:
                setBackground(bgLogin);

        }

    }, [pathname])



    return (

        <LoginContainer backGround={background}>
            {/**Pseudo-element Before */}
            <FormContainer>
                {children}
            </FormContainer>
        </LoginContainer>

    )
}
export default LoginTemplate;