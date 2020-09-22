import React, { useRef } from 'react';
import useForm from '../../../../Hooks/useForm';
import Input from '../../../Input';
import { ReactComponent as EnviarIcon } from '../../../../assets/enviar.svg';
import API from '../../../../API';
import { CommentArea, SubmitButton } from './styles';


const FormComment = ({ setComments, photoId, page }) => {
    
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const commentInput = useForm();

    const handleSubmit = async event => {
        event.preventDefault();

        //checando se ha algum comentario
        if(commentInput.validate()){
            //Desabilitando o button para nao acumular envios com clicks consecutivos
            buttonRef.current.disabled = true;

            //A API espera o comment em forma de obj
            const comment = commentInput.value;
            console.log(comment);

            await API.COMMENT_POST(photoId, {comment})
                .then(res => {
                    //limpando o formulario
                    commentInput.setValue('');
                    /*
                        Renderizando o comment. E possivel passar um callback para setValue de um 
                        useState. O parametro da function e o valor atualo do state.
                    */
                    setComments((comments) => [...comments, res]);
                    //Focando de volta no textArea
                    inputRef.current.focus();
                    
                })
                .catch(e => console.log(e.message))
                .finally(() =>  buttonRef.current.disabled = false )

        }
    }


    return (
        <CommentArea onSubmit={handleSubmit} page={page}>
            <Input
                as='textarea'
                label='Comente aqui'
                name='comment'
                {...commentInput}
                noLabel
                noError
                placeholder='Comente aqui'
                ref={inputRef}
                />
            <SubmitButton type='submit' ref={buttonRef}>
                <EnviarIcon />
            </SubmitButton>
        </CommentArea>
    )

}
export default FormComment;