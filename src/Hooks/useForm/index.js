import { useState } from 'react';

const validations = {
    email: {
        //Regex para validadar email
        rule: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email inválido'
    },
    password: {
        rule: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: 'A senha deve ter pelo menos 8 caracteres, com no mínimo uma letra e um número'
    },
    number: {
        rule: /^\d+$/,
        message: 'Utilize números apenas.',
    }
}

/**Hook para formulario */
function useForm(validation){
    

    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    const onChange = ({ target }) => {
        //Para revalidar caso o usuario conserte o erro. Assim, a mensagem de erro nao sai so quando ele sai do campo
        if (error) validate(target.value)

        setValue(target.value)
    }

    //Valida o campo
    const validate = (value) => {
        //Por padrao, o campo vai ser required.
        //Se o campor for vazio, esse sera o erro.
        if (value.length === 0) {
            setError('Insira um valor');
        } else {
            //Se nao tiver validation, nao tem o que validar
            if (!validation){
                setError(null)
                return true;
            }

            //Se haver a validation na lista de validation, ela e aplicada.
            //Caso nao passe na validacao, o retorno sera false.
            if (validations[validation] && !validations[validation].rule.test(value)) {
                //Setando o erro.
                setError(validations[validation].message);
            } else {
                //Sem erro
                setError(null)
                return true;
            }
            
        }


    }


    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        //evento de saida do campo, lindo.
        onBlur: () => validate(value),
        error
    }
}
export default useForm;