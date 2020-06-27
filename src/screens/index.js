import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import UserContainer from './user'
import EmployerContainer from './employer'

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
      </Switch>
    </Router>
  )
}



