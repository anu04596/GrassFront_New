import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ERPPage from './pages/ERPPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';
import AIAutomationPage from './pages/AIAutomationPage';
import BIPage from './pages/BIPage';
import ProcurementPage from './pages/ProcurementPage';
import IntegrationPage from './pages/IntegrationPage';


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
        <Route path="/bi" element={<BIPage />} />
        <Route path="/procurement" element={<ProcurementPage />} />
        <Route path="/integration" element={<IntegrationPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}