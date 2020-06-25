import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import Home from './site/Index'
import FindJob from './site/FindJob'
import JobDetail from './site/JobDetail'

import Header from './site/user/layout/Header'
import SideBar from './site/user/layout/SideBar'
import Bar from './site/user/layout/Bar'
import Footer from './site/user/layout/Footer'
import NoMatch from './site/user/layout/NoMatch'

export default function EmployerContainer() {
  return (
    <Router>
      <Header />
      <SideBar />

      <Switch>
        <Route path="/jobdetail">
          <JobDetail />
        </Route>
        <Route path="/findjob">
          <FindJob />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

      <Bar />
      <Footer />
    </Router>
  )
}