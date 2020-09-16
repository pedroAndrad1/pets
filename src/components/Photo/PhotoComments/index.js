import React, { useContext, useState } from 'react';
import { UserContext } from '../../../UserContext';
import FormComment from './FormComment';
import { CommentsSection } from './styles';

const PhotoComments = ({ photoComments, photoId }) => {

    const { login } = useContext(UserContext)
    const [comments, setComments] = useState(() => photoComments)

    return (
        <>
            <CommentsSection>
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