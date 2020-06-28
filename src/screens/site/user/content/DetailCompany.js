import React from 'react'
import Title from "../../../../components/title"
import JobItem from "../../../../components/jobItem"

export default function DetailCompany() {
  return (
    <React.Fragment>
      <div style={styles.infoContainer}>
        <Title title="Giới thiệu" />
        <p>-Furnist: là thương hiệu nội địa Viet Products với hơn 12 năm kinh nghiệm trong lĩnh vực thiết kế, sản xuất- xuất khẩu các mặt hàng nội ngoại thất sang các thị trường : Mỹ, Châu Âu, Úc, Canada... hiện tại chúng tôi có 2 nhà máy tại Đồng nai và Đồng tháp trên 30,000 m2.<br />
        Chúng tôi có các kênh bán hàng như sau:<br />
        Dự án: Nhà Thầu, Resort Khách sạn, Cơ quan, Văn Phòng, Căn hộ chung cư...<br />
        Đại lý phân phối nội thất từ Ninh Thuận tới Cà mau<br />
        Showroon nội Thất Furnist<br />
        Online<br />
        Xuất khẩu trực tiếp<br />
        Thế mạnh của chúng tôi là thiết kế hiện đại, màu sắc tinh tế, chất lượng đạt chuẩn Châu âu, giá cả hợp lý vừa ngân sách của người Việt.<br />
Chúng tôi tự tin là người luôn đi đầu trong sự sáng tạo cách sống hiện đại, tiện nghi cho khách hàng.</p>
      </div>

      <div style={styles.infoContainer2}>
        <Title title="Việc làm đang tuyển" />
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
    </React.Fragment>
  )
}

const styles = {
  infoContainer: {
    boxShadow: "0 2px 4px #bbb",
    padding: "0 15px 15px 15px",
    borderRadius: "5px",
    marginTop: "15px",
    background: "#fff",
  },

  infoContainer2: {
    marginTop: "15px",
  }
}