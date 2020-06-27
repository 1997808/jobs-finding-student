import React from 'react';
// import { Route } from 'react-router-dom';
import HeaderBack from '../site/user/layout/HeaderBack'

export default function FlatLayout({ children }) {
  return (
    <React.Fragment>
      <HeaderBack />
      <div class="container">
        {children}
      </div>
    </React.Fragment>
  )
}

// export default function FlatRoute({ component: Component, ...rest }) {
//   return (
//     <Route {...rest} render={matchProps => (
//       <FlatLayout>
//         <Component {...matchProps} />
//       </FlatLayout>
//     )} />
//   )
// };
