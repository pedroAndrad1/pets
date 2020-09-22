import React, { useEffect, useState } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import { Acessos, GraphsSection, NoPhotos, Graph } from './styles';

const Graphs = ({ data }) => {

    const [acessos, setAcessos] = useState(null);
    const [graphContent, setGraphContent] = useState(null);
    const [noPhotos, setNoPhotos] = useState(false);

    useEffect(() => {

        const somaAcessos = () => {
            //Mapeando todos os acessos de cada photo em um array de Numbers.
            return data.map(({ acessos }) => {
                return Number(acessos)
            })
                //Usando o reduce para somar todos esses valores. Ele percorre todo o array. O primeiro parametro
                //e o numero anterior da iteracao e o segundo e o atual, so preciso soma-los.
                .reduce((a, b) => a + b)
        }
        //Retorna um array de objetos que serao o content para fazer os graphs
        const criaGraphContent = () => {
            //Criando um array de objetos para ser o content dos graphs.
            return data.map(photo => {
                //E preciso parsear os acessos para number, atualmente sao uma string
                return {
                    x: photo.title,
                    y: Number(photo.acessos)
                }
            })
        }

        if (data.length > 0) {
            setAcessos(somaAcessos());
            setGraphContent(criaGraphContent());
        } else {
            setNoPhotos(true)
        }



    }, [data])


    return (
        <>
            {noPhotos && <NoPhotos>Poste fotos para ver seus status.</NoPhotos>}
            <GraphsSection className='animeLeft'>
                <Acessos>Total de acessos: {acessos}</Acessos>
                <Graph>
                    <VictoryPie
                        data={graphContent}
                        innerRadius={50} //Para ter um circulo interno
                        padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                        padAngle={({ datum }) => datum.y} //Para ter uma margem entre os pedacos do grafico
                        animate
                        style={{
                            data: {
                                fillOpacity: 0.9,
                                stroke: '#fff',
                                strokeWidth: 2,
                            },
                            labels: {
                                fontSize: 14,
                                fill: '#333',
                            },
                        }}
                    />
                </Graph>
                <Graph>
                    <VictoryChart>
                        <VictoryBar
                            alignment="start"
                            data={graphContent}
                            animate
                        />
                    </VictoryChart>
                </Graph>
            </GraphsSection>
        </>
    )

}
export default Graphs; 