import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}
