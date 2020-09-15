import React from 'react';
import { Visualizacoes, Item } from './styles';

const FeedItem = ( {photo, setModalPhoto} ) =>{

    //Abre o modal da photo
    const handleClick = () => {
        setModalPhoto(photo);
    }

    return(
        <Item onClick={handleClick}>
            <img src={photo.src} alt={photo.title}/>
            <Visualizacoes>{photo.acessos}</Visualizacoes>
        </Item>
    )
}
export default FeedItem;