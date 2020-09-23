import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginRouting from './pages/Login/LoginRouting';
import PageRoot from './components/PageRoot';
import { UserStorage } from './UserContext';
import RouteConta from './utils/protected-route/RouteConta';
import userRouting from './pages/user/userRouting';
import Photo from './pages/Photo';
import UserProfile from './pages/user/UserProfile';
import Page404 from './pages/Page404';
import ScrollToTop from './utils/ScrollTop';


const App = () => {

    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <PageRoot>
                        <ScrollToTop />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" component={LoginRouting} />
                            <RouteConta path='/conta' component={userRouting} />
                            <Route path='/foto/:id' component={Photo} />
                            <Route path='/perfil/:userName' component={UserProfile} />
                            <Route path='*' component={Page404} />
                        </Switch>
                    </PageRoot>
                </UserStorage>
            </BrowserRouter>
        </>
    );
}

export default App;
