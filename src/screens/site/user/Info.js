import React, { useState } from 'react'

export default function Info() {
  const [education, setEducation] = useState("Đại học Phương Đông")
  const [experience, setExperience] = useState("CASHIER - 09/2017 đến 05/2019 SEARS - CỬA HÀNG,  Hà Nội Cung cấp dịch vụ khách hàng đặc biệt để phân biệt và quảng bá thương hiệu công ty. Hợp tác với các thành viên nhóm dịch vụ khách hàng để cung cấp dịch vụ đặc biệt trong toàn bộ trải nghiệm mua sắm và mua hàng. Giữ dòng thanh toán sạch sẽ mọi lúc và duy trì màn hình sản phẩm gọn gàng, ngăn nắp. Mentor và huấn luyện viên thu ngân mới.")
  const [certificate, setCertificate] = useState("Chứng chỉ Tiếng Anh Toeic - 2018")
  const [other, setOther] = useState("")
  // const [row, setRow] = useState(10)

  const handleEducation = (event) => {
    setEducation(event.target.value);
  }
  const handleExperience = (event) => {
    setExperience(event.target.value);
  }
  const handleCertificate = (event) => {
    setCertificate(event.target.value);
  }
  const handleOther = (event) => {
    setOther(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('An essay was submitted: ');
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h4 style={styles.text}>Học vấn</h4>
        <input style={styles.input} type="text" onChange={handleEducation} value={education} />

        <h4 style={styles.text}>Kinh nghiệm làm việc</h4>
        <textarea
          style={styles.textarea}
          rows={10}
          value={experience}
          onChange={(event) => {
            handleExperience(event)
          }} />

        <h4 style={styles.text}>Chứng chỉ</h4>
        <input style={styles.input} type="text" onChange={handleCertificate} value={certificate} />

        <h4 style={styles.text}>Kỹ năng khác</h4>
        <input style={styles.input} type="text" onChange={handleOther} value={other} />

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

  textarea: {
    width: "100%",
    resize: "none",
    minHeight: "40px",
    border: "1px solid #eee",
    borderRadius: "5px 0 0 5px",
    padding: "10px",
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