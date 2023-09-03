import dateAndTimeConverter from "@/util/dateAndTime";
import { DownCircleTwoTone, UpCircleTwoTone } from "@ant-design/icons";
import Styles from "./styles.module.css";

const ReviewList = ({ reviews, onUpvoteOrDownvote }) => {
  return (
    <div className={Styles.reviewTableContainer}>
      <table className={Styles.reviewTable}>
        <thead>
          <tr>
            <th>Review</th>
            <th>Sentiment</th>
            <th>Date and Time</th>
            <th>Upvotes</th>
            <th>Downvotes</th>
          </tr>
        </thead>
        <tbody>
          {reviews
            ? reviews?.map(
                ({ id, text, time, sentiment, upvotes, downvotes }) => (
                  <tr key={id}>
                    <td>{text}</td>
                    <td>{sentiment}</td>
                    <td>{dateAndTimeConverter(time)}</td>
                    <td>
                      <div className={Styles.voteContainer}>
                        <span onClick={() => onUpvoteOrDownvote("upvote", id)}>
                          <UpCircleTwoTone style={{ fontSize: "20px" }} />
                        </span>
                        {upvotes}
                      </div>
                    </td>
                    <td>
                      <div className={Styles.voteContainer}>
                        <span
                          onClick={() => onUpvoteOrDownvote("downvote", id)}
                        >
                          <DownCircleTwoTone style={{ fontSize: "20px" }} />
                        </span>
                        {downvotes}
                      </div>
                    </td>
                  </tr>
                )
              )
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewList;
