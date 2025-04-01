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




// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { IoMdExit, IoIosNotifications } from "react-icons/io";
// import { FaUserCircle, FaCalendar } from "react-icons/fa";
// import axios from "axios";
// import "./QuestionPage.css";
// import menu2 from "../assets/Path@1x (1).png";
// import menu1 from "../assets/SVG.svg";

// const QuestionPage = () => {
//   const { reportName } = useParams();
//   console.log("Report Name from URL:", reportName);
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [reports, setReports] = useState([]);
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch Reports List for Sidebar
//   useEffect(() => {
//     axios
//       .get("https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.questionnaire.questionnaire.get_assigned_questionnaires", {
//         headers: {
//           "Authorization": sessionStorage.getItem("user_token"),
//           "ngrok-skip-browser-warning": "true",
//         },
//         params: { user: sessionStorage.getItem("user") },
//       })
//       .then((res) => setReports(res.data.message.data))
//       .catch(() => setError("Failed to load reports."));
//   }, []);

//   // Fetch Questions for Selected Report
//   useEffect(() => {
//     if (!reportName) {
//       console.error("No reportName found!");
//       return;
//     }
  
//     console.log("Fetching questions for:", decodeURIComponent(reportName));
//     const decodedReportName = decodeURIComponent(reportName);
//     axios
//     .get("https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.question.question.get_questionnaire_questions", {
//       params: { questionnaire: decodedReportName },
//       headers: {
//         "Authorization": sessionStorage.getItem("user_token"),  // If needed
//         "ngrok-skip-browser-warning": "true",
//       }
//     })
//     .then((res) => {
//       console.log(" API Response:", res.data);
//       if (res.data && res.data.message) {
//         console.log(" Questions Data:", res.data.message.all_question);
//         setQuestions(res.data.message.all_question);
//       } else {
//         console.error(" API Response is invalid:", res.data);
//       }
//     })
//     .catch((err) => {
//       console.error(" Error fetching questions:", err);
//       if (err.response) {
//         console.error("API Error Response Data:", err.response.data);
//         console.error(" API Error Status:", err.response.status);
//       }
//       setError("Failed to load questions.");
//     })
//     .finally(() => setLoading(false));

//   }, [reportName]);


//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
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
//           <p>Back to Reports</p>
//         </div>

//         <div className="reports-list">
//           {reports.map((rep, index) => (
//             <div
//               key={index}
//               className={`report-item ${rep.name === decodeURIComponent(reportName) ? "active" : ""}`}
//               onClick={() => navigate(`/question/${encodeURIComponent(rep.name)}`)}
//             >
//               <span className="report-icon"><FaCalendar color="#DC76E5" /></span>
//               <div>
//                 <p>{rep.name}</p>
//                 <span>{rep.deadline_date}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="logout" onClick={() => navigate("/")}>
//           Logout <IoMdExit size={20} />
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="top-bar">
//           <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <img src={menu1} /> : <img src={menu2} />}
//           </span>
//           <h2>{decodeURIComponent(reportName)}</h2>
//           <IoIosNotifications size={25} color="#A855F7" />
//         </div>

//         {/* Question Box */}
//         {loading ? <p>Loading questions...</p> : error ? <p>{error}</p> : (
//           <>
//           <div className="question-box">
//   <h4>Question {currentQuestionIndex + 1}</h4>
//   <p>{questions[currentQuestionIndex]?.question_text}</p>

//   {questions[currentQuestionIndex]?.question_type === "mcq" && (
//     <div className="options">
//       {questions[currentQuestionIndex]?.options && questions[currentQuestionIndex]?.options.length > 0 ? (
//         questions[currentQuestionIndex]?.options.map((option, index) => (
//           <label key={index} className="option">
//             <input type="radio" name="answer" value={option} />
//             {option}
//           </label>
//         ))
//       ) : (
//         <p>Loading options...</p>
//       )}
//     </div>
//   )}

//   {questions[currentQuestionIndex]?.question_type === "file_upload" && (
//     <div className="file-upload">
//       <input type="file" accept="image/*,application/pdf" />
//     </div>
//   )}

