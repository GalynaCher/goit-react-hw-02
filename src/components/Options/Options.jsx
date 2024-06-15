import css from "./Options.module.css";

const Options = ({ updFeedback, totalFeedback, resetFeedback }) => {           
    return (
        <div className={css.buttons}>
            <button onClick={() => updFeedback('good')}>Good</button>
            <button onClick={() => updFeedback('neutral')}>Neutral</button>
            <button onClick={() => updFeedback('bad')}>Bad</button>
            {totalFeedback > 0
                ? 
                <button onClick={() => resetFeedback()}>Reset</button>
                : ''
            }
        </div>
    )
}
 
export default Options;