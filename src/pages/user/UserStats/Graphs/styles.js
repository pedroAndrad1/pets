import styled from 'styled-components';

export const NoPhotos = styled.p`
    text-align: center;
    padding: '2rem 0 4rem 0';
    color: #888;     
`

export const GraphsSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    
    @media(max-width: 40rem){
        grid-template-columns: 1fr;
    }

`