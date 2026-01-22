import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import HighlighterLayout from "./layout/HighlighterLayout";
import HighlighterText from "./pages/HighlighterText";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Help from "./pages/Help";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/highlighter/text" />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="highlighter" element={<HighlighterLayout />}>
          <Route path="text" element={<HighlighterText />} />
          <Route path="how-it-works" element={<HowItWorks />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
}
export default App;
