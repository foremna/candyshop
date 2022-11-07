import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

import Header from './app/components/ui/Header';
import Greeting from './app/components/ui/Greeting';

import Main from './app/layouts/Main';
import Sweets from './app/layouts/Sweets'
import Login from './app/layouts/Login';
import Cart from './app/layouts/Cart';
import NotFound from './app/layouts/NotFound';

function App() {
  return (<>
    <Greeting />
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact render={(props) => (<Main {...props} />)} />
        <Route path='/goods/:goodId?' render={(props) => (<Sweets {...props} />)} />
        <Route path='/login/:type?' render={(props) => <Login {...props} />} />
        <Route path='/cart' render={(props) => <Cart {...props} />} />
        <Route path='/404' render={(props) => <NotFound {...props} />} />
        <Redirect to='/404' />
      </Switch>
    </div>
  </>);
}

export default App;
