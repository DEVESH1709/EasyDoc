// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { IoMdExit } from "react-icons/io";
// import { IoIosNotifications } from "react-icons/io";
// import { FaUserCircle, FaCalendar } from "react-icons/fa";
// import "./QuestionPage.css";
// import { IoMdMenu } from "react-icons/io";
// const sampleReports = [
//   { id: 1, title: "Annual Report 2024", date: "14 March, 2024" },
//   { id: 2, title: "Q4 Report 2024", date: "21 Feb, 2024" },
//   { id: 3, title: "Q3 Report 2024", date: "15 Oct, 2024" }
// ];

// const sampleQuestions = {
//   1: [
//     { id: 1, question: "What was the company's total revenue growth in 2024?", options: ["30%", "20%", "40%", "50%"] }
//   ],
//   2: [
//     { id: 1, question: "What was the profit margin in Q4?", options: ["15%", "20%", "25%", "30%"] }
//   ],
//   3: [
//     { id: 1, question: "How many new customers were acquired in Q3?", options: ["500", "1000", "1500", "2000"] }
//   ]
// };

// const QuestionPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   const report = sampleReports.find((r) => r.id === parseInt(id));
//   const questions = sampleQuestions[id] || [];

//   if (!report) return <h1>Report Not Found</h1>;

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   return (
//     <div className="question-container">
//       {/* Sidebar */}
//       <div className={`sidebar ${menuOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <FaUserCircle size={50} />
//           <p>Username</p>
//         </div>

//         <div className="reports-list">
//           {sampleReports.map((rep) => (
//             <div
//               key={rep.id}
//               className={`report-item ${rep.id === parseInt(id) ? "active" : ""}`}
//               onClick={() => navigate(`/question/${rep.id}`)}
//             >
//               <FaCalendar />
//               <div>
//                 <p>{rep.title}</p>
//                 <span>{rep.date}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="logout" onClick={() => navigate("/")}>
//           <IoMdExit size={20} /> Logout
//         </button>
//       </div>

//       {/* Main Question Area */}
//       <div className="main-content">
//         <div className="top-bar">
//           <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <IoMdMenu /> : "|||"}
//           </span>
//           <h2>{report.title}</h2>
//           <IoIosNotifications size={25} />
//         </div>

//         {/* Progress Steps */}
//         <div className="progress-bar">
//           {[1, 2, 3, 4].map((step, index) => (
//             <React.Fragment key={step}>
//               <span className={`step ${step === 1 ? "active" : ""}`}>{step}</span>
//               {index !== 3 && <div className={`progress-line ${step === 1 ? "filled" : ""}`}></div>}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Question Box */}
//         <div className="question-box">
//           <h4>Question {currentQuestionIndex + 1}</h4>
//           <p>{questions[currentQuestionIndex]?.question}</p>
//           <div className="options">
//             {questions[currentQuestionIndex]?.options.map((option, index) => (
//               <label key={index} className="option">
//                 <input type="radio" name="answer" />
//                 {option}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="question-nav">
//           <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</button>
//           <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionPage;


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdExit, IoMdMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle, FaCalendar } from "react-icons/fa";
import "./QuestionPage.css";

const sampleReports = [
  { id: 1, title: "Annual Report 2024", date: "14 March, 2024" },
  { id: 2, title: "Q4 Report 2024", date: "21 Feb, 2024" },
  { id: 3, title: "Q3 Report 2024", date: "15 Oct, 2024" }
];

const sampleQuestions = {
  1: [{ id: 1, question: "What was the company's total revenue growth in 2024?", options: ["30%", "20%", "40%", "50%"] }],
  2: [{ id: 1, question: "What was the profit margin in Q4?", options: ["15%", "20%", "25%", "30%"] }],
  3: [{ id: 1, question: "How many new customers were acquired in Q3?", options: ["500", "1000", "1500", "2000"] }]
};

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const report = sampleReports.find((r) => r.id === parseInt(id));
  const questions = sampleQuestions[id] || [];

  if (!report) return <h1>Report Not Found</h1>;

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className={`question-container ${menuOpen ? "menu-open" : ""}`}>
      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FaUserCircle size={50} />
          <p>Username</p>
        </div>

        <div className="reports-list">
          {sampleReports.map((rep) => (
            <div
              key={rep.id}
              className={`report-item ${rep.id === parseInt(id) ? "active" : ""}`}
              onClick={() => navigate(`/question/${rep.id}`)}
            >
              <FaCalendar />
              <div>
                <p>{rep.title}</p>
                <span>{rep.date}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="logout" onClick={() => navigate("/")}>
        Logout   <IoMdExit size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdMenu color="#A855F7"  /> : "|||"}
          </span>
          <h2>{report.title}</h2>
          <IoIosNotifications size={25} />
        </div>

         {/* Progress Steps */}
         <div className="progress-bar">
           {[1, 2, 3, 4].map((step, index) => (
             <React.Fragment key={step}>
               <span className={`step ${step === 1 ? "active" : ""}`}>{step}</span>
               {index !== 3 && <div className={`progress-line ${step === 1 ? "filled" : ""}`}></div>}
             </React.Fragment>
        ))}
        </div>

        {/* Question Box */}
        <div className="question-box">
          <h4>Question {currentQuestionIndex + 1}</h4>
          <p>{questions[currentQuestionIndex]?.question}</p>
          <div className="options">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <label key={index} className="option">
                <input type="radio" name="answer" />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="question-nav">
          <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</button>
          <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
