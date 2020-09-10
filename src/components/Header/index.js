import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import Link from 'react-router-dom/Link';
import { UserContext } from '../../UserContext';
import { HeaderLink, HeaderContainer, Nav } from './styles';
import Container from '../Container';


const Header = () => {

    const { data } = useContext(UserContext);


    return (
        <HeaderContainer>
            <Container>
                <Nav>
                    <Link to='/' arial-label='Link para a home'><img src={logo} alt='Logo da Pets' /></Link>
                    {
                        data ?
                            <HeaderLink to='/conta'>{data.nome}</HeaderLink>
                            :
                            <HeaderLink to='/login'>Login / Criar</HeaderLink>
                    }

                </Nav>
            </Container>
        </HeaderContainer>
    )
}
export default Header;