import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Main = styled.main`

    flex: 1; /*Para o main crescer mais que o header e o footer */

    display: flex;
    justify-content: center;

`

const PageRoot = ({ children }) => {

    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}
export default PageRoot;