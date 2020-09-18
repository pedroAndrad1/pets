import React, { useState } from 'react';
import { Img, Skeleton, Wrapper } from './styles';


//Antes de uma img aparecer, um skeleton dela ocupara o lugar.

const Image = ({modalPhoto, alt, page, ...props }) => {

    const [skeleton, setSkeleton] = useState(true);

    /**Seta a opacity da imagem para 1 e desativa o skeleton.
     * 
     * Obs: So e chamado quando a img e carregada totalmente.
    */
    const handleLoad = ({target}) => {
        target.style.opacity = 1;
        setSkeleton(false);
    }

    return(
        <Wrapper modalPhoto={modalPhoto}>
            { skeleton && <Skeleton />}
            {/**O TSLint reclama se nao passar a props assim */}
            <Img page={page} alt={alt} {...props} onLoad={handleLoad}/>
        </Wrapper>
    )
}
export default Image;