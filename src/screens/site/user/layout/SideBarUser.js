import React from 'react'
import myImage from "../../../../assets/images/small.jpg"
import myAvatar from "../../../../assets/images/avatars-000364906919-fdvn9m-t500x500.jpg"
import {
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { toggleDrawer } from '../../../../actions/index'
import { logout } from '../../../../utils/index';

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

export default function SideBarUser() {
  const drawerActive = useSelector(state => state.drawer)
  const dispatch = useDispatch()
  const drawer = { ...styles.mainDrawer, ...styles.drawer }
  const drawerClick = { ...styles.mainDrawer, ...styles.drawerActive }

  return (
    <div style={drawerActive ? drawerClick : drawer}>
      <img onClick={() => dispatch(toggleDrawer())} style={styles.banner} src={myImage} alt="img"></img>
      <img style={styles.avatar} src={myAvatar} alt="img"></img>
      <h3>Lê Nguyễn Hoàng</h3>
      <p style={styles.text}>lenguyenhoang@gmail.ptit.com</p>

      <div style={styles.infoContainer}>
        <div style={styles.infoShow}>
          <h4>3</h4>
          <p style={styles.text}>Đề xuất</p>
        </div>
        <div style={styles.infoShow}>
          <h4>14</h4>
          <p style={styles.text}>Quan tâm</p>
        </div>
        <div style={styles.infoShow}>
          <h4>2</h4>
          <p style={styles.text}>Ứng tuyển</p>
        </div>
      </div>

      <div style={styles.funcContainer}>
        <Item iconName="fa-home" text="Trang chủ" url="" />
        <Item iconName="fa-id-card" text="Mô tả" url="/info" />
        <Item iconName="fa-cog" text="Cài đặt" url="/setting" />
        <Item iconName="fa-info-circle" text="Về chúng tôi" url="/aboutus" />
        <div onClick={() => {
          logout()
          dispatch(toggleDrawer())
        }}><Item iconName="fa-door-open" text="Đăng xuất" url="/" />
        </div>

      </div>
    </div>
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

  infoContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    margin: "15px 0",
    padding: "0 15px"
  },

  infoShow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 15px"
  },

  funcContainer: {
    width: "100%",
    height: "auto",
  },

  funcItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px 30px",
    width: "100%",
    height: "auto",
  },

  text: {
    fontSize: "12px",
    fontWeight: "300",
    marginTop: "2px"
  },

  icon: {
    fontSize: "16px",
    marginRight: "15px",
    color: "#ddd"
  },
}