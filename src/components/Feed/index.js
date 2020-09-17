import React, { useEffect, useState } from 'react';
import PhotoModal from './PhotoModal';
import FeedPhotos from './FeedPhotos';
import { Fim } from './styles';


const Feed = ({ home }) => {

    const [modalPhoto, setModalPhoto] = useState(null);
    //const [page, setPage] = useState(1);
    //Lista de paginas
    const [pages, setPages] = useState([1]);
    const [thereIsAPage, setThereIsAPage] = useState(false);
    //Indica se ha mais photos para serem carregadas
    const [thereIsMore, setThereIsMore] = useState(true);

    useEffect(() => {
        //Vou usar pra dar um tempo antes de poder renderizar mais photos
        let wait = false

        const infiniteScroll = () => {
            if (thereIsMore) {
                //O quanto foi scrollados
                const scroll = window.scrollY;
                //A altura da pagina
                const height = document.body.offsetHeight - window.innerHeight;
                /* 
                    Se o scroll for maior que 75% da pagina e nao estiver em espera (wait=false),
                    entao pode carregar novas photos.
                 */
                if (scroll > height * .75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;
                    //Espera 500ms antes de poder carregar novas photos
                    setTimeout(() => wait = false, 500);
                }
            }
        }

        //Adicionando os listeners para o evento do scroll e de rolar do wheel do mouse
        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);

        return () => {
            //Removendo os listeners no dismount do component
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
        };


    }, [thereIsMore])

    return (
        <>
            {
                modalPhoto && <PhotoModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
            }
            {/**Eu nao queria fazer varias ul's diferentes. Porem, nao estava conseguindo encaixar as photos,
             * sempre ficavam espacos. Entenda cada ul como uma pagina.
            */}
            {pages.map((page) => (
                <FeedPhotos
                    key={page}
                    home={home}
                    page={page}
                    total={6}
                    setModalPhoto={setModalPhoto}
                    setThereIsMore={setThereIsMore}
                    setThereIsAPage={setThereIsAPage}
                />
            ))}
            {   
                !thereIsMore && !thereIsAPage?
                    <Fim> Não há postagens. Corre e compartilhe a fofura!</Fim>
                    :
                    (!thereIsMore && pages.length > 1)?
                        <Fim> Não há mais postagens :(</Fim>
                        :
                        null
            }

        </>
    )
}
export default Feed;