import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";

function Icon(props) {
  const { iconName, url, active } = props
  console.log(props)

  // let icon = styles.icon
  // const iconActive = () => {
  //   if (active == 0) {
  //     icon = styles.iconActive
  //   }
  // }

  return (
    <Link to={"/" + url}>
      <i onClick={() => { }} style={styles.icon} className={"fas " + iconName}></i>
    </Link>
  )
}

export default function Bar() {
  // const [active, setActive] = useState(false)
  // const onIconActive = () => {
  //   setActive(!active)
  // }

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
    bottom: 0,
    background: "#ffffff",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #eeeeee"
  },

  icon: {
    fontSize: "24px",
    padding: "18px",
    color: "#dddddd"
  },

  iconActive: {
    fontSize: "30px",
    padding: "15px",
    color: "#5160FF"
  }
}