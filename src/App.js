import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
   <>

   <Router>
      <Switch>
        <Route exact path="/">
          <Body />

        </Route>

   <Route path="/Navbar">
     <Navbar />
   </Route>

   </Switch>
   </Router>
   </>
  );
}

export default App;
