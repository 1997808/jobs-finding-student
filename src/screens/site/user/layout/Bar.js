import React from 'react'
import {
  NavLink
} from "react-router-dom";

function Icon(props) {
  const { iconName, url } = props

  return (
    <NavLink exact to={"/" + url} style={styles.icon} activeStyle={styles.iconActive}>
      <i className={"fas " + iconName}></i>
    </NavLink>
  )
  //NavLink check active se cho style
}

export default function Bar() {
  return (
    <div style={styles.bar} >
      <Icon iconName="fa-home" url="" />
      <Icon iconName="fa-search" url="findjob" />
      <Icon iconName="fa-briefcase" url="recruiting" />
      <Icon iconName="fa-bookmark" url="following" />
      <Icon iconName="fa-bell" url="notification" />
    </div>
  )
}

const styles = {
  bar: {
    width: "100%",
    height: "60px",
    padding: "0 15px",
    bottom: -1,
    left: 0,
    background: "#ffffff",
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #eeeeee",
  },

  icon: {
    fontSize: "24px",
    padding: "18px",
    color: "#eee",
    transition: "all 0.2s linear",
  },

  iconActive: {
    color: "#5160FF",
    // color: "#45B6FF",
    transition: "all 0.2s linear",
  }
}