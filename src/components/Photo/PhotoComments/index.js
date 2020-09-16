import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../../UserContext';
import FormComment from './FormComment';
import { CommentsSection } from './styles';

const PhotoComments = ({ photoComments, photoId }) => {

    const { login } = useContext(UserContext)
    const [comments, setComments] = useState(() => photoComments)
    const commentsSection = useRef(null);

    //scrolla para o fim do CommentsSection quando e adicionado um comments
    useEffect(() => {
        //A quantidade de scroll e igual a altura do scroll
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
      }, [comments]);

    return (
        <>
            <CommentsSection ref={commentsSection}>
                {
                    comments && comments.map(comment => {
                        return (
                            <li key={comment.comment_ID}>
                                <b>{comment.comment_author}: </b>
                                <span>{comment.comment_content}</span>
                            </li>
                        )
                    })
                }
            </CommentsSection>
            {
                login && <FormComment setComments={setComments} photoId= {photoId}/>
            }
        </>
    )
}
export default PhotoComments;