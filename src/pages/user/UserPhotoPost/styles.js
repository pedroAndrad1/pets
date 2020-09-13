import styled from 'styled-components';


export const PostContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 1rem;

`
/*Vou usar a img de preview como background para poder controlar melhor */
export const Preview = styled.div`

    border-radius: 1rem;
    background-size: cover;
    background-position: center center;
    background-image: ${({img}) => `url(${img})`};
    
    /*Uma tecnica para a imagem aparecer */
    &:after{
        content:'';
        display: block;
        height: 0;
        padding-bottom: 100%;
    }

`