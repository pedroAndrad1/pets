import styled, {css} from 'styled-components';

export const StyledNavMobile = styled.nav`

    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);

    & a, & button{
        display: flex;
        align-items: center;
        background: none;
        width: 100%;
        border: none;
        border-bottom: 1px solid #eee;
        padding: 0.5rem 0;
        cursor: pointer;
    }
    
    & a:hover svg > *,
    & button:hover svg > *{ 
        fill: #fb1;
    }

    /*Tirando a border-bottom do button */
    & button{
        border-bottom: none;
    }

    /*Afastando um pouco o icone do texto */
    & svg{
        margin-right: 0.5rem;
    }       

    /*Estilos aplicados se o menu mobile estiver ativo 

    O styled component pode receber um funcao e nela vc pode usar variaveis declaradas fora dele.
    Esta recebe o value do props, e ve se ele e maior que um. Ou seja, ve se tem algo inscrito no input.
    Caso sim, ele mantem a animacao .
    Para isso e preciso importar o usar o elemento css do styled-components

    NAO SE ESQUECA DE POR O RETURN!!!!

    */
    
    /* Estilo para o menu ativo, pois de incio ele e invisivel */
   ${
        ({active}) => {
           
            return  active?
                             css`
                                transition: 0.3s;
                                transform: initial;
                                opacity: 1;
                                pointer-events: initial;
                                z-index: 100;
                                
                                /* Retirando os estilos de UserNav versao desktop */
                                & a:hover, & a:focus,
                                & button:hover, & button:focus{
                                    background: white;
                                    box-shadow: none;
                                    border-bottom: 1px solid #eee;
                                    outline: none;
                                }
                                & button:hover, & button:focus{
                                    border-bottom: none;
                                }
                                & a.active{
                                    background: white;
                                    box-shadow: none;
                                    border-bottom: 1px solid #eee;
                                    outline: none;
                                }
                                /*Pra ficar marcado qual e a aba que o user esta */
                                & a.active svg > *{
                                    fill: #fb1;
                                }

                            `
                            :
                            css`
                                 /*Se o menu estiver desativado ele estara invisivel */
                                 opacity: 0;
                                 /*Para nao ser possivel clicar quando o menu estiver fechado */
                                 pointer-events: none;
                            `
                    
        }  
    }



`