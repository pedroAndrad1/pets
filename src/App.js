import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginRouting from './pages/Login/LoginRouting';
import PageRoot from './components/PageRoot';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <PageRoot>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login"  component={LoginRouting} />
                    </Switch>
                </PageRoot>
            </BrowserRouter>
        </>
    );
}

export default App;
