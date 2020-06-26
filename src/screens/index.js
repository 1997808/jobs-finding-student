import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import PublicContainer from './public'
import UserContainer from './user'
import EmployerContainer from './employer'
import NoMatch from './site/user/layout/NoMatch'
import PrivateRoute from '../components/router/private';
import PublicRoute from '../components/router/public';

export default function AppContainer() {
  return (
    <Router>
      <Switch>
        <Route path="">
          <UserContainer />
        </Route>
        <Route path="e">
          <EmployerContainer />
        </Route>
        <Route exact path="u">
          <PublicContainer />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}


// import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// import SignIn from './components/SignIn';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

// class App extends Component {

//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <PublicRoute restricted={false} component={Home} path="/" exact />
//           <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
//           <PrivateRoute component={Dashboard} path="/dashboard" exact />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

