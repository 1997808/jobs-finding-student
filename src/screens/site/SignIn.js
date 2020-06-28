import React, { useState } from 'react'
import { login } from '../../utils/index';
import {
  Link
} from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    login();
  }

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
      <h1 style={styles.title}>Đăng nhập để mở khóa thêm nhiều chức năng</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h4 style={styles.text}>Email</h4>
        <input style={styles.input} type="email" onChange={handleChangeEmail} />

        <h4 style={styles.text}>Mật khẩu</h4>
        <input style={styles.input} type="password" onChange={handleChangePassword} />

        <div style={styles.textContainer}>
          <div style={styles.checkboxContainer}>
            <input style={styles.checkbox} type="checkbox" id="autoSignIn" name="autoSignIn" value="auto"></input>
            <label style={styles.label} for="autoSignIn">Tự động đăng nhập</label>
          </div>
          <h5 style={styles.forgetText}>Quên mật khâu?</h5>
        </div>

        <button onClick={() => handleLogin()} style={styles.submitBtn} type="submit" >
          <Link to={"/"}>Đăng nhập</Link>
        </button>
      </form>
      <div style={styles.textContainer2}>
        <p>Chưa có tài khoản?</p>
        <h5 style={styles.forgetText}>
          <Link to={"/signup"}>
            Đăng ký ngay!
          </Link>
        </h5>
      </div>
    </React.Fragment>
  )
}


const styles = {
  title: {
    fontWeight: 700,
    width: "75%",
    padding: "30px 0 30px 15px"
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px"
  },

  checkboxContainer: {
    display: "flex",
    alignItems: "center"
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
    marginLeft: "15px"
  },

  submitBtn: {
    width: "100%",
    height: "40px",
    color: "#fff",
    display: "flex",
    border: "none",
    borderRadius: "5px",
    background: "#5160FF",
    justifyContent: "center",
    alignItems: "center"
  },

  textContainer2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60px"
  },
}

// import React from 'react';
// import { login } from '../../utils';

// const SignIn = (props) => {

//   const handleLogin = () => {
//     login();
//     props.history.push('/dashboard');
//   }

//   return (
//     <div>
//       <h1>Sign in</h1>

//       <button onClick={() => handleLogin()}>Click here to log in</button>
//     </div>
//   );
// };

// export default SignIn;