//   {questions[currentQuestionIndex]?.question_type !== "mcq" &&
//     questions[currentQuestionIndex]?.question_type !== "file_upload" && (
//       <p>Unsupported question type</p>
//   )}
// </div>


//             {/* Navigation Buttons */}
//             <div className="question-nav">
//               <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</button>
//               <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuestionPage;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { IoMdExit, IoIosNotifications } from "react-icons/io";
// import { FaUserCircle, FaCalendar } from "react-icons/fa";
// import axios from "axios";
// import "./QuestionPage.css";
// import menu2 from "../assets/Path@1x (1).png";
// import menu1 from "../assets/SVG.svg";

// import { FaUpload } from "react-icons/fa";
// import { useRef } from "react";

// import tab from "../assets/ic-twotone-margin (1).svg"

// const QuestionPage = () => {
//   const { reportName } = useParams();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [reports, setReports] = useState([]);
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.questionnaire.questionnaire.get_assigned_questionnaires", {
//         headers: {
//           Authorization: sessionStorage.getItem("user_token"),
//           "ngrok-skip-browser-warning": "true",
//         },
//         params: { user: sessionStorage.getItem("user") },
//       })
//       .then((res) => setReports(res.data.message.data))
//       .catch(() => setError("Failed to load reports."));
//   }, []);

//   useEffect(() => {
//     if (!reportName) {
//       console.error("No reportName found!");
//       return;
//     }

//     const decodedReportName = decodeURIComponent(reportName);
//     axios
//       .get("https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.question.question.get_questionnaire_questions", {
//         params: { questionnaire: decodedReportName },
//         headers: {
//           Authorization: sessionStorage.getItem("user_token"),
//           "ngrok-skip-browser-warning": "true",
//         },
//       })
//       .then((res) => {
//         console.log(" API Response:", res.data);
//         if (res.data && res.data.message) {
//           setQuestions(res.data.message.all_question);
//         } else {
//           console.error("API Response is invalid:", res.data);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching questions:", err);
//         setError("Failed to load questions.");
//       })
//       .finally(() => setLoading(false));
//   }, [reportName]);

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
//   };

 

//   const fileInputRef = useRef(null);

//   const handleFileClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click(); // Triggers file input click
//     }
//   }

//   return (
//     <div className={`question-container ${menuOpen ? "menu-open" : ""}`}>
//       <div className={`sidebar ${menuOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <FaUserCircle size={50} />
//           <p>Username</p>
//         </div>
//         <div className="Back_report" onClick={() => navigate("/reports")}>
//           <p>Back to Reports</p>
//         </div>

//         <div className="reports-list">
//           {reports.map((rep, index) => (
//             <div
//               key={index}
//               className={`report-item ${rep.name === decodeURIComponent(reportName) ? "active" : ""}`}
//               onClick={() => navigate(`/question/${encodeURIComponent(rep.name)}`)}
//             >
//               <span className="report-icon"><FaCalendar color="#DC76E5" /></span>
//               <div>
//                 <p>{rep.name}</p>
//                 <span>{rep.deadline_date}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="logout" onClick={() => navigate("/")}>
//           Logout <IoMdExit size={20} />
//         </button>
//       </div>

//       <div className="main-content">
//         <div className="top-bar">
//           <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <img src={menu2} /> : <img src={menu1} />}
//           </span>
//           <h2>{decodeURIComponent(reportName)}</h2>
//           <IoIosNotifications size={25} color="#A855F7" />
//         </div>


//   <div className="container">
//       <div className="progress-bar">
//   {questions.slice(0, 4).map((_, index) => (
//     <React.Fragment key={index}>
//       <div
//         className={`progress-step ${
//           index < currentQuestionIndex ? "completed" : index === currentQuestionIndex ? "current" : ""
//         }`}
//       >
//         {index + 1}
//       </div>
//       {index < 3 && (
//         <div
//           className={`progress-line ${
//             index < currentQuestionIndex - 1 ? "completed-line" : index < currentQuestionIndex ? "current-line" : ""
//           }`}
//         />
//       )}
//     </React.Fragment>
//   ))}

