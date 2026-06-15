import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ERPPage from './pages/ERPPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';
import AIAutomationPage from './pages/AIAutomationPage';
import HospitalityRestaurantsPage from './pages/HospitalityRestaurantsPage';
import ManufacturingPage from './pages/ManufacturingPage';
import RetailPage from './pages/RetailPage';
import LogisticsPage from './pages/LogisticsPage';
import ProfessionalServicesPage from './pages/ProfessionalServicesPage';
import './shared.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/erp" element={<ERPPage />} />
        <Route path="/custom-software" element={<CustomSoftwarePage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/hospitality-restaurants" element={<HospitalityRestaurantsPage />} />
        <Route path="/manufacturing" element={<ManufacturingPage />} />
        <Route path="/retail" element={<RetailPage />} />
        <Route path="/logistics" element={<LogisticsPage />} />
        <Route path="/professional-services" element={<ProfessionalServicesPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}