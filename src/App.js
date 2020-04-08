import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';

const HatsPage = (props) => {
  return (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)
}

function App(props) {
  return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
  );
}

export default App;
