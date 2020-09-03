import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative; /**Para ajeitar o after */
    z-index: 1 /**Para ficar em cima do after */;

    &:after{
        content:'';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background: #fb1;
        position: absolute;
        bottom: 5px;
        left: -5px;
        border-radius: .5rem;
        z-index: -1;
    }
`

const Title = ({ children }) => {

    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}

export default Title;