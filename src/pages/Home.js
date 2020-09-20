import React from 'react';
import Container from '../components/Container';
import Feed from '../components/Feed';
import Head from '../utils/Head'

function Home() {
  return (
    <Container>
      <Head title='Home'/>
      <Feed home/>
    </Container>
  );
}

export default Home;
