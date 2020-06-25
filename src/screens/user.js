import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import Home from './site/Index'
import FindJob from './site/FindJob'
// import Finding from './site/Finding'
// import Filter from './site/Filter'
// import Sort from './site/Sort'
import JobDetail from './site/JobDetail'

// import Recruiting from './site/user/Recruiting'
// import Following from './site/user/Following'
// import Notification from './site/user/Notification'
// import Account from './site/user/Account'
// import Info from './site/user/Info'
// import AddComment from './site/user/AddComment'

import Header from './site/user/layout/Header'
import SideBar from './site/user/layout/SideBar'
import Bar from './site/user/layout/Bar'
import Footer from './site/user/layout/Footer'

export default function UserContainer() {
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
      </Switch>

      <Bar />
      <Footer />
    </Router>
  )
}