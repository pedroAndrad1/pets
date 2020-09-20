import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API';
import Container from '../../components/Container';
import PhotoContent from '../../components/Photo/PhotoContent';
import Head from '../../utils/Head';
import Loading from '../../utils/Loading';
import Page404 from '../Page404';

const Photo = () => {
    const {id} = useParams(null);
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetch = async () => {
            
            setLoading(true);
            
           await API.PHOTO_GET(id)
                .then( res => {
                    setPhoto(res);
                })
                .catch( e => {
                   setError(<Page404 />)
                })
            
            setLoading(false);
        }

        //Pra evitar fazer varios fetchs seguidos
        if(photo === null){
            fetch();
        }

    }, [photo, id])



    return(
        <Container>
             {photo && <Head title={photo.photo.title}/>}
             {error && error}
             {loading && <Loading />}
             {photo && <PhotoContent page photoData={photo}/>}
        </Container>
    )
}
export default Photo;