import React from 'react';
import Container from '../../components/Container';
import Image from '../../components/Image';
import styled from 'styled-components';
import bg from '../../assets/404.jpg'
import {NavLink } from 'react-router-dom';
import Head from '../../utils/Head';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    text-align: center;
    padding: '2rem 0 4rem 0';
    color: #888;     
`

const Page404 = () => {

    return (
        <Container>
            <Head title='Pagína não encontrada'/>
            <Wrapper>
                <Image src={bg}/>
                <Text>Parece que a bolinha não está aqui :(. Vamos procurar por <NavLink to='/' style={{textDecoration:'underline', padding:0}}>aqui!</NavLink></Text>
            </Wrapper>
        </Container>
    )
}
export default Page404;