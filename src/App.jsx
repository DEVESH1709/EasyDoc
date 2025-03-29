
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
// import QuestionPage from "./pages/QuestionPage";
import QuestionPage from "./pages/QuestionPage.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reports" element={<Reports />} />
      {/* <Route path="/questions/:reportId" element={<Questions />} />  */}
      <Route path="/question/:id" element={<QuestionPage />} />

    </Routes>

  );
}

export default App;
