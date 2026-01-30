import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Drones from "./pages/Drones.jsx";
import DroneCategory from "./pages/DroneCategory";
import DroneDetail from "./pages/DroneDetail";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop.jsx';

const LANG_MAP = { en: 'en', ru: 'ru', kk: 'kk' };

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = LANG_MAP[i18n.language] || 'en';
  }, [i18n.language]);

  return (
    <Router>

      <div className="bg-black min-h-screen">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drones" element={<Drones />} />
            <Route path="/drones/:categorySlug" element={<DroneCategory />} />
            <Route path="/drones/:categorySlug/:droneSlug" element={<DroneDetail />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
