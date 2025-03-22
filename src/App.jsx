
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Reports />} />
      {/* <Route path="/questions/:reportId" element={<Questions />} />  */}
      {/* <Route path="/" element={<QuestionPage />} /> */}
    </Routes>
  );
}

export default App;
