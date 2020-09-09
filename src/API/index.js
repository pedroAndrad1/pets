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
                throw Error('Usuário ou senha inválidos');
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
            if (resposta.ok) {
                const json = await resposta.json();
                return json;
            }
            else {
                const json = await resposta.json();
                console.log(json)
                throw Error('Não foi possível encontrar o user ');
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
            const res = await resposta.json()
            console.log(res);
        })
        .catch(e => {
            throw Error('Usuário já existe');
        })

}

export default {
    TOKEN_POST,
    GET_USER,
    TOKEN_VALIDATE_POST,
    USER_POST
}