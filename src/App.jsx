import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import TypedSec from "./layout/typed section/TypedSec";
import TermsConditions from "./layout/footer/FooterLinks/TermsConditions";
import ProgressWrap from "./Components/progress-wrap/ProgressWrap";
import ContentLogo from "./Components/content/ContentLogo";
import PrivacyPolicy from "./layout/footer/FooterLinks/PrivacyPolicy";
import ReturnPolicy from "./layout/footer/FooterLinks/ReturnPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/about us/AboutUs";
import Portfolio from "./pages/portfolio/Portfolio";
import Pricing from "./pages/pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
    <Router>
      <Header />
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={<Home />}/>
        {/* صفحات المعلومات عننا*/}
        <Route path="/about-us" element={<AboutUs />} />
        {/* صفحات المشاريع*/}
        <Route path="/portfolio" element={<Portfolio />} />
        {/* صفحات اسعار الاستضافه*/}
        <Route path="/pricing" element={<Pricing />} />
        {/*صفحات تواصل معنا*/}
        <Route path="/contact" element={<Contact />} />
        {/* صفحات الشروط والأحكام */}
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-refund-policy" element={<ReturnPolicy />} />
      </Routes>
      <TypedSec />
      <Footer />
      <ContentLogo />
      <ProgressWrap />
    </Router>
    </HelmetProvider>
  );
}

export default App;
