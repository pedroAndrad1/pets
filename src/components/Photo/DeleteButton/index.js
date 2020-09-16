import React, { useState } from 'react';
import API from '../../../API';
import { DelButton } from './styles';

const DeleteButton = ({ id }) => {

    const [loading, setLoading] = useState(false);

    const handleClick = async () => {

        const confirm = window.confirm('Tem certeza que deseja deletar?');

        if (confirm) {

            setLoading(true);

            await API.PHOTO_DELETE(id)
                .then(res => {
                    //Recarregando a pagina
                    window.location.reload();
                })
                .catch(e => console.log(e.message))
                .finally(setLoading(false))
        }
    }

    return (

        <>
            {
                loading?
                    <DelButton disabled>
                        Deletando..
                    </DelButton>
                    :
                    <DelButton onClick={handleClick}>
                        Deletar
                    </DelButton>
            }
        </>

    )

}
export default DeleteButton;