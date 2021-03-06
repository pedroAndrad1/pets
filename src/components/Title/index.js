import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative; /**Para ajeitar o after */
    z-index: 1 /**Para ficar em cima do after */;
    word-break: break-word;

    &:after{
        content:'';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background: #fb1;
        position: absolute;
        bottom: 5px;
        left: 3px;
        border-radius: .2rem;
        z-index: -1;
    }

    @media(max-width: 40rem){
        font-size: 2.3rem;
    }
`

const Title = ({ children, props }) => {

    return (
        <StyledTitle {...props}>
            {children}
        </StyledTitle>
    )
}

export default Title;