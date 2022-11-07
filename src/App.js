import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sweets from './app/layouts/Sweets'
import Login from './app/layouts/Login';
import Cart from './app/layouts/Cart';

function App() {
  return (<>
    <div className="container">
      <Switch>
        <Route path='/goods/:goodId?' render={(props) => (<Sweets {...props} />)} />
        <Route path='/login/:type?' render={(props) => <Login {...props} />} />
        <Route path='/cart' render={(props) => <Cart {...props} />} />
      </Switch>
    </div>
  </>);
}

export default App;
