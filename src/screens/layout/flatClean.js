import React from 'react';
import HeaderBackClean from '../site/user/layout/HeaderBackClean'

export default function FlatCleanLayout({ children }) {
  return (
    <React.Fragment>
      <HeaderBackClean />
      <div class="container">
        {children}
      </div>
    </React.Fragment>
  )
}
