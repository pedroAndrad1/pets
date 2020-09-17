import styled, { keyframes } from 'styled-components';

/** Para colocar o skeleton em cima da img */
export const Wrapper = styled.div`
    display: grid;
`
/**A opacity sera mudade no carragemento da imagem */
export const Img = styled.img`
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
`
/**Uma animacao para dar a impressao de que o background do skeleton esta se movimentando,
 * passando uma ideia de carregamento.
 */
const skeletonRunBG = keyframes`
    from {
    background-position: 0px;
    }
    to {
    background-position: -200%;
    }
`

export const Skeleton = styled.div`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    /**Truque para ele ocupar todo o espaco */
    background-size: 200%;
    animation: ${skeletonRunBG} 1.5s infinite linear;
`