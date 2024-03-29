import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../../../../actions/index'
import {
  Link
} from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch()

  return (
    <div style={styles.header}>
      <i onClick={() => dispatch(toggleDrawer())} style={styles.icon} className={"fas fa-bars"}></i>
      <h3 style={styles.logo}>FRESHERSTART</h3>
      <Link to={"/finding"}>
        <i onClick={() => { }} style={styles.icon} className={"fas fa-search"}></i>
      </Link>
    </div>
  )
}

const styles = {
  header: {
    width: "100%",
    height: "60px",
    padding: "0 15px",
    top: 0,
    // background: "#5160FF",
    backgroundImage: "linear-gradient(to bottom right, #5160FF, #45B6FF)",
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#ffffff",
    zIndex: "10",
  },

  logo: {
    color: "#fff",
    fontWeight: "300"
  },

  icon: {
    fontSize: "24px",
    padding: "18px",
    color: "#fff"
  },
}