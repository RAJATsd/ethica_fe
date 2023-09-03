import Styles from "./styles.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const ReviewForm = ({ open, onClose }) => {
  const [review, setReview] = useState("");

  return open ? (
    <div className={Styles.reviewFormModal}>
      <div>
        <div className={Styles.closeHolder}>
          <span onClick={onClose}>
            <CloseOutlined />
          </span>
        </div>
        <div>
          <textarea
            placeholder="Write your movie review here"
            className={Styles.reviewInput}
            rows={25}
            value={review}
            onChange={(evt) => setReview(evt.target.value)}
          />
        </div>
        <div className={Styles.closeHolder}>
          <button>Save and analyze</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ReviewForm;
