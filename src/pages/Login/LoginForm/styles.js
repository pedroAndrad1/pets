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