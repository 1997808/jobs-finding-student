import React from 'react'
import {
  Link
} from "react-router-dom";

export default function FeaturedNoti(props) {
  const { iconName, time, url } = props
  return (
    <Link to={url}>
      <div style={styles.featuredNoti}>
        <div style={styles.colorBar}>
          <i style={styles.icon} className={"fas " + iconName}></i>
        </div>
        <div style={styles.textContainer}>
          <h4>Có thêm 2 công việc đề xuất mới</h4>
          <h6 style={styles.notiDetail}>Hãy nói cho chúng tôi nơi bạn muốn làm việc, chúng tôi sẽ cho bạn thật nhiều việc làm phù hợp.</h6>
          <h6 style={styles.time}>{time}</h6>
        </div>
      </div>
    </Link>
  )
}

const styles = {
  featuredNoti: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    background: "#fff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px #bbb",
    marginBottom: "15px",
  },

  colorBar: {
    width: "40px",
    height: "40px",
    backgroundImage: "linear-gradient(to top left, #5160FF, #45B6FF)",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textContainer: {
    width: "calc(100% - 55px)"
  },

  notiDetail: {
    padding: "5px 0",
    fontWeight: "300",
  },

  time: {
    textAlign: "right",
    fontWeight: "300",
  },

  icon: {
    fontSize: "16px",
    color: "#fff"
  },
}