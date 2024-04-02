const Options = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
  onReset,
  totalFeedback,
}) => {
  return (
    <div>
      <button onClick={onGoodFeedback}>Good</button>
      <button onClick={onNeutralFeedback}>Neutral</button>
      <button onClick={onBadFeedback}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
