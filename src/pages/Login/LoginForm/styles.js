import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PerdeuSenha = styled(Link)`
    display: inline-block;
    color: #666;
    padding: .5rem 0;
    line-height: 1;

    &:after{
        content:'';
        height: 2px;
        width: 100%;
        background: currentColor;
        display: block;
    }
`

export const Cadastro = styled.div`
    margin: 4rem 0;
`

export const SubTitle = styled.h2`
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
    margin:0; /**Por padrao o h2 vem com margem */

    &:after{
        content: '';
        display: block;
        height: .5rem;
        width: 3rem;
        background: #ddd;
        border-radius: .2rem;
    }
`