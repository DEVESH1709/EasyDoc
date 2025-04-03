
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
    const questionnaireResponseName = sessionStorage.getItem("questionnaire_response_name");

    if (!questionnaireResponseName) {
        console.error("❌ Error: Missing questionnaire_response_name in session storage!");
        return;
    }

    axios.post(
        "https://doradoritesting.frappe.cloud/api/method/easydoc.easydoc.doctype.questionnaire_response.questionnaire_response.get_answers",
        { questionnaire_response: questionnaireResponseName },
        { 
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Expect": ""  // Remove the 'Expect' header
            }
        }
    )
    .then(response => {
        console.log("✅ Fetched Answers:", response.data.message);
        
        if (response.data.message && response.data.message.answers) {
            setAnswers(response.data.message.answer); // Load previous answers into state
        } else {
            console.warn("⚠️ No answers found in API response.");
        }
    })
    .catch(error => { 
        console.error("❌ Error fetching saved answers:", error);
    });
}, []);







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
      
    
    const question = sessionStorage.getItem("current_question");
    if (!question) {
      console.error("Error: current_question is missing or null");
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
              console.log(response.data.message.next_or_pre_question_answer)
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
        if (questions[questionIndex].multiselect === 1) {
          // Multi-select (checkbox)
          if (newAnswers[questionIndex]?.includes(optionIndexOrValue)) {
            // Deselect the option if it's already selected
            newAnswers[questionIndex] = newAnswers[questionIndex].filter(
              (option) => option !== optionIndexOrValue
            );
          } else {
            // Select the option if it's not selected
            newAnswers[questionIndex] = [
              ...(newAnswers[questionIndex] || []),
              optionIndexOrValue,
            ];
          }
        } else {
          // Single-select (radio)
          newAnswers[questionIndex] = [optionIndexOrValue];
        }
      } else if (questions[questionIndex].question_type === "Text Input") {
        // Text input handling
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

              {/* {questions[currentQuestionIndex]?.question_type === "MCQ" && (
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
)} */}

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
