import React from 'react'
import {
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

import SignIn from './site/SignIn'
import SignUp from './site/SignUp'
import NoMatch from './site/user/layout/NoMatch'

import PrivateRoute from '../components/router/private';
import PublicRoute from '../components/router/public';
import FlatLayout from './layout/flat'
import HeaderBarLayout from './layout/headerBar'

export default function UserContainer() {
  return (
    <Switch>
      <PublicRoute restricted={false} layout={HeaderBarLayout} exact path="/" component={Home} />
      <PublicRoute restricted={false} layout={HeaderBarLayout} exact path="/findjob" component={FindJob} />
      <PublicRoute restricted={false} layout={HeaderBarLayout} path="/jobdetail" component={JobDetail} />
      <PrivateRoute layout={HeaderBarLayout} path="/recruiting" component={Recruiting} />
      <PrivateRoute layout={HeaderBarLayout} path="/following" component={Following} />
      <PrivateRoute layout={HeaderBarLayout} path="/notification" component={Notification} />
      <PrivateRoute layout={HeaderBarLayout} path="/addcomment" component={AddComment} />
      <PrivateRoute layout={HeaderBarLayout} path="/account" component={Account} />
      <PrivateRoute layout={HeaderBarLayout} path="/info" component={Info} />
      <PublicRoute layout={FlatLayout} restricted={false} path="/finding" component={Finding} />
      <PublicRoute layout={FlatLayout} restricted={false} path="/filter" component={Filter} />
      <PublicRoute layout={FlatLayout} restricted={false} path="/sort" component={Sort} />
      <PublicRoute layout={FlatLayout} restricted={true} path="/signin" component={SignIn} />
      <PublicRoute layout={FlatLayout} restricted={true} path="/signup" component={SignUp} />
      <Route path="*" component={NoMatch} />
    </Switch >
  )
}