import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PersonDetailPage } from "./pages/PersonDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/person/:id" element={<PersonDetailPage />} />
      </Routes>
    </Router>
  );
}
