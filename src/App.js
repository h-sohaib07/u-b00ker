import React from 'react';
import Signup from './components/signup'
import Login from './components/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css'
function App() {
  return (
  <Router>
    <React.Fragment>
    <Switch>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </React.Fragment>
    </Router>
  );
}

export default App;
