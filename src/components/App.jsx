import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

function App() {
  const [good, setGood] = useState(localStorage.getItem("good") || 0);
  const [neutral, setNeutral] = useState(localStorage.getItem("neutral") || 0);
  const [bad, setBad] = useState(localStorage.getItem("bad") || 0);

  useEffect(() => {
    localStorage.setItem("good", good);
    localStorage.setItem("neutral", neutral);
    localStorage.setItem("bad", bad);
  }, [good, neutral, bad]);

  const totalFeedback = Number(good) + Number(neutral) + Number(bad) ;
  const positivePercentage = totalFeedback
    ? ((good / totalFeedback) * 100).toFixed(2)
    : 0;

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    localStorage.clear();
  };

  return (
    <>
      <Description />
      <Options
        good={() => setGood(Number(good) + 1)}
        neutral={() => setNeutral(Number(neutral) + 1)}
        bad={() => setBad(Number(bad) + 1)}
        reset={handleReset}
      />
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
      />
    </>
  );
}

export default App;
