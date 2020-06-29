import React from 'react'

function Comment(props) {
  const { rating, text, date, comment } = props
  return (
    <div style={styles.commentContainer}>
      <div style={styles.info}>
        <h4>{text}</h4>
        <div style={styles.iconContainer}>
          <i style={styles.icon} className={"fas fa-star-half-alt"}></i>
          <h5 style={styles.rating}>{rating}</h5>
        </div>
        <p style={styles.date}>{date}</p>
      </div>
      <p style={styles.comment}>{comment}</p>
    </div>
  )
}

export default function DetailComment() {
  return (
    <React.Fragment>
      <Comment rating="3.5" text="Ẩn danh" date="2 tháng trước"
        comment="T đã đọc hết các review, đa phần là chế nhạo ban lãnh đạo site HCM, còn t làm ở HN. Về cơ bản, nếu làm ở fsoft, có thể đúc kết mấy cái như này:
        1: Quy trình. Cái đầu tiên học được là quy trình và mấy kỹ năng cơ bản. Học cách dùng Git, commit push, tạo/bỏ/rebase pull req, xử lý conflict,...; đọc dõ, rel note,...; phân tích req, issue,...; học hỏi coding convention, comment, license,...; tự viết tool..."
      />

      <Comment rating="4.0" text="Ẩn danh" date="2 tháng trước"
        comment="Môi trường năng động, phù hợp với sv mới ra trường.
        Training bài bản , nhất là khóa fresher"
      />

      <Comment rating="3.8" text="Ẩn danh" date="2 tháng trước"
        comment="Lương thấp, review tăng lương chậm và thấp.Mình ra ngoài làm lương tăng cao hơn nhiều"
      />

      <Comment rating="4.2" text="Ẩn danh" date="2 tháng trước"
        comment="Tình hình tháng trước e thực tập ở Fsoft (Inter). Mà nghe nói giờ fresher phải đống học phí 25m. Sinh viên mới ra trường làm gì có tiền :("
      />

      <Comment rating="3.8" text="Ẩn danh" date="2 tháng trước"
        comment="Lương thấp, review tăng lương chậm và thấp.Mình ra ngoài làm lương tăng cao hơn nhiều"
      />

      <Comment rating="4.2" text="Ẩn danh" date="2 tháng trước"
        comment="Tình hình tháng trước e thực tập ở Fsoft (Inter). Mà nghe nói giờ fresher phải đống học phí 25m. Sinh viên mới ra trường làm gì có tiền :("
      />
    </React.Fragment>
  )
}

const styles = {
  commentContainer: {
    boxShadow: "0 2px 4px #bbb",
    padding: "15px",
    borderRadius: "5px",
    marginTop: "15px",
    background: "#fff",
  },

  info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px"
  },

  iconContainer: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: "16px",
    color: "#FFD538",
    marginRight: "5px"
  },

  rating: {
    color: "#FFD538"
  },

  date: {
    color: "#bbb"
  },

  comment: {
    fontWeight: 300
  },
}