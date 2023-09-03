import { useEffect, useState } from "react";

import Styles from "./styles.module.css";
import { CloseOutlined } from "@ant-design/icons";

const ReviewForm = ({ open, onClose, onSubmit }) => {
  const [review, setReview] = useState("");

  useEffect(() => {
    setReview("");
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  return open ? (
    <div className={Styles.reviewFormModal}>
      <div>
        <div className={Styles.closeHolder}>
          <span onClick={handleClose}>
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
        <div className={Styles.closeHolder} onClick={() => onSubmit(review)}>
          <button>Analyze and Save</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ReviewForm;
