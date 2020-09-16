import styled, { keyframes } from 'styled-components';

export const CommentArea = styled.form`

    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem 1rem 0 1rem;

`
const latir = keyframes`

    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }

`


export const SubmitButton = styled.button`

    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:focus,
    &:hover {
        outline: none;
    }

    /**Mudando a cor do svg */
    &:focus svg path,
    &:hover svg path {
        fill: #fea;
        stroke: #fb1;
    }

    /**Add animacao de latido */
    &:focus svg g,
    &:hover svg g {
        animation: ${latir} 0.6s infinite;
    }

`