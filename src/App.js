import logo from './logo.svg';
import './App.css';
import React from 'react';
import './index.css';
import Home from './Components/Home';
import List from './Components/List';
import Contact from './Components/Contact';
import Foot from "./Components/Foot";
import Head from './Components/Head';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StudentDetail from './Components/StudentDetail';


function App() {
  return (
    <Router>
    <Head/>
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>

      <Route exact path="/List">
      <List/>
     
      </Route>
      <Route exact path="/contact">
      <Contact/>
     
      </Route>
      <Route exact path="/studentdetails/:name/:id/:cgpa">
      <StudentDetail/>
     
      </Route>
    </Switch>

    <Foot/>
    </Router>
  );
}

export default App;
