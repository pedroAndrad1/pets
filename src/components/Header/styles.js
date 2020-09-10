import styled from 'styled-components';
import { Link } from 'react-router-dom';
import usuario from '../../assets/usuario.svg';


export const HeaderLink = styled(Link)`

    &:after{
        content: " "; /*Para ele aparecer, ja que vai ser um icone*/
        display: inline-block;/*Tambem para aparecer*/
        background: url(${usuario}) no-repeat center center;
        position: relative;
        top: 3px;
        margin-left: .5rem;
        
        
        /*Valores tirados do Figma*/
        width: 14px;
        height: 17px;
    }

`

export const HeaderContainer = styled.header`
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: fixed;
    top: 0;
    height: 4rem;
    width: 100vw;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

`
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
