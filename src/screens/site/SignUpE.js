import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('An essay was submitted: ' + email + password);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <h1 style={styles.title}>Đăng kí tuyển dụng</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h4 style={styles.text}>Tên công ty</h4>
        <input style={styles.input} type="name" onChange={handleChangeEmail} />

        <h4 style={styles.text}>Số điện thoại</h4>
        <input style={styles.input} type="name" onChange={handleChangeEmail} />

        <h4 style={styles.text}>Địa chỉ</h4>
        <input style={styles.input} type="name" onChange={handleChangeEmail} />

        <h4 style={styles.text}>Email</h4>
        <input style={styles.input} type="email" onChange={handleChangeEmail} />

        <h4 style={styles.text}>Mật khẩu</h4>
        <input style={styles.input} type="password" onChange={handleChangePassword} />

        <div style={styles.textContainer}>
          <input style={styles.checkbox} type="checkbox" id="accept" name="accept" value="auto"></input>
          <label style={styles.label} for="accept">Tôi đã đọc và đồng ý với các
              <span style={{ color: "#5160FF" }}> Thỏa thuận sử dụng</span>
          </label>
        </div>

        <button style={styles.submitBtn} type="submit" >
          Đăng kí
        </button>
      </form>

      <div style={styles.textContainer3}>
        <p style={styles.label}>Bạn đã có tài khoản?
          <Link to={"/signin"}><span style={{ color: "#5160FF", marginLeft: "10px" }}>Đăng nhập</span></Link>
        </p>
      </div>
    </React.Fragment>
  )
}


const styles = {
  title: {
    fontWeight: 700,
    width: "60%",
    padding: "15px 0 15px 15px"
  },

  text: {
    paddingBottom: "5px"
  },

  form: {
    marginTop: "20px",
    marginBottom: "10px",
    width: "100%",
    height: "auto",
    padding: "0 15px",
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

  textContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px"
  },

  checkbox: {
    width: "16px",
    height: "16px"
  },

  label: {
    margin: "0 0 0 10px",
    fontSize: "12px",
  },

  forgetText: {
    color: "#5160FF",
    paddingTop: "5px"
  },

  submitBtn: {
    width: "100%",
    height: "40px",
    color: "#fff",
    display: "flex",
    border: "none",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(to top left, #5160FF, #45B6FF)",
    justifyContent: "center",
    alignItems: "center"
  },

  textContainer3: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 15px",
    marginBottom: "30px"
  },
}