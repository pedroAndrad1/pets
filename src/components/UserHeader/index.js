import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import UserNav from './UserNav';
import { useLocation } from 'react-router-dom';

const StyledUserHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
    position: relative;
    z-index: 1000;
`


const UserHeader = () => {

    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;

        switch (pathname) {

            case '/conta/postar':
                setTitle('Poste Sua Foto');
                break;
            case '/conta/estatisticas':
                setTitle('Estatísticas');
                break;
            default:
                setTitle('Minha Conta');

        }

    }, [location])

    return (
        <StyledUserHeader>
            <Title>{title}</Title>
            <UserNav></UserNav>
        </StyledUserHeader>
    )
}
export default UserHeader;