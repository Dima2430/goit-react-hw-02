import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
function App() {
  const [feedback, setFeedback] = useState({
    good: Number(localStorage.getItem("good")) || 0,
    neutral: Number(localStorage.getItem("neutral")) || 0,
    bad: Number(localStorage.getItem("bad")) || 0,
  });

  useEffect(() => {
    localStorage.setItem("good", feedback.good);
    localStorage.setItem("neutral", feedback.neutral);
    localStorage.setItem("bad", feedback.bad);
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback
    ? ((feedback.good / totalFeedback) * 100).toFixed(2)
    : 0;

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("good");
    localStorage.removeItem("neutral");
    localStorage.removeItem("bad");
  };

  return (
    <>
      <Description />
      <Options
        onGoodFeedback={() =>
          setFeedback({ ...feedback, good: feedback.good + 1 })
        }
        onNeutralFeedback={() =>
          setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
        }
        onBadFeedback={() =>
          setFeedback({ ...feedback, bad: feedback.bad + 1 })
        }
        onReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
