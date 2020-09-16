import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    display: block;
    border: 1px solid #eee;
    font-size:1rem;
    padding: .8rem;
    border-radius: .4rem;
    background: #eee;
    transition: .3s;
    width: 90%;

    &:hover, &:focus{
        outline: none;
        background: #fff;
        box-shadow: 0 0 0 1px #fb1, 0 0 0 4px #fea
    }
  
`
const Label = styled.label`
    display: block; /**Nao tava entrando o padding sem */
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;
`
const Container = styled.div`
    margin-bottom: 1rem;
`
const Error = styled.span`
    color: red;
    margin-top: .25rem;
    font-family: .835rem;


`

const Input = ({ name, label, noLabel, noError, error, as, ...props}) => {
    return (
        <Container>
            {
                noLabel? 
                 <Label htmlFor={name} style={{display: "none"}}>{label}</Label>
                 :
                 <Label htmlFor={name}>{label}</Label>
            }
            <StyledInput as={as} id={name} name={name} {...props}  />
            {
               (!noError && error ) && <Error>{error}</Error>
            }
        </Container>
    )
}
export default Input;