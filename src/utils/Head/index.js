import React, { useEffect } from 'react';

//Muda o titulo da pagina de acordo com o conteudo

const Head = ({ title, description }) => {

    useEffect(() => {
        document.title = 'Dogs | ' + title;
        //Pegando a tag de no meta com o name de description e alterando o content
        document
            .querySelector("meta[name='description']")
            .setAttribute('content', description || '');
    }, [title, description]);

    return <></>;
};

export default Head;
