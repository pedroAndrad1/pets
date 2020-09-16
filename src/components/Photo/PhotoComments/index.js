import React, { useContext, useState } from 'react';
import { UserContext } from '../../../UserContext';
import FormComment from './FormComment';

const PhotoComments = ({ photoComments, photoId }) => {

    const { login } = useContext(UserContext)
    const [comments, setComments] = useState(() => photoComments)

    return (
        <>
            <ul>
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
            </ul>
            {
                login && <FormComment setComments={setComments} photoId= {photoId}/>
            }
        </>
    )
}
export default PhotoComments;