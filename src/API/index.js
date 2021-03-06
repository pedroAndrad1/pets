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
                throw Error('Nome de usuário desconhecido. Verifique novamente ou tente seu endereço de e-mail.');
            }
        })
}


//Retorna um user
const GET_USER = async (token) => {

    return await fetch(`${URL}/api/user`, {
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
                throw Error(json.message);
            }
        })
}

//Valida o token
const TOKEN_VALIDATE_POST = async token => {

    return await fetch(`${URL}/jwt-auth/v1/token/validate`, {
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
                return json;
            } else {
                throw Error(json.message)
            }
        })
}

//Cadastra um user
const PHOTO_POST = async (formData, token) => {

    return await fetch(`${URL}/api/photo`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
        },
        body: formData
    })
        .then(async resposta => {
            const json = await resposta.json()

            if (!resposta.ok) {
                throw Error(json.message);
            }
        })
}

//Pega as photos
const PHOTOS_GET = async ({ page, total, user }) => {

    return await fetch(`${URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`, {
        method: 'GET',
        /*Para a foto poder aparecer logo dps de ser postada. Pois sera necessario uma nova consulta, 
        ja que o resultado dessa nao estara salvo em cache */
        cache: 'no-store',
    })
        .then(async res => {
            const json = await res.json();
            if (res.ok) {
                return json;
            } else {

                throw new Error('Não foi possível carregar as photos :(');
            }
        })

}

//Pega uma photo especifica
const PHOTO_GET = async id => {

    return await fetch(`${URL}/api/photo/${id}`, {
        method: 'GET',
        cache: 'no-store',
    })
        .then(async res => {

            const json = await res.json();
        
            if (res.ok) {
                return json;
            } else {
                throw new Error(json.message);
            }
        })

}

//Posta um comentario
const COMMENT_POST = async (id, comment) => {

    return await fetch(`${URL}/api/comment/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
        body: JSON.stringify(comment),

    })
        .then(async res => {

            const json = await res.json();
            // 

            if (res.ok) {
                return json;
            } else {
                throw new Error(json.message);
            }
        })

}

//Deleta uma photo
const PHOTO_DELETE = async id => {
    
    return await fetch(`${URL}/api/photo/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
    })
        .then(async res => {

            const json = await res.json();

            if (res.ok) {
                return json;
            } else {
                throw new Error(json.message);
            }
        })
}

//Envia um email para resetar senha
const PASSWORD_LOST = async (login, url) => {
    return await fetch(`${URL}/api/password/lost`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({login, url})
    })
    .then(async res => {
        const json = await res.json();
        
        if(res.ok){
            return json;
        }else{
            throw new Error(json.message);
        }
    })
}

//Reseta senha
const PASSWORD_RESET = async (login, key, password) => {
    return await fetch(`${URL}/api/password/reset`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({login, key, password})
    })
    .then(async res => {
        const json = await res.json();
        
        
        if(res.ok){
            return json;
        }else{
            throw new Error(json.message);
        }
    })
}

//Pega as estatisticas de um user
const STATS_GET = async () => {
   
    return await fetch(`${URL}/api/stats`,{
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
    })
    .then(async res => {
        const json = await res.json();
        
        
        if(res.ok){
            return json;
        }else{
            throw new Error(json.message);
        }
    })
  }
export default {
    TOKEN_POST,
    GET_USER,
    TOKEN_VALIDATE_POST,
    USER_POST,
    PHOTO_POST,
    PHOTOS_GET,
    PHOTO_GET,
    COMMENT_POST,
    PHOTO_DELETE,
    PASSWORD_LOST,
    PASSWORD_RESET,
    STATS_GET
}