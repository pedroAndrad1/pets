import React from 'react';
import {StyledButton, LinkButton} from './styles';

const Button = ({ children, link, ...props }) => {
    return (
        <>
        {
            link?
            <LinkButton {...props}> {children} </LinkButton>
            :
            <StyledButton {...props} >{children}</StyledButton>

        }
        </>
    )
}
export default Button;