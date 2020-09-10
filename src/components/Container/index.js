import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 50rem;
    padding: 30px;
    flex: 1 0 auto;

`

const Container = ({children}) =>{
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;