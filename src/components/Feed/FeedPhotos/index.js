import React, { useContext, useEffect, useState } from 'react';
import API from '../../../API';
import { UserContext } from '../../../UserContext';
import Error from '../../../utils/Error';
import Loading from '../../../utils/Loading';
import FeedItem from '../FeedItem';
import { FeedContainer } from './styles';


const FeedPhotos = ({home, userName, page, total, setModalPhoto, setThereIsMore, setThereIsAPage}) => {

    const {data} = useContext(UserContext);
    const [photos, setPhotos] = useState([])
    const [error, setError] = useState(null)
    /*Estou fazendo o loading aqui pq estava tendo problemas de loop infinito no useEfect 
      com uma funcao getPhotos do UserContext que usa a funcao PHOTOS_GET. Entao vou fazer a logica dela aqui.
    */
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const fetchPhotos = async () => {
            //Se estiver no home, o id deve ser 0 para renderizar todas as photos
            //Caso contrario so deve renderizar as photos do user.
            let user;
            //Fiz um safe navigation pra so buscar o id se tiver data. Isso impede de ocorrer um NullPointer
            //Na situacao de eu tentar acessar um profile (home=false && userName="nome_do_user") sem estar logado.
            home? user = 0 : user = data?.id; 
            //O user pode ser tanto o id ou o userName. Se for passado um userName, entao
            //e pra pegar so as photos desse userName.
            if(userName) user = userName;

            await API.PHOTOS_GET({ page, total, user})
                .then(res => {
                    setPhotos( act => {
                        return act.concat(res);
                    })
                    //Se o numero de photos retornadas for menor que o total de photos buscadas,
                    //entao nao ha mais photos para buscar.
                    if(res.length < total){
                        setThereIsMore(false);
                    }
                    //Apenas para customizar a mensagem de nao tem mais postagens
                    if(res.length > 0){
                        setThereIsAPage(true);
                    }
                })
                .catch(e => setError(e.message))
                .finally(setLoading(false));
        }

        /*Fazer esse if evita que no carregamento da pagina, na home, esse fetch seja feito duas vezes.
          Pq ele sera feito no carregamento, onde o data sera null pois ainda nao foi validado o user e
          depois da validacao do user. Porque o valor de data tera sido modificado.
        */
        if(data != null || home || userName){
            fetchPhotos();
        }

    }, [home, data, page, total, setThereIsMore, setThereIsAPage, userName])

    return (
        <>
            {
                loading && <Loading />
            }
            {
                 (!loading && photos) &&
                 <FeedContainer className='animeLeft'>
                     {  
                         photos.map((photo) => {
                             return (<FeedItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)
                         })
                     }
                     {
                         error && <Error>{error}</Error>
                     }
                 </FeedContainer> 
            }
        </>
    )
}
export default FeedPhotos;