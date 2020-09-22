import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/login.jpg';

const LoginContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 100%;

    &:before{
        content: '';
        display: block;
        background: url(${bg}) no-repeat center center ;
        background-size: cover;
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
    return (

        <LoginContainer>
            {/**Pseudo-element Before */}
            <FormContainer>
                {children}
            </FormContainer>
        </LoginContainer>

    )
}
export default LoginTemplate;