import styled from 'styled-components';


export const FeedContainer = styled.ul`

    opacity: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-content: center;
   


    @media (max-width: 40rem){
        grid-template-columns: repeat(2, 1fr);
          
    }
        
`
export const Fim = styled.p`
    text-align: center;
    padding: '2rem 0 4rem 0';
    color: #888;     
`


