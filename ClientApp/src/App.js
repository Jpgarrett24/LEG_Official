import React, { useEffect, useState } from 'react';
import { Router } from "@reach/router";
import './custom.css'
import Landing from './views/Landing';
import Home from './views/Home';
import axios from 'axios';


const App = (props) => {
  const [allUsers, setAllUsers] = useState(null);
  useEffect(() => {
    axios.get("https://api.sleeper.app/v1/league/551962981649379328/users")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Router>
        <Landing path="/" />
        <Home path="/home" allUsers={allUsers} />
      </Router>
    </>
  );
}

export default App;