//   {questions.length > 4 && (
//     <>
//       <div className="progress-dots">...</div>
//       <div
//         className={`progress-step ${
//           questions.length - 1 < currentQuestionIndex ? "completed" : questions.length - 1 === currentQuestionIndex ? "current" : ""
//         }`}
//       >
//         {questions.length}
//       </div>
//     </>
//   )}
// </div>




//         {loading ? <p>Loading questions...</p> : error ? <p>{error}</p> : (
//           <>
//             <div className="question-box">
//               <h4>Question {currentQuestionIndex + 1}</h4>
//               <p>{questions[currentQuestionIndex]?.question_text}</p>

//               {questions[currentQuestionIndex]?.question_type === "MCQ" && (
//                 <div className="options">
//                   {questions[currentQuestionIndex]?.mcq_options?.map((option, index) => (
//                     <label key={index} className="option">
//                       <input type={questions[currentQuestionIndex].multiselect ? "checkbox" : "radio"} name="answer" value={option} />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               )}

            
//               {questions[currentQuestionIndex]?.question_type === "File Upload" && (
//         <div className="file-upload-container">
//           {questions[currentQuestionIndex]?.file_labels?.map((label, index) => (
//             <div key={index} className="file-upload-option" onClick={handleFileClick}>
//               <div className="upload-icon">
//                 <FaUpload />
//               </div>
//               <span className="file-label">{label}</span>
//               <input
//                 type="file"
//                 accept="image/*,application/pdf"
//                 className="file-input"
//                 ref={fileInputRef}
//               />
//             </div>
//           ))}
//         </div>
//       )}
             
//               {questions[currentQuestionIndex]?.question_type === "Text Input" && (
//                 <div className="text-input">
//                   {questions[currentQuestionIndex]?.text_labels?.map((label, index) => (
//                     <div key={index} className="text-input-option">
//                       <label>{label}</label>
//                       <input type="text"  placeholder="Type here..."/>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {questions[currentQuestionIndex]?.question_type === "All" && (
//                 <>
//                   {questions[currentQuestionIndex]?.mcq_options?.length > 0 && (
//                     <div className="options">
//                       {questions[currentQuestionIndex].mcq_options.map((option, index) => (
//                         <label key={index} className="option">
//                           <input type="radio" name="answer" value={option} />
//                           {option}
//                         </label>
//                       ))}
//                     </div>
//                   )}

