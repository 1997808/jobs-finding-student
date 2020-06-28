import React from 'react'
import myImage from "../../../../assets/images/715272_l.jpg"
import myAvatar from "../../../../assets/images/Valorant_icon.png"
import {
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { toggleDrawer } from '../../../../actions/index'

function Item(props) {
  const { iconName, text, url } = props
  return (
    <Link to={url}>
      <div style={styles.funcItem}>
        <i style={styles.icon} className={"fas " + iconName}></i>
        <h4>{text}</h4>
      </div>
    </Link>
  )
}

export default function SideBar() {
  const drawerActive = useSelector(state => state.drawer)
  const dispatch = useDispatch()
  const drawer = { ...styles.mainDrawer, ...styles.drawer }
  const drawerClick = { ...styles.mainDrawer, ...styles.drawerActive }

  return (
    <div style={drawerActive ? drawerClick : drawer}>
      <img onClick={() => dispatch(toggleDrawer())} style={styles.banner} src={myImage} alt="img"></img>
      <img style={styles.avatar} src={myAvatar} alt="img"></img>
      <Link to={"/signin"}>
        <h4 style={styles.text}>Đăng nhập ngay</h4>
      </Link>
      <div style={styles.funcContainer}>
        <Item iconName="fa-home" text="Trang chủ" url="" />
        <Item iconName="fa-cog" text="Cài đặt" url="/setting" />
        <Item iconName="fa-info-circle" text="Về chúng tôi" url="/aboutus" />
      </div>
    </div >
  )
}

const styles = {
  mainDrawer: {
    width: "70vw",
    height: "100vh",
    top: "0",
    left: "0",
    background: "#fff",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 3px 6px #bbb",
    marginRight: "6px",
    zIndex: 10,
    // overflow: "hidden",
  },
  drawer: {
    transform: "translateX(-75vw)",
    transition: "transform 0.3s ease-out",
  },

  drawerActive: {
    transform: "translateX(0)",
    transition: "transform 0.3s ease-out",
  },

  banner: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    marginBottom: "45px",
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "5px",
    boxShadow: "0 0 0 5px #fff",
    position: "absolute",
    top: "140px",
    zIndex: 10,
  },

  funcContainer: {
    width: "100%",
    height: "auto",
    // borderTop: "1px solid #eee",
    // borderBottom: "1px solid #eee",
  },

  funcItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px 30px",
    width: "100%",
    height: "auto",
  },

  text: {
    marginBottom: "30px"
  },

  icon: {
    fontSize: "16px",
    marginRight: "15px",
    color: "#ddd"
  },
}