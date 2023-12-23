import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ContactUsPage from "./components/pages/ContactUsPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ServicesPage from "./components/pages/ServicesPage";
import NavBarComponent from "./components/modules/NavBarComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
