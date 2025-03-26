import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Report.css"; 
import { FaCalendar } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

const sampleReports = [
  { id: 1, title: "Annual Report 2024", date: "14 March, 2024", progress: 0 },
  { id: 2, title: "Q4 Report 2024", date: "21 Feb, 2024", progress: 65 },
  { id: 3, title: "Q3 Report 2024", date: "15 Oct, 2024", progress: 75 },
  { id: 4, title: "Q2 Report 2024", date: "10 Aug, 2024", progress: 90 },
  { id: 5, title: "Q1 Report 2024", date: "18 Feb, 2024", progress: 100, status: "Submitted" }
];
const getProgressText = (progress) => {
  if (progress === 0) return { text: "Start", color: "red-text" };
  if (progress === 100) return { text: "View", color: "green-text" };
  return { text: "Edit", color: "yellow-text" };
};

const Reports = () => {
  const navigate = useNavigate();

  const getProgressColor = (progress) => {
    if (progress === 0) return "red";
    if (progress < 70) return "yellow";
    return "green";
  };

  return (
    <div className="reports-container">
      {/* Header Section */}
      <div className="header">
        <h1 className="logo">EasyDoc</h1>
        <h6>Your Reports</h6>
        <div className="icons">
          <span><IoIosNotifications fontSize={25} /></span> 
          <span onClick={() => navigate("/")}><IoMdExit fontSize={25} /></span> 
        </div>
      </div>

      {/* Reports List */}
      {sampleReports.map((report) => (
        <div 
          key={report.id} 
          className="report-card"  
          onClick={() => navigate(`/question/${report.id}`)} // 🔥 Redirect to question page
        >
          <div className="report-info">
            <span className="report-icon"><FaCalendar /></span>
            <div className="report-title-container">
              <h3>
                {report.title} 
                {report.status && <span className="submitted-text"> Submitted</span>}
              </h3>
              <p>{report.date}</p>
            </div>
          </div>
          
          {/* Progress Indicator */}
          <div className="report-progress">
  <span className={`progress-circle ${getProgressColor(report.progress)}`}>
    {report.progress}%
  </span>
  <span className={`progress-text ${getProgressText(report.progress).color}`}>
    {getProgressText(report.progress).text}
  </span>
  <MdOutlineArrowForwardIos fontSize={20} color="#9CA3AF" />
</div>

        </div>
      ))}
    </div>
  );
};

export default Reports;



// import React, { useState, useEffect } from "react";
// import { IoIosNotifications } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import "./Report.css"; 
// import { FaCalendar } from "react-icons/fa";
// import { MdOutlineArrowForwardIos } from "react-icons/md";
// import { IoMdExit } from "react-icons/io";
// import axios from "axios";  

// const Reports = () => {
//   const navigate = useNavigate();
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const response = await axios.get(" https://3fa4-2409-40d4-1072-25a9-4b60-4b91-70c2-8e4e.ngrok-free.app/api/method/easydoc.easydoc.doctype.questionnaire.questionnaire.get_assigned_questionnaires?user=rs21252125@gmail.com");  
//         setReports(response.data); 
//       } catch (err) {
//         setError("Failed to fetch reports.");
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchReports();
//   }, []);


//   const getProgressColor = (progress) => {
//     if (progress === 0) return "red";
//     if (progress < 70) return "yellow";
//     return "green";
//   };

//   return (
//     <div className="reports-container">
//       {/* ✅ Header Section */}
//       <div className="header">
//         <h1 className="logo">EasyDoc</h1>
//         <h6>Your Reports</h6>
//         <div className="icons">
//           <span><IoIosNotifications fontSize={25} /></span> 
//           <span onClick={() => navigate("/")}><IoMdExit fontSize={25} /></span> 
//         </div>
//       </div>

     
//       {error && <p className="error">{error}</p>}
      

//       {loading ? <p>Loading reports...</p> : (
//         reports.length > 0 ? (
//           reports.map((report) => (
//             <div 
//               key={report.id} 
//               className="report-card"  
//               onClick={() => navigate(`/question/${report.id}`)} 
//             >
//               <div className="report-info">
//                 <span className="report-icon"><FaCalendar /></span>
//                 <div className="report-title-container">
//                   <h3>
//                     {report.title} 
//                     {report.status && <span className="submitted-text"> Submitted</span>}
//                   </h3>
//                   <p>{report.date}</p>
//                 </div>
//               </div>
              
             
//               <div className="report-progress">
//                 <span className={`progress-circle ${getProgressColor(report.progress)}`}>
//                   {report.progress}%
//                 </span>
//                 <MdOutlineArrowForwardIos fontSize={20} color="grey" />
//               </div>
//             </div>
//           ))
//         ) : <p>No reports available.</p>
//       )}
//     </div>
//   );
// };

// export default Reports;
