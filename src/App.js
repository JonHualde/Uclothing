import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';

function App(props) {
  return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/collections' component={ShopPage} />
      </Switch>
  );
}

export default App;
