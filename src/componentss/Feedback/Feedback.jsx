const Feedback = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div>
      Good: {good} <br />
      Neutral: {neutral} <br />
      Bad: {bad} <br />
      Total: {totalFeedback} <br />
      Positive: {positivePercentage}%
    </div>
  );
};

export default Feedback;
