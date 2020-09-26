import React, { useState } from 'react';
import NavTabs from './components/Navbar/Navbar.component';
import Login from './components/Login/Login.component';
import './App.css';

function App() {
  localStorage.setItem("email", 'user@gmail.com');
  localStorage.setItem("password", "hello");
  localStorage.setItem("loggedIn", "false");
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (email, password) => {
    if(localStorage.getItem("newPassword")) {
      if(localStorage.getItem("email") === email && localStorage.getItem("newPassword") === password) {
        setLoggedIn(true);
        setPassword(password);
      }
    } else {
      if(localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
        setLoggedIn(true);
        setPassword(password);
      }
    }
  }

  const handlePasswordChange = (passwordChange) => {
    if(passwordChange !== "") {
      localStorage.setItem("newPassword", passwordChange);
    }
  }

  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div className="App">
        {
          loggedIn
          ? <NavTabs password={password} handleLogout={handleLogout} handlePasswordChange={handlePasswordChange} />
          : <Login handleLogin={handleLogin} />
        }
    </div>
  );
}

export default App;
