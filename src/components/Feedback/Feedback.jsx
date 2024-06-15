import css from "./Feedback.module.css";

const Feedback = ({ feedb, totalFeedback, positiveFeedback }) => { 

    return (
        <div className={css.feedbacks}>
            <p>Good: {feedb.good} </p>
            <p>Neutral: {feedb.neutral}</p>
            <p>Bad: {feedb.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedback}%</p>
            </div>
    );
}

export default Feedback;