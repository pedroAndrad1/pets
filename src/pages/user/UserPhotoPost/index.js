import React, { useContext, useState } from 'react';
import { PostContainer, Preview } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm'
import { UserContext } from '../../../UserContext';
import Error from '../../../utils/Error';

const UserPhotoPost = () => {

    const nome = useForm();
    const idade = useForm('number');
    const peso = useForm('number');
    const [img, setImg] = useState({})
    const [error, setError] = useState(null);
    const { loading, photoPost } = useContext(UserContext);


    const handleSubmit = async event => {
        event.preventDefault();

        //Validando form
        if (nome.validate() && idade.validate() && peso.validate()) {
            //Para poder submeter a foto e preciso um FormData.
            //Nao vai dar pra mandar por json

            const formData = new FormData();
            //E preciso dar uma chave para cada append
            formData.append('nome', nome.value);
            formData.append('idade', idade.value);
            formData.append('peso', peso.value);
            //Passarei o raw pq e esse que contem o arquivo
            formData.append('img', img.raw);

            //Pegando o token para a autenticacao
            const token = window.localStorage.getItem('token');

            //Fazendo o POST
            const resposta = await photoPost(formData, token);

            setError(resposta);

        }

    }
    //Lida com as mudancas no arquivo de imagem do input
    const handleImg = async ({ target }) => {
        //A photo que sera enviada ficara na chave raw e preview na chave preview
        //Para podermos exibir a img do preview, precisa ser usada a funcao  URL.createObjectURL()
        setImg(
            {
                raw: target.files[0],
                preview: URL.createObjectURL(target.files[0])
            }
        )
    }

    return (
        <PostContainer className='animeLeft'>
           
                <form onSubmit={handleSubmit} >
                    <Input label='Nome' {...nome} />
                    <Input label='Idade' {...idade} />
                    <Input label='Peso' {...peso} />
                    <input type='file' name='img' id='img' style={{ marginBottom: '2rem' }} onChange={handleImg} />
                    {
                        loading ? <Button disabled>Postando...</Button> : <Button>Postar</Button>
                    }
                    {
                        error && <Error>{error}</Error>
                    }
                </form>
            
            {
                img.preview && <Preview img={img.preview} />
            }
        </PostContainer>
    )
}
export default UserPhotoPost;