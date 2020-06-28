import React from 'react'
import Title from "../../../../components/title"

function MainInfo(props) {
  const { iconName, text, info } = props
  return (
    <div style={styles.mainInfo}>
      <div style={styles.iconContainer}>
        <i style={styles.icon} className={"fas " + iconName}></i>
      </div>
      <div>
        <h5>{text}</h5>
        <p style={styles.info}>{info}</p>
      </div>
    </div>
  )
}

export default function DetailJob() {
  return (
    <React.Fragment>
      <div style={styles.infoContainer}>
        <Title title="Thông tin tuyển dụng" />
        <MainInfo iconName="fa-map-marker-alt" text="Nơi làm việc" info="Ao Sen, Hà Đông, Hà Nội" />
        <MainInfo iconName="fa-dollar-sign" text="Lương" info="4.000.000 - 4.500.000 VND" />
        <MainInfo iconName="fa-clock" text="Thời gian" info="Parttime" />
        <MainInfo iconName="fa-calendar-alt" text="Hết hạn tuyển" info="02/07/2020" />
        <MainInfo iconName="fa-star" text="Kinh nghiệm" info="Không cần" />
      </div>

      <div style={styles.infoContainer}>
        <Title title="Mô tả công việc" />
        <p>- Chịu trách nhiệm thiết kế các ấn phẩm (poster, tờ rơi, standee, backdrop, bandroll, thư mời,...) hỗ trợ cho việc quảng bá, truyền thông của công ty qua các kênh Website, Facebook, Youtube,...;<br />
              - Thiết kế các ấn phẩm đồ họa: Logo, catalogue, nhận diện thương hiệu,...<br />
              - Thiết kế các mẫu quảng cáo, brochure, banner ...<br />
              - Cùng triển khai các chương trình Marketing/PR cho các sự kiện, chiến dịch của công ty; Chỉnh sửa, hoàn thiện sản phẩm theo yêu cầu;<br />
              - Lên kịch bản, xử lý, dựng video và các công việc thiết kế khác theo yêu cầu của trưởng phòng.</p>
      </div>

      <div style={styles.infoContainer}>
        <Title title="Yêu cầu công việc" />
        <p>
          - Tốt nghiệp cao đẳng trở lên các ngành thiết kế đồ họa, thiết kế mỹ thuật. Có thể vẽ là một ưu thế.<br />
          - Có tối thiểu 01 năm kinh nghiệm ở vị trí tương đương.<br />
          - Sử dụng thành thạo phần mềm thiết kế và các công cụ hỗ trợ khác.<br />
          - Ưu tiên các ứng viên đã làm việc trong các công ty tổ chức sự kiện/ quảng cáo hoặc ngành mỹ phẩm; có kỹ năng về video editor<br />
          - Khả năng mỹ thuật tốt, tính năng động, sáng tạo, giàu ý tưởng, có tư duy sáng tạo logic và chủ động trong công việc;</p>
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

  iconContainer: {
    width: "40px",
    marginRight: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mainInfo: {
    display: "flex",
    alignItems: "center",
    paddingTop: "10px"
  },

  info: {
    fontWeight: 300,
    paddingTop: "5px"
  },

  icon: {
    fontSize: "24px",
    color: "#ddd"
  },
}