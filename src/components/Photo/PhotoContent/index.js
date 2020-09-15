import React from 'react';
import { Link } from 'react-router-dom';
import { Attributes, Author, Details, ModalContainer, Photo, Views } from './styles';
import Title from '../../Title';
import PhotoComments from '../PhotoComments';

const PhotoContent = ({ photoData }) => {

    const { photo, comments } = photoData;

    return (
        <ModalContainer>
            <Photo src={photo.src} alt={photo.alt} />
            <Details>
                <Author>
                    <Link to={`/perfil/${photo.author}`} >@{photo.author}</Link>
                    <Views>{photo.acessos}</Views>
                </Author>
                <Title>
                    <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                </Title>
                <Attributes>
                    <li>{photo.peso} Kg</li>
                     { photo > 1? 
                        <li>{photo.idade} anos</li> 
                        : 
                        <li>{photo.idade} ano </li> 
                    }
                </Attributes>
            </Details>
            <PhotoComments>
                Comentarios aqui
            </PhotoComments>
        </ModalContainer>
    )

}
export default PhotoContent;