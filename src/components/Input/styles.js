import styled from 'styled-components';

export const StyledInput = styled.input`
    display: block;
    border: 1px solid #eee;
    font-size:1rem;
    padding: .8rem;
    border-radius: .4rem;
    background: #eee;
    transition: .3s;
    width: 100%;
    resize: none;

    &:hover, &:focus{
        outline: none;
        background: #fff;
        box-shadow: 0 0 0 1px #fb1, 0 0 0 4px #fea
    }
  
`
export const Label = styled.label`
    display: block; /**Nao tava entrando o padding sem */
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;
`
export const Container = styled.div`
    margin-bottom: 1rem;
`
export const Error = styled.span`
    color: red;
    margin-top: .25rem;
    font-family: .835rem;


`