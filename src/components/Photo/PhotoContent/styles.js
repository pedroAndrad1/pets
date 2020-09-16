import styled, { keyframes } from 'styled-components';
import ViewsBlackIcon from '../../../assets/visualizacao-black.svg';
import { Link } from 'react-router-dom';

/** Animation de entrada do modal, faz um efeito de crescimento */
const scaleUp = keyframes`
     to {
        opacity: initial;
        transform: initial;
    }
`


export const ModalContainer = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  /**A foto vaqi ficar na primeira coluna */
  grid-template-columns: 36rem 20rem;
  /** Os comments vao ficar na segunda linha */
  grid-template-rows: auto 1fr auto;
  /**Para ter um scroll da comments */
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} 0.3s forwards;

  @media (max-width: 64rem){
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }

`
export const Photo = styled.img`
    /**Para ocupar as tres linhas do grid */
    grid-row: 1/4;

    @media (max-width: 64rem){
        grid-row: 1;
     }
    
`
export const Details = styled.div`
    padding: 1.5rem 1.5rem 0 2rem;

`
export const Author = styled.p`
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 64rem){
        width: 80%;
  }

`

export const Views = styled.span`

    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        display: inline-block;
        margin-right: .5rem;
        height: 16px;
        width: 17px;
        background: url(${ViewsBlackIcon}) no-repeat center center ;
    }
` 
export const Attributes = styled.ul`
    display: flex;
    font-size: 1.125rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 2rem;
    
    & li{
        margin-right: 2rem;    
    }

    & li::before{
        content: '';
        display: inline-block;
        height: 20px;
        margin-right: .5rem;
        position: relative;
        top: 3px;
        width: 2px;
        background: #333;
        margin-top: 5px;
    }

`