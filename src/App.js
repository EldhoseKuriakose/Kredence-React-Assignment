import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavTabs from './components/Navbar/Navbar.component';
import Login from './components/Login/Login.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={NavTabs} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
