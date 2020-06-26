import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../../../../actions/index'

export default function Header() {
  const dispatch = useDispatch()

  return (
    <div style={styles.header}>
      <i onClick={() => dispatch(toggleDrawer())} style={styles.icon} className={"fas fa-bars"}></i>
      <h2 style={styles.logo}>Header</h2>
      <i onClick={() => { }} style={styles.icon} className={"fas fa-search"}></i>
    </div>
  )
}

const styles = {
  header: {
    width: "100%",
    height: "60px",
    padding: "0 15px",
    top: 0,
    background: "#5160FF",
    // background: "#fff",
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#ffffff",
    zIndex: "10",
  },

  logo: {
    color: "#fff"
  },

  icon: {
    fontSize: "24px",
    padding: "18px",
    color: "#fff"
  },
}