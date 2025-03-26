import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/pages/Start.jsx"
import DietaryRestrictionsPage from "./components/pages/DietaryRestrictions.jsx";
import Quiz from "./components/pages/Quiz.jsx";
import ResultsLanding from "./components/pages/ResultsLanding.jsx";
import ResultsDetailed from "./components/pages/ResultsDetailed.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/dietary" element={<DietaryRestrictionsPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results/:resultId" element={<ResultsLanding />} />
        <Route
          path="/results/:resultId/detailed"
          element={<ResultsDetailed />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
