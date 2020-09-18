import styled, { css } from 'styled-components';

export const CommentsSection = styled.ul`
    padding: 0 2rem;
    /**Para ter um scroll inves de crescer o element */
    overflow-y: auto;
    /**Para nao crescer para a direita e sim quebrar o texto */
    word-break: break-word;
    
    ${
       ({page}) =>  {
           return page && css`
               padding: 5px 0 0 0;
           `
       }
   } 

`