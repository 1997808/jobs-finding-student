import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Bar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/findjob">Find Job</Link>
        </li>
        <li>
          <Link to="/jobdetail">Job Detail</Link>
        </li>
      </ul>
    </div>
  )
}