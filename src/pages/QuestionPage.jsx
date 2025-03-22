


import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./QuestionPage.css";
import { IoMdMenu } from "react-icons/io";

const questions = [
  {
    id: 1,
    question: "What was the company's total revenue growth in 2024?",
    options: [
      "30% year-over-year increase",
      "20% year-over-year increase",
      "30% year-over-year increase",
      "30% year-over-year increase",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "What was the company's net profit margin in 2024?",
    options: [
      "10% increase",
      "15% increase",
      "20% increase",
      "25% increase",
    ],
    correct: 2,
  },
  {
    id: 3,
    question: "How much did operational expenses decrease in 2024?",
    options: [
      "5% decrease",
      "10% decrease",
      "15% decrease",
      "20% decrease",
    ],
    correct: 1,
  },
  {
    id: 4,
    question: "What was the company's market share in 2024?",
    options: [
      "20%",
      "25%",
      "30%",
      "35%",
    ],
    correct: 2,
  },
];

const QuestionPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null); 
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="question-container">
    <div className="headered">
  <div className="menu-icon"> <IoMdMenu /> <h2>Annual Report 2024</h2></div>
 
  <IoIosNotifications className="notification-icon" fontSize={20} />
</div>


   
      <div className="progress-bar">
        {questions.map((_, index) => (
          <div key={index} className={`step ${index <= currentQuestion ? "active" : ""}`}>
            {index + 1}
          </div>
        ))}
      </div>

      <div className="question-box">
        <h3>Question {currentQuestion + 1}</h3>
        <p>{questions[currentQuestion].question}</p>

        {questions[currentQuestion].options.map((option, index) => (
          <label key={index} className="option">
            <input
              type="radio"
              name="answer"
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
            />
            <span className="custom-radio"></span>
            {option}
          </label>
        ))}
      </div>

  
      <div className="navigation-buttons">
        <button className="prev-btn" onClick={handlePrev} disabled={currentQuestion === 0}>
          Prev
        </button>
        <button className="next-btn" onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
