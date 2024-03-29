import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Noti(props) {
  const { iconName, time, url } = props
  return (
    <Link to={url}>
      <div style={styles.noti}>
        <div style={styles.colorBar}>
          <i style={styles.icon} className={"fas " + iconName}></i>
        </div>
        <div style={styles.textContainer}>
          <h6>Có thêm 1 công việc đề xuất mới <span style={styles.notiDetail}>chỉ cần bấm vào thanh Tìm kiếm là bạn có thể xem ngay</span> </h6>
          <h6 style={styles.time}>{time}</h6>
        </div>
      </div>
    </Link>
  )
}

const styles = {
  noti: {
    width: "100%",
    height: "auto",
    display: "flex",
    background: "#fff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px #bbb",
    marginBottom: "10px",
    justifyContent: "space-between",
  },

  colorBar: {
    width: "24px",
    height: "24px",
    backgroundImage: "linear-gradient(to top left, #FF6B6B , #FFD538)",
    // backgroundImage: "linear-gradient(to top left, #444, #bbb)",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    width: "calc(100% - 39px)"
  },

  notiDetail: {
    fontSize: "12px",
    fontWeight: "300",
  },

  time: {
    textAlign: "right",
    paddingTop: "5px",
    fontWeight: "300",
  },

  icon: {
    fontSize: "12px",
    color: "#fff"
  },
}