//                   {questions[currentQuestionIndex]?.file_labels?.length > 0 && (
//                     <div className="file-upload-container">
//                       {questions[currentQuestionIndex].file_labels.map((label, index) => (
//                         <div key={index} className="file-upload-option">
//                           <span>{label}</span>
//                           <input type="file" accept="image/*,application/pdf" />
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {questions[currentQuestionIndex]?.text_labels?.length > 0 && (
//                     <div className="text-input">
//                       {questions[currentQuestionIndex].text_labels.map((label, index) => (
//                         <div key={index} className="text-input-option">
//                           <label>{label}</label>
//                           <input type="text" />
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>

//             <div className="question-nav">
//               <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</button>
//               <div><img src={tab}></img></div>
//               <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
//             </div>
          
//           </>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionPage;
import React, { useState, useEffect, useRef } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { IoMdExit, IoIosNotifications } from "react-icons/io";
import { FaUserCircle, FaCalendar, FaUpload } from "react-icons/fa";
import axios from "axios";
import "./QuestionPage.css";
import menu2 from "../assets/Path@1x (1).png";
import menu1 from "../assets/SVG.svg";
import tab from "../assets/ic-twotone-margin (1).svg";
import { FaArrowLeft } from "react-icons/fa";
const QuestionPage = () => {
  const { reportName } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [reports, setReports] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const fileInputRef = useRef(null);
 
  const [fullname, setFullname] = useState("");
  const [userImage, setUserImage] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setFullname(sessionStorage.getItem("full_name") || "User");
    setUserImage(sessionStorage.getItem("userImage") || "");
  }, []);

  useEffect(() => {
    axios.get("https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.questionnaire.questionnaire.get_assigned_questionnaires", {
        headers: { Authorization: sessionStorage.getItem("user_token")

         
           
          
        },
        params: { user: sessionStorage.getItem("user") },
         withCredentials: true   // Moved outside of params
      })
      .then((res) => setReports(res.data.message.data))
      .catch(() => setError("Failed to load reports."));
  }, []);

  useEffect(() => {
    if (!reportName) return;
    const decodedReportName = decodeURIComponent(reportName);
    
    axios.get("https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.question.question.get_questionnaire_questions", {
        params: { questionnaire: decodedReportName },
        withCredentials: true   // Moved outside of params
      })
      .then((res) => {
        console.log(res.data)
         

        if (res.data && res.data.message) {
          console.log(res.data.message.all_question)
        
          sessionStorage.setItem("current_question",null) 
          sessionStorage.setItem("previous_question",null)
         
        if(res.data.message.all_question.length>1){
          sessionStorage.setItem("next_question",res.data.message.all_question[0].question_name) 
        }
        setQuestions(res.data.message.all_question);
          
        } else {
          console.error("API Response is invalid:", res.data);
        }
      })
      .catch(() => setError("Failed to load questions."))
      .finally(() => setLoading(false));
  }, [reportName]);



  const handleNext = (res, index, length) => {

    
sessionStorage.setItem("current_question", res[index].question_name);
if (index > 0) {
  sessionStorage.setItem("previous_question", res[index - 1].question_name);
}
if (index < length - 1) {
  sessionStorage.setItem("next_question", res[index + 1].question_name);
} else {
  sessionStorage.setItem("next_question", null);
}

    let formattedAnswer = {
      "MCQ": [],
      "File Input": [],
      "Text Input": []
    };
  
    const questionType = res[index].question_type;
    let userAnswer = answers[index] || []; 
  
    if (questionType === "MCQ") {
      formattedAnswer["MCQ"] = Array.isArray(userAnswer) ? userAnswer : [userAnswer]; 
    } else if (questionType === "File Input") {
      formattedAnswer["File Input"] = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    } else if (questionType === "Text Input") {
      formattedAnswer["Text Input"] = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    } else if (questionType === "ALL") {
      formattedAnswer = {
        "MCQ": answers[index]?.["MCQ"] || [],
        "File Input": answers[index]?.["File Input"] || [],
        "Text Input": answers[index]?.["Text Input"] || []
      };
    }
    console.log("Sending API request with:");
    console.log("questionnaire_response:", sessionStorage.getItem("questionnaire_response_name"));
    console.log("current_question:", sessionStorage.getItem("current_question"));
    console.log("next_or_pre_question:", sessionStorage.getItem("next_question"));
    console.log("formattedAnswer:", formattedAnswer);
    console.log("answers:", answers);

const question = sessionStorage.getItem("current_question");
if (!question) {
  console.error("Error: `current_question` is missing or null");
  return;  // Stop execution
}

    axios
      .post(
        "https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.questionnaire_response.questionnaire_response.save_answer",
        {
          questionnaire_response: sessionStorage.getItem("questionnaire_response_name"),
          question: sessionStorage.getItem("current_question"),
          answer: formattedAnswer,
          next_or_pre_question: sessionStorage.getItem("next_question")
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data) console.log(response);
  
       
      });
  
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowSummary(true);
    }
  };
  

  const handlePrev = (res,index,length) => {
    let formattedAnswer = {
      "MCQ": [],
      "File Input": [],
      "Text Input": []
    };
  
    const questionType = res[index].question_type;
    let userAnswer = answers[index] || []; 
  
    if (questionType === "MCQ") {
      formattedAnswer["MCQ"] = Array.isArray(userAnswer) ? userAnswer : [userAnswer]; 
    } else if (questionType === "File Input") {
      formattedAnswer["File Input"] = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    } else if (questionType === "Text Input") {
      formattedAnswer["Text Input"] = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
    } else if (questionType === "ALL") {
      formattedAnswer = {
        "MCQ": answers[index]?.["MCQ"] || [],
        "File Input": answers[index]?.["File Input"] || [],
        "Text Input": answers[index]?.["Text Input"] || []
      };
    }
  
    axios
      .post(
        "https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.questionnaire_response.questionnaire_response.save_answer",
        {
          questionnaire_response: sessionStorage.getItem("questionnaire_response_name"),
          question: sessionStorage.getItem("current_question"),
          answer: formattedAnswer,
          next_or_pre_question: sessionStorage.getItem("next_question")
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data) console.log(response);
  
        sessionStorage.setItem("current_question", res[index].question_name);
        if (index > 0) {
          sessionStorage.setItem("previous_question", res[index - 1].question_name);
        }
        if (index < length - 1) {
          sessionStorage.setItem("next_question", res[index + 1].question_name);
        } else {
          sessionStorage.setItem("next_question", null);
        }
      });
    
      if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
 
  const handleFileClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  

  const handleAnswerChange = (questionIndex, optionIndexOrValue, value = null) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
  
      if (questions[questionIndex].question_type === "MCQ") {
        if (questions[questionIndex].multiselect === 0) {
          // Checkbox (multi-select)
          if (newAnswers[questionIndex]?.includes(optionIndexOrValue)) {
            newAnswers[questionIndex] = newAnswers[questionIndex].filter(
              (option) => option !== optionIndexOrValue
            );
          } else {
            newAnswers[questionIndex] = [
              ...(newAnswers[questionIndex] || []),
              optionIndexOrValue,
            ];
          }
        } else {
          // Radio button (single select)
          newAnswers[questionIndex] = [optionIndexOrValue];
        }
      } else if (questions[questionIndex].question_type === "Text Input") {
        // Ensure the question array exists
        if (!newAnswers[questionIndex]) {
          newAnswers[questionIndex] = [];
        }
        // Update the specific text input field
        newAnswers[questionIndex][optionIndexOrValue] = value;
      }
  
      return newAnswers;
    });
  };
  
 

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`question-container ${menuOpen ? "menu-open" : ""}`}>
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
      <div className="sidebar-header">
          {userImage ? (
            <img src={userImage} alt="User" className="user-image" />
          ) : (
            <FaUserCircle size={50} />
          )}
          <p>{fullname}</p>
        </div>
        <div className="Back_report" onClick={() => navigate("/reports")}>
          <p>Back to Reports</p>
        </div>
        <div className="reports-list">
          {reports.map((rep, index) => (
            <div key={index} className={`report-item ${rep.name === decodeURIComponent(reportName) ? "active" : ""}`}
              onClick={() => navigate(`/question/${encodeURIComponent(rep.name)}`)}>
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

      <div className="main-content">
        <div className="top-bar">
          <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <img src={menu2} alt="menu" /> : <img src={menu1} alt="menu" />}
          </span>
          <h2>{decodeURIComponent(reportName)}</h2>
          <IoIosNotifications size={25} color="#A855F7" />
        </div>

        {showSummary ? (
          <div className="summary-page">
          
            <h2> <i onClick={() => setShowSummary(false)} style={{ cursor: "pointer" }}>
            <FaArrowLeft color="#8C3AC2" /></i> Summary</h2>
            <div className="summary-stats">
              <p>Total Questions: {questions.length}</p>
              <p>Answered: {currentQuestionIndex + 1}</p>
              <p>Skipped: {questions.length - (currentQuestionIndex + 1)}</p>
            </div>
            <p className="sub">Are you want to submit?</p>
            <button onClick={() => navigate("/submit")}>Submit</button>
          </div>
        ) : (

          
          <>
         

            <div className="progress-bar">
  {questions.slice(0, 4).map((_, index) => (
    <React.Fragment key={index}>
      <div
        className={`progress-step ${
          index < currentQuestionIndex ? "completed" : index === currentQuestionIndex ? "current" : ""
        }`}
      >
        {index + 1}
      </div>
      {index < 3 && (
        <div
          className={`progress-line ${
            index < currentQuestionIndex - 1 ? "completed-line" : index < currentQuestionIndex ? "current-line" : ""
          }`}
        />
      )}
    </React.Fragment>
  ))}

  {questions.length > 4 && (
    <>
      <div className="progress-dots">...</div>
      <div
        className={`progress-step ${
          questions.length - 1 < currentQuestionIndex ? "completed" : questions.length - 1 === currentQuestionIndex ? "current" : ""
        }`}
      >
        {questions.length}
      </div>
    </>
  )}
</div>



            <div className="question-box">
              <h4>Question {currentQuestionIndex + 1}</h4>
              <p>{questions[currentQuestionIndex]?.question_text}</p>

              {questions[currentQuestionIndex]?.question_type === "MCQ" && (
  <div className="options">
    {questions[currentQuestionIndex]?.mcq_options?.map((option, index) => (
      <label key={index} className="option">
        <input
          type={questions[currentQuestionIndex].multiselect === 1 ? "checkbox" : "radio"}
          name={`question-${currentQuestionIndex}`}
          value={option}
          checked={answers[currentQuestionIndex]?.includes(option) || false}
          onChange={() => handleAnswerChange(currentQuestionIndex, option)}
        />
        {option}
      </label>
    ))}
  </div>
)}

{questions[currentQuestionIndex]?.question_type === "File Upload" && (
  <div className="file-upload-container">
    {questions[currentQuestionIndex]?.file_labels?.map((label, index) => (
      <div key={index} className="file-upload-option" onClick={handleFileClick}>
        <div className="upload-icon"><FaUpload /></div>
        <span className="file-label">{label}</span>
        <input type="file" accept="image/*,application/pdf" className="file-input" ref={fileInputRef} />
      </div>
    ))}
  </div>
)}

{questions[currentQuestionIndex]?.question_type === "Text Input" && (
  <div className="text-input">
    {questions[currentQuestionIndex]?.text_labels?.map((label, index) => (
      <div key={index} className="text-input-option">
        <label>{label}</label>
        <input
          type="text"
          placeholder="Type here..."
          value={answers[currentQuestionIndex]?.[index] || ""} // Get value for each label
          onChange={(e) => handleAnswerChange(currentQuestionIndex, index, e.target.value)} // Pass value to the handler
        />
      </div>
    ))}
  </div>
)}

{questions[currentQuestionIndex]?.question_type === "All" && (
  <>
    {questions[currentQuestionIndex]?.mcq_options?.length > 0 && (
      <div className="options">
        {questions[currentQuestionIndex].mcq_options.map((option, index) => (
          <label key={index} className="option">
            <input type="radio" name="answer" value={option} />
            {option}
          </label>
        ))}
      </div>
    )}

    {questions[currentQuestionIndex]?.file_labels?.length > 0 && (
      <div className="file-upload-container">
        {questions[currentQuestionIndex].file_labels.map((label, index) => (
          <div key={index} className="file-upload-option">
            <span>{label}</span>
            <input type="file" accept="image/*,application/pdf" />
          </div>
        ))}
      </div>
    )}

    {questions[currentQuestionIndex]?.text_labels?.length > 0 && (
      <div className="text-input">
        {questions[currentQuestionIndex].text_labels.map((label, index) => (
          <div key={index} className="text-input-option">
            <label>{label}</label>
            <input type="text" />
          </div>
        ))}
      </div>
    )}
  </>
)}

               
            </div>

            <div className="question-nav">
              <button onClick={()=>handlePrev(questions,currentQuestionIndex,questions.length)} disabled={currentQuestionIndex === 0}>Prev</button>
              <div><img src={tab} alt="progress" /></div>
              <button onClick={()=>handleNext(questions,currentQuestionIndex,questions.length)} >{currentQuestionIndex === questions.length - 1 ? "Finish" : "Save&Next"}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
