import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AboutUs } from "./pages/AboutUs/AboutUs.jsx";
import { EmailIndex } from "./pages/EmailIndex/EmailIndex.jsx";
import { EmailDetails } from "./cmps/EmailDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/:folder" element={<EmailIndex />}>
            <Route patuh="/:folder/:emailId" element={<EmailDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
