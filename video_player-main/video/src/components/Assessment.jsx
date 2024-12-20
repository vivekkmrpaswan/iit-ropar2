import React, { useState } from "react";

const Assessment = ({ assessment, onComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === assessment.correctAnswer.toLowerCase()) {
      setFeedback("Correct! Well done.");
      onComplete();
    } else {
      setFeedback("Incorrect. Please try again.");
    }
  };

  return (
    <div className="assessment-container">
      <h3>{assessment.question}</h3>
      {assessment.type === "multiple-choice" ? (
        assessment.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {option}
            </label>
          </div>
        ))
      ) : (
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer here..."
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Assessment;
