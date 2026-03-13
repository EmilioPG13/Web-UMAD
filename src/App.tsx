import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CarrerasPage from './pages/CarrerasPage';
import BecasPage from './pages/BecasPage';
import AdmisionesPage from './pages/AdmisionesPage';
import CostosPage from './pages/CostosPage';
import InstitucionPage from './pages/InstitucionPage';
import ContactoPage from './pages/ContactoPage';

function Layout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/carreras" element={<CarrerasPage />} />
            <Route path="/becas" element={<BecasPage />} />
            <Route path="/admisiones" element={<AdmisionesPage />} />
            <Route path="/costos" element={<CostosPage />} />
            <Route path="/institucion" element={<InstitucionPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
