import React from 'react';
import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import MyCourses from './Components/MyCourses';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path = '/Home'>
          <Home />
        </Route>
        <Route path = '/MyCourses'>
          <MyCourses />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
