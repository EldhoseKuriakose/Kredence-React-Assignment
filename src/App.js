import React, { useState } from 'react';
import NavTabs from './components/Navbar/Navbar.component';
import Login from './components/Login/Login.component';
import './App.css';

function App() {
  localStorage.setItem("email", 'user@gmail.com');
  localStorage.setItem("password", "hello@123");
  
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if(localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
      setLoggedIn(true);
    }
  }

  return (
    <div className="App">
        {
          loggedIn
          ? <NavTabs />
          : <Login handleLogin={handleLogin} />
        }
    </div>
  );
}

export default App;
