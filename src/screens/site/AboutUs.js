import React from 'react'
import Title from "../../components/title"
import myImage from "../../assets/images/IMG_20190317_171216.jpg"
import myProject from "../../assets/images/Screenshot from 2020-06-29 11-08-24.png"
import myProject2 from "../../assets/images/Screenshot from 2020-06-29 11-10-34.png"

export default function AboutUs() {
  return (
    <React.Fragment>
      <div style={styles.jobInfo}>
        <img src={myImage} style={styles.banner} alt="banner"></img>
        <div style={styles.featuredJob}>
          <Title title="Giới thiệu" />
          <p style={styles.text}>
            Tôi tên là Lê Duy Khánh. Tôi hiện đang học năm 2 chuyên ngành Công nghệ đa phương tiện tại Học viện Công nghệ Bưu chính & Viễn thông. Là một người dành hàng tấn thời gian để nghiên cứu câu trả lời câu hỏi Stackoverflow và Quora tôi nghĩ rằng tôi có khả năng xử lý các vấn đề nếu có thời gian. Tôi đang tìm kiếm một công việc thực tập bán thời gian vào buổi sáng hoặc thậm chí là thực tập toàn thời gian vào cuối tháng 7 năm 2020.
          </p>
        </div>

        <div style={styles.featuredJob}>
          <Title title="Kinh nghiệm" />
          <p style={styles.text}>
            Tôi đang có trang web của mình trên 1997808.github.io, nó được tạo bằng HTML, CSS và Vanilla Javascript . Tôi chưa từng làm việc ở bất cứ nơi nào trước đây vì vậy đó sẽ là một vinh dự cho một sinh viên không tốt nghiệp như tôi có thể có cơ hội thực tập ngắn tại công ty của bạn.
          </p>
        </div>
        <img src={myProject} style={styles.banner2} alt="banner"></img>
        <img src={myProject2} style={styles.banner2} alt="banner"></img>

      </div>

    </React.Fragment >
  )
}

const styles = {
  featuredJob: {
    width: "100%",
    height: "auto",
    background: "#fff",
    marginTop: "15px",
    padding: "0 15px 15px 15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px #bbb",
    overflow: "hidden",
  },

  banner: {
    width: "calc(100% - 30px)",
    height: "auto",
    objectFit: "cover",
    borderRadius: "5px"
  },

  banner2: {
    width: "calc(100% - 30px)",
    height: "auto",
    objectFit: "cover",
    borderRadius: "5px",
    marginTop: "15px"
  },

  jobInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    fontWeight: 300
  },
}