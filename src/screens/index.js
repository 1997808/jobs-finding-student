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

export default function AppContainer() {
  return (
    <Router>
      <Switch>
        <Route path="u">
          <UserContainer />
        </Route>
        <Route path="e">
          <EmployerContainer />
        </Route>
        <Route exact path="">
          <PublicContainer />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}


