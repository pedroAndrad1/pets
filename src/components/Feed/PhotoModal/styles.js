import styled from 'styled-components';

export const Modal = styled.div`

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 1000;
  /** O calc e pq o scroll entra na conta do padding da direita */
  padding:  2rem calc(2rem + 15px) 2rem 4rem;

  @media (max-width: 64rem ){
    /** O calc e pq o scroll entra na conta */
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    z-index: 1000;
  }
  
`
