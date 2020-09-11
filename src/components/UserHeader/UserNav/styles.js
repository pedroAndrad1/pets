import styled, { css } from 'styled-components';

export const MobileNavButton = styled.button`
    background: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    border: 1px solid transparent;
    padding: 0;
    transition: .1s;
    cursor: pointer;
    
    /*Pra alinhar o after */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Esse os tracinhos do button */
    &::after{
        content: '';
        /*Fazendo um traço */
        display: block;
        width: 1.2rem;
        height: 2px;
        border-radius: 2px;
        background: currentColor;
        /*Os outros dois tracos sao sombras do primeiro */
        box-shadow: 0 6px currentColor, 0 -6px currentColor;
        transition: 0.2s;
    }

    &:hover, &:focus{
        outline: none;
        background: white;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
        color: #fb1;
    }

    /*Estilos aplicados se o menu mobile estiver ativo 

    O styled component pode receber um funcao e nela vc pode usar variaveis declaradas fora dele.
    Esta recebe o value do props, e ve se ele e maior que um. Ou seja, ve se tem algo inscrito no input.
    Caso sim, ele mantem a animacao .
    Para isso e preciso importar o usar o elemento css do styled-components

    NAO SE ESQUECA DE POR O RETURN!!!!

    */
    ${
        ({active}) => {
            return active && 
                css`
                outline: none;
                background: white;
                box-shadow: 0 0 0 3px #fea;
                border-color: #fb1;
                color: #fb1;

                &::after{
                    transform: rotate(90deg);
                    width: 4px;
                    height: 4px;
                    background: currentColor;
                    /*Os outros dois tracos sao sombras do primeiro */
                    box-shadow: 0 7px currentColor, 0 -7px currentColor;
                    transition: 0.2s;
                }
                 `
        }
    }

`