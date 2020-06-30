import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Noti(props) {
  const { iconName, time, url } = props
  return (
    <Link to={url}>
      <div style={styles.noti}>
        <i style={styles.icon} className={"fas " + iconName}></i>
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
    fontSize: "16px",
    paddingTop: "6px",
    marginRight: "15px",
    color: "#45B6FF"
  },
}