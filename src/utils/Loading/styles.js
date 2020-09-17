import styled from 'styled-components';

/**Ocupa todo o espaco e centraliza o container do svg na tela */
export const Wrapper = styled.div`

    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

`
export const StyledLoading = styled.div`

    /**Fazendo o circulo */
    height: 80px;
    width: 80px;
    background: rgba(255,255,255,.5);
    border-radius: 50%;
    /**O SVG fica um pouco torto sem isso */
    padding-left: 5px;

    display: flex;
    justify-content: center;
    align-items: center;


`