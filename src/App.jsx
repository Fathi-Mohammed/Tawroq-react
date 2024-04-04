import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./Styles/main.scss";
import { Home , AboutUs , Services , Partners , ContactUs , ConsultationRequest} from "./Pages";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/consultationRequest" element={<ConsultationRequest />} />
      </Routes>
    </>
  );
}
