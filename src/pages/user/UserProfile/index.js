import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../../components/Container';
import Feed from '../../../components/Feed';
import Title from '../../../components/Title';
import Head from '../../../utils/Head';

const UserProfile = () => {

    const {userName} = useParams();

    return(
        <Container>
            <Head title={userName}/>
            <Title>{userName}</Title>
            <Feed userName={userName}/>
        </Container>
    )
}
export default UserProfile;