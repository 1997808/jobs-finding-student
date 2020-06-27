import React from 'react';
// import { Route } from 'react-router-dom';
import Header from '../site/user/layout/Header'
import SideBar from '../site/user/layout/SideBar'
import Bar from '../site/user/layout/Bar'
import Footer from '../site/user/layout/Footer'

export default function HeaderBarLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <div class="container" style={styles.container}>
        {children}
      </div>
      <Bar />
      <Footer />
    </React.Fragment>
  )
}

// export default function HeaderBarRoute({ component: Component, ...rest }) {
//   return (
//     <Route {...rest} render={matchProps => (
//       <HeaderBarLayout>
//         <Component {...matchProps} />
//       </HeaderBarLayout>
//     )} />
//   )
// };

const styles = {
  container: {
    background: "rgba(238,238,238,0.3)"
  },
}