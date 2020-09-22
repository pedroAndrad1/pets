import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/logo-footer.svg';

const StyledFooter = styled.footer`
    background:#fb1;
    padding: 3rem 1rem 0 1rem;
    height: 10rem;
    text-align: center;
    color: #764701;

    & p{
        margin-top: 1rem;
    }

`
const SocialMedia = styled.a`

    padding: 0;
    &:hover{
        text-decoration: underline;
    }

`

const Footer = () =>{

    return(
        <StyledFooter>
            <Logo />
            <p>Criado por <SocialMedia href='https://github.com/pedroAndrad1'>Pedro de Andrade</SocialMedia></p>
        </StyledFooter>
        )
}
export default Footer;