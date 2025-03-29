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


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { IoMdExit, IoMdMenu } from "react-icons/io";
// import { IoIosNotifications } from "react-icons/io";
// import { FaUserCircle, FaCalendar } from "react-icons/fa";
// import "./QuestionPage.css";
// // import { RxHamburgerMenu } from "react-icons/rx";
// import menu2 from "../assets/Path@1x (1).png"
// import menu1 from "../assets/SVG.svg"
// const sampleReports = [
//   { id: 1, title: "Annual Report 2024", date: "14 March, 2024" },
//   { id: 2, title: "Q4 Report 2024", date: "21 Feb, 2024" },
//   { id: 3, title: "Q3 Report 2024", date: "15 Oct, 2024" }
// ];

// const sampleQuestions = {
//   1: [{ id: 1, question: "What was the company's total revenue growth in 2024?", options: ["30%", "20%", "40%", "50%"] },{ id: 2, question: "What was the company's total revenue growth in 2024?", options: ["30%", "20%", "40%", "50%"] }],
//   2: [{ id: 1, question: "What was the profit margin in Q4?", options: ["15%", "20%", "25%", "30%"] }],
//   3: [{ id: 1, question: "How many new customers were acquired in Q3?", options: ["500", "1000", "1500", "2000"] }]
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
//     <div className={`question-container ${menuOpen ? "menu-open" : ""}`}>
//       {/* Sidebar */}
//       <div className={`sidebar ${menuOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <FaUserCircle size={50} />
//           <p>Username</p>
//         </div>
//         <div className="Back_report" onClick={() => navigate("/reports")}> 
//   <p>Back to Reports</p>
// </div>


//         <div className="reports-list">
//           {sampleReports.map((rep) => (
//             <div
//               key={rep.id}
//               className={`report-item ${rep.id === parseInt(id) ? "active" : ""}`}
//               onClick={() => navigate(`/question/${rep.id}`)}
//             >
//              <span className="report-icon"> <FaCalendar color="#DC76E5"/></span>
//               <div>
//                 <p>{rep.title}</p>
//                 <span>{rep.date}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="logout" onClick={() => navigate("/")}>
//         Logout   <IoMdExit size={20} />
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="top-bar">
//           <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <img src={menu1}  ></img> : <img src={menu2} ></img>}
//           </span>
//           <h2>{report.title}</h2>
//           <IoIosNotifications size={25}  color="#A855F7"/>
//         </div>

//          {/* Progress Steps */}
//          <div className="progress-bar">
//            {[1, 2, 3, 4].map((step, index) => (
//              <React.Fragment key={step}>
//                <span className={`step ${step === 1 ? "active" : ""}`}>{step}</span>
//                {index !== 3 && <div className={`progress-line ${step === 1 ? "filled" : ""}`}></div>}
//              </React.Fragment>
//         ))}
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




import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdExit, IoIosNotifications } from "react-icons/io";
import { FaUserCircle, FaCalendar } from "react-icons/fa";
import axios from "axios";
import "./QuestionPage.css";
import menu2 from "../assets/Path@1x (1).png";
import menu1 from "../assets/SVG.svg";

const QuestionPage = () => {
  const { reportName } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [reports, setReports] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Reports List for Sidebar
  useEffect(() => {
    axios
      .get("https://8efd-2409-40d4-310f-e5df-2495-e480-433e-7bb8.ngrok-free.app/api/method/easydoc.easydoc.doctype.questionnaire.questionnaire.get_assigned_questionnaires", {
        headers: {
          "Authorization": sessionStorage.getItem("user_token"),
          "ngrok-skip-browser-warning": "true",
        },
        params: { user: sessionStorage.getItem("user") },
      })
      .then((res) => setReports(res.data.message.data))
      .catch(() => setError("Failed to load reports."));
  }, []);

  // Fetch Questions for Selected Report
  useEffect(() => {
    if (!reportName) return;
    axios
      .get("https://8efd-2409-40d4-310f-e5df-2495-e480-433e-7bb8.ngrok-free.app/api/method/easydoc.easydoc.doctype.question.question.get_questionnaire_questions", {
        params: { questionnaire: decodeURIComponent(reportName) },
      })
      .then((res) => setQuestions(res.data.message.all_question))
      .catch(() => setError("Failed to load questions."))
      .finally(() => setLoading(false));
  }, [reportName]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <div className={`question-container ${menuOpen ? "menu-open" : ""}`}>
      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <FaUserCircle size={50} />
          <p>Username</p>
        </div>
        <div className="Back_report" onClick={() => navigate("/reports")}>
          <p>Back to Reports</p>
        </div>

        <div className="reports-list">
          {reports.map((rep, index) => (
            <div
              key={index}
              className={`report-item ${rep.name === decodeURIComponent(reportName) ? "active" : ""}`}
              onClick={() => navigate(`/question/${encodeURIComponent(rep.name)}`)}
            >
              <span className="report-icon"><FaCalendar color="#DC76E5" /></span>
              <div>
                <p>{rep.name}</p>
                <span>{rep.deadline_date}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="logout" onClick={() => navigate("/")}>
          Logout <IoMdExit size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <img src={menu1} /> : <img src={menu2} />}
          </span>
          <h2>{decodeURIComponent(reportName)}</h2>
          <IoIosNotifications size={25} color="#A855F7" />
        </div>

        {/* Question Box */}
        {loading ? <p>Loading questions...</p> : error ? <p>{error}</p> : (
          <>
            <div className="question-box">
              <h4>Question {currentQuestionIndex + 1}</h4>
              <p>{questions[currentQuestionIndex]?.question_text}</p>
              <div className="options">
                {questions[currentQuestionIndex]?.options?.map((option, index) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
