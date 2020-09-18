import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Attributes, Author, Details, ModalContainer, Views } from './styles';
import Title from '../../Title';
import PhotoComments from '../PhotoComments';
import { UserContext } from '../../../UserContext';
import DeleteButton from '../DeleteButton';
import Image from '../../Image';

const PhotoContent = ({ photoData, page }) => {

    const { photo, comments } = photoData;
    const { data } = useContext(UserContext);

    return (
        <ModalContainer page={page}>
            <Image page={page} src={photo.src} alt={photo.alt} />
            <Details page={page}>
                <Author>
                    {   
                        //O user esta logada e tbm e o author da photo?
                        data && (data.username === photo.author) ?
                            //Mostra o botao de delete
                            <DeleteButton id={photo.id}/>
                            :
                            //Caso contrario, mostra o "@" do author
                            <Link to={`/perfil/${photo.author}`} >@{photo.author}</Link>
                    }
                    <Views>{photo.acessos}</Views>
                </Author>
                <Title>
                    <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                </Title>
                <Attributes page={page}>
                    <li>{photo.peso} Kg</li>
                     { photo.idade > 1? 
                        <li>{photo.idade} anos</li> 
                        : 
                        <li>{photo.idade} ano </li> 
                    }
                </Attributes>
            </Details>
            <PhotoComments photoComments = {comments} photoId = {photo.id} page={page} />
        </ModalContainer>
    )

}
export default PhotoContent;