import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/login.jpg';
const LoginContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    &:before{
        content: '';
        display: block;
        background: url(${bg}) no-repeat center center ;
        background-size: cover;
    }

    @media(max-width: ) {
        
    }
    
`
const FormContainer = styled.div`
    max-width: 30rem;
    padding: 3rem;
    margin-top: 15vh;
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