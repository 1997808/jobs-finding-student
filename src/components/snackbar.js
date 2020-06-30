// import React, { useState } from 'react';
// import Styles from './snackbar.module.css'

// export default function Snackbar() {
//   const [isActive, setIsActive] = useState(false)
//   const openSnackBar = (message = 'Something went wrong...') => {
//     message = message
//     setIsActive(true, () => {
//       setTimeout(() => {
//         setIsActive(false);
//       }, 3000);
//     });
//   }

//   return (
//     <div className={isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
//       {/* {this.message} */}
//     </div>
//   )
// }


import React, { PureComponent } from 'react';
import Styles from './snackbar.module.css'

export default class Snackbar extends PureComponent {
  state = {
    isActive: false,
  }

  openSnackBar = (message = 'Something went wrong...') => {
    this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 2500);
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className={isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
        {this.message}
      </div>
    )
  }
}