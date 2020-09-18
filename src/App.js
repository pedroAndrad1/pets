import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginRouting from './pages/Login/LoginRouting';
import PageRoot from './components/PageRoot';
import { UserStorage } from './UserContext';
import RouteConta from './utils/protected-route/RouteConta';
import userRouting from './pages/user/userRouting';
import Photo from './pages/Photo';


const App = () => {

    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <PageRoot>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" component={LoginRouting} />
                            <RouteConta path='/conta' component={userRouting}/>
                            <Route path='/foto/:id' component={Photo} />
                        </Switch>
                    </PageRoot>
                </UserStorage>
            </BrowserRouter>
        </>
    );
}

export default App;
