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
import SignIn from './site/SignIn'
import SignUp from './site/SignUp'

import Header from './site/user/layout/Header'
import SideBar from './site/user/layout/SideBar'
import Bar from './site/user/layout/Bar'
import Footer from './site/user/layout/Footer'
import NoMatch from './site/user/layout/NoMatch'

export default function PublicContainer() {
  return (
    <Router>
      <Header />
      <SideBar />
      <div class="container">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/findjob" component={FindJob} />
            <Route path="/jobdetail" component={JobDetail} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
      <Bar />
      <Footer />
    </Router>
  )
}