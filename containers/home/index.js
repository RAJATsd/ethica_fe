import ReviewForm from "@/components/ReviewForm";
import { useState } from "react";
import Styles from "./styles.module.css";

const HomeContainer = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  return (
    <div>
      <div className={Styles.movieAndButtonContainer}>
        <div className={Styles.movieName}>THE MOVIE</div>
        <div>
          <button onClick={() => setIsReviewModalOpen(true)}>
            Add movie review
          </button>
        </div>
      </div>
      <ReviewForm
        open={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
    </div>
  );
};

export default HomeContainer;
