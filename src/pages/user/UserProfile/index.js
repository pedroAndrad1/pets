import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../../components/Container';
import Feed from '../../../components/Feed';
import Title from '../../../components/Title';

const UserProfile = () => {

    const {userName} = useParams();

    return(
        <Container>
            <Title>{userName}</Title>
            <Feed userName={userName}/>
        </Container>
    )
}
export default UserProfile;