import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../../components/Container';
import Feed from '../../components/Feed';
import UserStats from './UserStats';
import UserPhotoPost from './UserPhotoPost';
import UserHeader from '../../components/UserHeader';


const userRouting = () => {
  
    /*Se usar o BrowserRouter englobando o switch, o roteamento so vai funcionar quando carregar a pagina.
      Ou seja, quando clicar nos botoes, o roteamento nao vai funcionar. Apenas para o home.  
    */
    return (
        <Container>
            <UserHeader />
            <Switch>
                <Route path='/conta' exact component={Feed}/>
                <Route path='/conta/estatisticas' component={UserStats} />
                <Route path='/conta/postar' component={UserPhotoPost} />
            </Switch>
        </Container>
    )

}
export default userRouting;
