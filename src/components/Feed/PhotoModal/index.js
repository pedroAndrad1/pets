import React, { useEffect, useState } from 'react';
import API from '../../../API';
import Error from '../../../utils/Error';
import PhotoContent from '../../Photo/PhotoContent';
import { Modal } from './styles';


const PhotoModal = ( {photo, setModalPhoto} ) => {

    //const {loading, getPhoto} = useContext(UserContext);
    const [photoData, setPhotoData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    /** Mais uma vez tive problema de looping infinito e tive que quebrar o padrao de
     *  usar uma funcao do UserContext para realizar o fetch. Preciso pensar em uma
     *  nova abordagem.
     */

    useEffect( () => {

        console.log(photo.id)

        const fetch = async () => {
            
            setLoading(true);
            
           await API.PHOTO_GET(photo.id)
                .then( res => {
                    setPhotoData(res);
                })
                .catch( e => {
                   setError(e.message);
                })
            
            setLoading(false);
        }

        fetch();

    }, [photo])

    const handleOutsideClick = event => {

        //event.target => parte do todo que esta sendo clicada
        //event.currentTarget => todo que esta sendo clicado

        /**Quando ambos sao iguais, quer dizer que o user esta clicando na parte escura do modal 
         * que e o "fora" dele
         */

        if(event.target === event.currentTarget)
            setModalPhoto(null);
    }   


    return(
        <Modal onClick={handleOutsideClick}>
            {error && <Error>{error}</Error>}
            {loading && <p>Carregando . . .</p>}
            {photoData && <PhotoContent photoData={photoData}/>}
        </Modal>
    )
}
export default PhotoModal;