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