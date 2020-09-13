import styled from 'styled-components';
import viewIcon from '../../../assets/visualizacao.svg';

export const Item = styled.li`

    border-radius: .2rem;
    cursor: pointer;

    /** Para ajustar o icone,o numero de visualizacoes e a photo, o FeedItem tera display grid. 
        Assim vou poder colocar ambos na mesma posicao de linha e coluna,
        fazendo o icone ficar sobre posto a photo.
     */

     display: grid;

    & img, & span{
        grid-area: 1/1;
    }

    /** As visualizacoes so aparecem no hover */
    &:hover span{
        display:flex;
    }


    /** Para a cada três photos, a segunda sera maior que as outras duas, ocupando duas linhas e duas colunas */
    &:nth-child(2){
        grid-column: 2/4;
        /**Como nao da pra saber qual serao as linhas, coloco pra expandir ate duas linhas */
        grid-row: span 2;
    }

    /** Em telas menores as photos deverao ficar do mesmo tamanho*/
    @media (max-width: 40rem) {
        &:nth-child(2){
            grid-column: initial;
            grid-row: initial;
        }
    }

`

export const Visualizacoes = styled.span`

    /**Para dar uma escurecida na photo */
    background: rgba(0,0,0,.3);
    color: #fff;
    text-align: center;
    align-items: center;
    justify-content:center;

    /**Inicialmente estara com display none */
    display: none;

    /**Icone de visualizacao */
    &:before{
        content:'';
        width: 16px;
        height: 10px;
        display: inline-block;
        margin-right: 0.25rem;
        background-image: url(${viewIcon});
    }
`

