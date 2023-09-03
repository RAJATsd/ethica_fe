import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import getUrl from "@/util/getUrl";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./styles.module.css";

const HomeContainer = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const handleAddReview = async (review) => {
    try {
      const addedReview = await axios.post(getUrl("review"), { review });
      const newReviews = [...reviews, addedReview.data.review];
      setReviews(newReviews);
      setIsReviewModalOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getReviews = async () => {
    try {
      const allReviews = await axios.get(getUrl("reviews"));
      setReviews(allReviews.data.reviews);
    } catch (e) {
      console.log(e);
    }
  };

  const upvoteOrDownvote = async (action, reviewId) => {
    try {
      const updatedReviews = await axios.put(getUrl("review/vote"), {
        action,
        reviewId,
      });

      setReviews(updatedReviews.data.reviews);
    } catch (e) {
      console.log(e);
    }
  };

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
        onSubmit={handleAddReview}
      />
      <ReviewList reviews={reviews} onUpvoteOrDownvote={upvoteOrDownvote} />
    </div>
  );
};

export default HomeContainer;
