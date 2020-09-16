import React from 'react';
import useForm from '../../../../hooks/useForm';
import Input from '../../../Input';
import { ReactComponent as EnviarIcon } from '../../../../assets/enviar.svg';
import API from '../../../../API';
import { CommentArea, SubmitButton } from './styles';

const FormComment = ({ setComments, photoId }) => {

    const commentInput = useForm();

    const handleSubmit = async event => {
        event.preventDefault();

        //checando se ha algum comentario
        if(commentInput.validate()){
            const token = window.localStorage.getItem('token');
            //A API espera o comment em forma de obj
            const comment = commentInput.value;
            console.log(comment);

            await API.COMMENT_POST(photoId, {comment}, token )
                .then(res => {
                    //limpando o formulario
                    commentInput.setValue('');
                    /*
                        Renderizando o comment. E possivel passar um callback para setValue de um 
                        useState. O parametro da function e o valor atualo do state.
                    */
                    setComments((comments) => [...comments, res]);
                })
                .catch(e => console.log(e.message))
        }
    }


    return (
        <CommentArea onSubmit={handleSubmit}>
            <Input
                as='textarea'
                label='Comente aqui'
                name='comment'
                {...commentInput}
                noLabel
                noError
                placeholder='Comente aqui'
                />
            <SubmitButton>
                <EnviarIcon />
            </SubmitButton>
        </CommentArea>
    )

}
export default FormComment;