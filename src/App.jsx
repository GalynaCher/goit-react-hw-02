import { useState, useEffect } from 'react'

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from './components/Feedback/Feedback';
import Notification from "./components/Notification/Notification";

function App() {

  const [newFeedbackState, setNewFeedbackState] = useState(() => {
    const savedState = window.localStorage.getItem("feedback-state");
    // console.log(`initial savedState: ${JSON.stringify(savedState)}`);
    if (savedState !== null) { 
      return JSON.parse(savedState);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(() => {
     window.localStorage.setItem("feedback-state", JSON.stringify(newFeedbackState));
    //  console.log(`Clicks changed - ${JSON.stringify(newFeedbackState)}`);
  }, [newFeedbackState]);

  const totalFeedback = newFeedbackState.good + newFeedbackState.neutral + newFeedbackState.bad;
  const positiveFeedback = Math.round((newFeedbackState.good / totalFeedback) * 100);
  
  const updateFeedback = (feedbackType) => {
    setNewFeedbackState(
      (prevFeedback) => ({ 
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
      })
    )
  }

  const resetFeedback = () => { 
    setNewFeedbackState({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  return (
    <>
      <Description />
      <Options updFeedback={ updateFeedback }
        totalFeedback={ totalFeedback }
        resetFeedback={ resetFeedback }
      />
      {totalFeedback > 0
        ?
        <Feedback feedb={newFeedbackState}
          totalFeedback={totalFeedback}
          positiveFeedback={ positiveFeedback }
        />
        :
        <Notification />
      }      
    </>
  )
}

export default App;


