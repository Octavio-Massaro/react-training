function NextButton({ dispatch, answer, index, numQuestion }) {
  if (answer === null) return;

  return (
    <button
      className={"btn btn-ui"}
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      {index < numQuestion - 1 ? "Next" : "Finish"}
    </button>
  );
}

export default NextButton;
