import React from 'react';
import { Visualizacoes, Item } from './styles';

const FeedItem = ( {photo} ) =>{

    return(
        <Item>
            <img src={photo.src} alt={photo.title}/>
            <Visualizacoes>{photo.acessos}</Visualizacoes>
        </Item>
    )
}
export default FeedItem;