import React, { useState } from 'react'
import myImage from "../../../assets/images/small.jpg"
import myAvatar from "../../../assets/images/avatars-000364906919-fdvn9m-t500x500.jpg"

export default function Setting() {
  const [username, setUsername] = useState("Hoàng")
  const [name, setName] = useState("Lê Nguyễn Hoàng")
  const [phone, setPhone] = useState("0987654123")
  const [email, setEmail] = useState("lenguyenhoang@gmail.ptit.com")
  const [password, setPassword] = useState("123456")

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleName = (event) => {
    setName(event.target.value);
  }
  const handlePhone = (event) => {
    setPhone(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('An essay was submitted: ' + email + password);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      {/* <div className="row" style={styles.funcBarContainer}>
        <div style={styles.funcBar}>
        </div>
      </div> */}

      <form onSubmit={handleSubmit} style={styles.form}>
        <h4 style={styles.text}>Ảnh bìa</h4>
        <img style={styles.banner} src={myImage} alt="img"></img>
        <h4 style={styles.text}>Ảnh đại diện</h4>
        <img style={styles.avatar} src={myAvatar} alt="img"></img>
      </form>

      <form onSubmit={handleSubmit} style={styles.form}>
        <h4 style={styles.text}>Tên hiển thị</h4>
        <input style={styles.input} type="text" onChange={handleUsername} value={username} />

        <h4 style={styles.text}>Họ tên</h4>
        <input style={styles.input} type="text" onChange={handleName} value={name} />

        <h4 style={styles.text}>Số điện thoại</h4>
        <input style={styles.input} type="number" onChange={handlePhone} value={phone} />

        <h4 style={styles.text}>Email</h4>
        <input style={styles.input} type="email" onChange={handleEmail} value={email} />

        <h4 style={styles.text}>Mật khẩu</h4>
        <input style={styles.input} type="password" onChange={handlePassword} value={password} />

        <button style={styles.submitBtn} type="submit" >
          Lưu
        </button>
      </form>
    </React.Fragment>
  )
}


const styles = {
  text: {
    paddingBottom: "5px"
  },

  banner: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "15px",
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "5px",
    boxShadow: "0 0 0 5px #fff",
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
}