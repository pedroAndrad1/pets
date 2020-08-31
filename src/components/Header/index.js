import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import Link from 'react-router-dom/Link';
import './Header.css';
import { UserContext } from '../../UserContext';

const HeaderContainer = styled.header`
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: fixed;
    top: 0;
    height: 4rem;
    width: 100vw;
    z-index: 100;

    display: flex;
    justify-content: center;

`
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20%;
`



const Header = () => {

    const { data, userLogout } = useContext(UserContext);


    return (
        <HeaderContainer>
            <Nav>
                <Link to='/' arial-label='Link para a home'><img src={logo} alt='Logo da Pets' /></Link>
                <button onClick = {() => userLogout()}> sair </button>
                {
                    data ?
                        <Link to='/conta' className='login'>{data.nome}</Link>
                        :
                        <Link to='/login' className='login'>Login / Criar</Link>
                }

            </Nav>
        </HeaderContainer>
    )
}
export default Header;