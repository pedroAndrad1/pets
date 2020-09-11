import styled from 'styled-components';

export const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    & a, & button{
        background: #eee;
        border-radius: .2rem;
        height: 40px;
        width: 40px;
        border: 1px solid transparent;
        padding: 0;
        transition: .1s;
        cursor: pointer;
        
        /*Pra alinhar o svg */
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    & a:hover, & a:focus,
    & button:hover, & button:focus{
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
    }
    
    & a.active{
        background: white;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
    }
    
    & a.active svg > * {
        fill: #fb1;
    }
`