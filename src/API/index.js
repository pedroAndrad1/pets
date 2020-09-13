const URL = 'https://dogsapi.origamid.dev/json'

//Retorna um token para um user
const TOKEN_POST = (username, password) => {

    return fetch(`${URL}/jwt-auth/v1/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(async resposta => {
            if (resposta.ok) {
                const json = await resposta.json();
                return json;
            }
            else {
                const json = await resposta.json();
                console.log(json)
                throw Error('Nome de usuário desconhecido. Verifique novamente ou tente seu endereço de e-mail.');
            }
        })
}


//Retorna um user
const GET_USER = (token) => {

    return fetch(`${URL}/api/user`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        },
    })
        .then(async resposta => {

            const json = await resposta.json();

            if (resposta.ok) {
                return json;
            }
            else {
                console.log(json)
                throw Error(json.message);
            }
        })
}

//Valida o token
const TOKEN_VALIDATE_POST = token => {

    return fetch(`${URL}/jwt-auth/v1/token/validate`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }).then(res => {
        if (res.ok) {
            return true;
        } else {
            return false;
        }
    })
}

//Cadastra um user
const USER_POST = (username, email, password) => {

    return fetch(`${URL}/api/user`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
        .then(async resposta => {
            const json = await resposta.json()

            if (resposta.ok) {
                console.log(json);
                return json;
            } else {
                console.log(json);
                throw Error(json.message)
            }
        })
}

//Cadastra um user
const PHOTO_POST =async (formData, token) => {

    return await fetch(`${URL}/api/photo`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
        },
        body: formData
    })
        .then(async resposta => {
            const json = await resposta.json()
            console.log(json);

            if (!resposta.ok) {
                throw Error(json.message);
            }
        })
}

//Pega as photos
const PHOTOS_GET = async ({ page, total, user }) => {

    return await fetch(`${URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`, {
        options: {
            method: 'GET',
            /*Para a foto poder aparecer logo dps de ser postada. Pois sera necessario uma nova consulta, 
            ja que o resultado dessa nao estara salvo em cache */
            cache: 'no-store', 
        },
    })
    .then( async res => {
        const json = await res.json();
        console.log(json);
        return json;
    })
    .catch(e =>  {
        //throw Error('Deu ruim nas photos')
        throw Error(e.message);
    })
    

}

export default {
    TOKEN_POST,
    GET_USER,
    TOKEN_VALIDATE_POST,
    USER_POST,
    PHOTO_POST,
    PHOTOS_GET
}