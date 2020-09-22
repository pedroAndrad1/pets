import React, { useEffect, useState } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import { NoPhotos } from './styles';

const Graphs = ({ data }) => {

    const [acessos, setAcessos] = useState(null);
    const [graphContent, setGraphContent] = useState(null);
    const [noPhotos, setNoPhotos] = useState(false);

    useEffect(() => {

        //Caso nao seja, ira gerar um NullPointer no reduce.
        data.lenght > 0 ?
            setAcessos(
                //Mapeando todos os acessos de cada photo em um array de Numbers.
                data.map(({ acessos }) => {
                    return Number(acessos)
                })
                    //Usando o reduce para somar todos esses valores. Ele percorre todo o array. O primeiro parametro
                    //e o numero anterior da iteracao e o segundo e o atual, so preciso soma-los.
                    .reduce((a, b) => a + b)
            )
            :
            setNoPhotos(true)

    }, [data])


    return (
        <>
            {noPhotos && <NoPhotos>Poste fotos para ver seus status.</NoPhotos>}
        </>
    )

}
export default Graphs; 