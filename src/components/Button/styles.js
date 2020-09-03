import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledButton = styled.button`
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: .4rem;
    background: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: .8rem 1.2rem;
    transition: .3s;

    &:hover{
        outline: none; /**Para tirar a linha azul do entorno */
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1
    }

    &:disabled{
        opacity: .5;
        cursor: wait;
    }

`
export const LinkButton = styled(Link)`
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: .4rem;
    background: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: .8rem 1.2rem;
    transition: .3s;

    &:hover{
        outline: none; /**Para tirar a linha azul do entorno */
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1
    }

    &:disabled{
        opacity: .5;
        cursor: wait;
    }
`