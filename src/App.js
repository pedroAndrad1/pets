import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginRouting from './pages/Login/LoginRouting';
import PageRoot from './components/PageRoot';
import { UserStorage } from './UserContext';
import RouteConta from './utils/protected-route/RouteConta';
import User from './pages/user';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <PageRoot>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" component={LoginRouting} />
                            <RouteConta path='/conta' component={User}/>
                        </Switch>
                    </PageRoot>
                </UserStorage>
            </BrowserRouter>
        </>
    );
}

export default App;
