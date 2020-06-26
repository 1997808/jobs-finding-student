import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import Home from './site/Index'
import FindJob from './site/FindJob'
import Finding from './site/Finding'
import Filter from './site/Filter'
import Sort from './site/Sort'
import JobDetail from './site/JobDetail'

import Recruiting from './site/user/Recruiting'
import Following from './site/user/Following'
import Notification from './site/user/Notification'
import Account from './site/user/Account'
import Info from './site/user/Info'
import AddComment from './site/user/AddComment'

import Header from './site/user/layout/Header'
import SideBar from './site/user/layout/SideBar'
import Bar from './site/user/layout/Bar'
import Footer from './site/user/layout/Footer'
import NoMatch from './site/user/layout/NoMatch'

export default function UserContainer() {
  return (
    <Router>
      <Header />
      <SideBar />

      <Header />
      <SideBar />
      <div class="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/findjob" component={FindJob} />
          <Route path="/finding" component={Finding} />
          <Route path="/finding/filter" component={Filter} />
          <Route path="/finding/sort" component={Sort} />

          <Route path="/jobdetail" component={JobDetail} />
          <Route path="/recruiting" component={Recruiting} />
          <Route path="/following" component={Following} />
          <Route path="/notification" component={Notification} />
          <Route path="/addcomment" component={AddComment} />

          <Route path="/account" component={Account} />
          <Route path="/info" component={Info} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Bar />
      <Footer />
    </Router>
  )
}