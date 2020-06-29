import React, { useState } from 'react'
import Title from '../../components/title'
import {
  Link
} from "react-router-dom";

export default function Sort() {
  const [textFind, setTextFind] = useState("")

  // const handleChange = (event) => {
  //   setTextFind(event.target.value);
  // }

  const handleSubmit = (event) => {
    alert('An essay was submitted: ' + textFind);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* <input style={styles.input} type="radio" onChange={handleChange} /> */}

      <Title title="Sắp xếp theo" />
      <select style={styles.input}>
        <option selected value="grapefruit">Mặc định</option>
        <option value="lime">Ngày đăng (cũ nhất)</option>
        <option value="coconut">Lương (cao - thấp)</option>
        <option value="coconut">Lương (thấp - cao)</option>
        <option value="coconut">Đánh giá (cao - thấp)</option>
        <option value="coconut">Đánh giá (thấp - cao)</option>
      </select>
      <div style={styles.btnContainer}>
        <Link to={"/findjob"} style={styles.container}>
          <button style={styles.submitBtn} type="submit" >Áp dụng</button>
        </Link>
        <button style={styles.btn} type="submit" >Làm lại</button>
      </div>
    </form>
  )
}


const styles = {
  form: {
    marginBottom: "10px",
    width: "100%",
    height: "auto",
    padding: "0 15px",
    alignItems: "center"
  },

  input: {
    width: "100%",
    height: "40px",
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: "5px 0 0 5px",
    padding: "0 10px",
    marginBottom: "15px"
  },

  btnContainer: {
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: "15px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #eee"
  },

  container: {
    width: "100%",
    height: "auto",
  },

  submitBtn: {
    width: "100%",
    height: "40px",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    background: "#5160FF",
    marginBottom: "10px",
  },

  btn: {
    width: "100%",
    height: "30px",
    border: "none",
    color: "#444",
    borderRadius: "5px",
    background: "#eee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}