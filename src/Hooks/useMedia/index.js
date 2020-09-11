import { useEffect, useState } from 'react';

//Esse hook diz como a tela esta de acordo com uma media query passada por parametro.

const useMedia = mediaQuery => {

    const [match, SetMatch] = useState(null);

    //Toda vez que ocorrer o evento de resize, esse useEffect sera chamado.
    useEffect(() =>{

        //Funcao para verificar a tela.
        const isMatch = () =>{
            //O matchmedia retorna um json, uma das cheves dele e o matches.
            //Se a tela estiver de acordo com a mediaquerie passa, entao a chave matches tem valor true.
            //Senao, tem o valor false.
            const { matches } = window.matchMedia(mediaQuery);
            SetMatch(matches);
        }
        //Chamando a funcao para ter um valor inicial.
        isMatch();
        //Adicionando essa funcao a um listener no event de resize da tela
        window.addEventListener('resize', isMatch);

        //No final, e preciso remover esse listener para nao acumalar varios listeners.
        //Esse final sera quando o component que usa o hook nao esta mais sendo renderizado.
        return () => {
            window.removeEventListener('resize', isMatch)
        }

    }, [mediaQuery])

    return match;

}
export default useMedia