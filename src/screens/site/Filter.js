import React, { useState } from 'react'
import Title from '../../components/title'
import {
  Link
} from "react-router-dom";


export default function Filter() {
  const [place, setPlace] = useState("default")
  const [time, setTime] = useState("default")
  const [salary, setSalary] = useState("default")
  const [star, setStar] = useState("default")

  const handlePlace = (e) => {
    setPlace(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

  const handleSalary = (e) => {
    setSalary(e.target.value)
  }

  const handleStar = (e) => {
    setStar(e.target.value)
  }

  const handleResetFilter = () => {
    setPlace("default")
    setTime("default")
    setSalary("default")
    setStar("default")
  }

  // const handleSubmit = (event) => {
  //   alert('An essay was submitted: ');
  //   event.preventDefault();
  // }

  return (
    <form style={styles.form}> {/* onSubmit={handleSubmit} */}
      {/* <input style={styles.input} type="radio" onChange={handleChange} /> */}

      <Title title="Địa điểm" />
      <select style={styles.input} value={place} onChange={(e) => handlePlace(e)}>
        <option value="HN">Hà Nội</option>
        <option value="DN">Đà Nẵng</option>
        <option value="HCM">Hồ Chí Minh</option>
        <option value="default">Mặc Định</option>
      </select>

      <Title title="Thời gian làm" />
      <select style={styles.input} value={time} onChange={(e) => handleTime(e)}>
        <option value="part">Parttime</option>
        <option value="full">Fulltime</option>
        <option value="free">Tự do</option>
        <option value="default">Mặc Định</option>
      </select>

      <Title title="Lương" />
      <select style={styles.input} value={salary} onChange={(e) => handleSalary(e)}>
        <option value="less 2">Dưới 2 triệu</option>
        <option value="2 to 4">2 triệu - 4 triệu</option>
        <option value="4 to 6">4 triệu - 6 triệu</option>
        <option value="more 6">Trên 6 triệu</option>
        <option value="default">Mặc Định</option>
      </select>

      <Title title="Mức đánh giá" />
      <select style={styles.input} value={star} onChange={(e) => handleStar(e)}>
        <option value="1">Trên 1 sao</option>
        <option value="2">Trên 2 sao</option>
        <option value="3">Trên 3 sao</option>
        <option value="4">Trên 4 sao</option>
        <option value="default">Mặc Định</option>
      </select>

      <div style={styles.btnContainer}>
        <Link to={"/findjob"} style={styles.container}>
          <button
            style={styles.submitBtn}
          // type="submit"
          >Áp dụng</button>
        </Link>
        <button
          style={styles.btn}
          onClick={() => handleResetFilter()}
        >Làm lại</button>
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