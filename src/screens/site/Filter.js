import React, { useState } from 'react'
import Title from '../../components/title'
import {
  Link
} from "react-router-dom";


export default function Filter() {
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

      <Title title="Địa điểm" />
      <select style={styles.input}>
        <option selected value="grapefruit">Hà Nội</option>
        <option value="lime">Đà Nẵng</option>
        <option value="coconut">Hồ Chí Minh</option>
        <option value="default">Mặc Định</option>
      </select>

      <Title title="Thời gian làm" />
      <select style={styles.input}>
        <option value="grapefruit">Parttime</option>
        <option value="lime">Fulltime</option>
        <option selected value="coconut">Tự do</option>
        <option value="default">Mặc Định</option>
      </select>

      <Title title="Lương" />
      <select style={styles.input}>
        <option value="grapefruit">Dưới 2 triệu</option>
        <option value="lime">2 triệu - 4 triệu</option>
        <option selected value="coconut">4 triệu - 6 triệu</option>
        <option value="default">Trên 6 triệu</option>
      </select>

      <Title title="Mức đánh giá" />
      <select style={styles.input}>
        <option value="grapefruit">Trên 1 sao</option>
        <option value="lime">Trên 2 sao</option>
        <option selected value="coconut">Trên 3 sao</option>
        <option value="mango">Trên 4 sao</option>
        <option value="default">Mặc Định</option>
      </select>

      <div style={styles.btnContainer}>
        <Link to={"/findjob"} style={styles.container}>
          <button
            style={styles.submitBtn}
          // type="submit"
          >Áp dụng</button>
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
    backgroundImage: "linear-gradient(to top left, #5160FF, #45B6FF)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px"
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