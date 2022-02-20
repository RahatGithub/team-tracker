import './App.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';


export const TeamContext = createContext();

function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
      const url = 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=Spain';
      fetch(url)
      .then(res => res.json())
      .then(data => setTeams(data.teams))
  }, [])

  return (
    <div>
        <Router>
        <Switch>
          <TeamContext.Provider value={teams}>
            <Route exact path="/"> <Home></Home> </Route>
            <Route path="/team/:id"> <TeamDetails></TeamDetails> </Route>
          </TeamContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
