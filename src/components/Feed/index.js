import React, { useEffect, useState } from 'react';
import FeedItem from './FeedItem';
import { FeedContainer } from './styles';
import Error from '../../utils/Error';
import API from '../../API';
import PhotoModal from './PhotoModal';


const Feed = () => {

    const [photos, setPhotos] = useState(null)
    const [error, setError] = useState(null)
    /*Estou fazendo o loading aqui pq estava tendo problemas de loop infinito no useEfect 
      com uma funcao getPhotos do UserContext que usa a funcao PHOTOS_GET. Entao vou fazer a logica dela aqui.
    */
    const [loading, setLoading] = useState(false);
    const [modalPhoto, setModalPhoto] = useState(null);



    useEffect(() => {

        const fetchPhotos = async () => {

            setLoading(true)

            await API.PHOTOS_GET({ page: 1, total: 6, user: 0 })
                .then(res => setPhotos(res))
                .catch(e => setError(e.message))
                .finally(setLoading(false));
        }

        fetchPhotos();

    }, [])

    return (
        <>
            {
                modalPhoto && <PhotoModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
            }
            {
                loading && <p>Loading...</p>
            }
            {
                photos &&
                    <FeedContainer className='animeLeft'>
                        {
                            (!loading && photos) &&
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
export default Feed;