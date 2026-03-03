import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Strength from './pages/Strength';
import CorporateStructure from './pages/CorporateStructure';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsGroup1 from './pages/ProjectsGroup1';
import ProjectsGroup2 from './pages/ProjectsGroup2';
import ProjectsGroup3 from './pages/ProjectsGroup3';
import MajorProjects from './pages/MajorProjects';
import MidProjects from './pages/MidProjects';
import LargeProjects from './pages/LargeProjects';
import CertificationsPage from './pages/CertificationsPage';
import EnterpriseServicesPage from './pages/EnterpriseServicesPage';
import InfrastructureBrickServicesPage from './pages/InfrastructureBrickServicesPage';
import WorkforceManagedServicesPage from './pages/WorkforceManagedServicesPage';
import Contact from './pages/Contact';
import Preloader from './components/common/Preloader';
import ScrollIndicator from './components/common/ScrollIndicator';

function AppContent() {
  const location = useLocation();
  const [isPreloading, setIsPreloading] = useState(true);

  React.useEffect(() => {
    const titleMap = {
      '/': 'HPE IT Solutions | Enterprise Infrastructure',
      '/about': 'About Us | HPE IT Solutions',
      '/vision-mission': 'Vision & Mission | HPE IT Solutions',
      '/strength': 'Our Strength | HPE IT Solutions',
      '/corporate-structure': 'Corporate Structure | HPE IT Solutions',
      '/services': 'Our Services | HPE IT Solutions',
      '/services/enterprise': 'Enterprise IT Services | HPE IT Solutions',
      '/services/infrastructure': 'Infrastructure & Brick Services | HPE IT Solutions',
      '/services/workforce': 'Workforce & Managed Services | HPE IT Solutions',
      '/projects': 'Project Portfolio | HPE IT Solutions',
      '/projects/major': 'Major Projects | HPE IT Solutions',
      '/projects/mid': 'Mid Projects | HPE IT Solutions',
      '/projects/large': 'Large Projects | HPE IT Solutions',
      '/certifications': 'Certifications | HPE IT Solutions',
      '/contact': 'Contact Us | HPE IT Solutions',
    };
    document.title = titleMap[location.pathname] || 'HPE IT Solutions';
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#011b26] flex flex-col transition-colors duration-300">
      {/* Preloader always renders on top; once done it unmounts */}
      {isPreloading && <Preloader onFinish={() => setIsPreloading(false)} />}

      {/* Hide everything else while the video is playing */}
      {!isPreloading && (
        <>
          <Navbar />
          <main className="flex-grow transition-all duration-500 pt-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/strength" element={<Strength />} />
              <Route path="/corporate-structure" element={<CorporateStructure />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/enterprise" element={<EnterpriseServicesPage />} />
              <Route path="/services/infrastructure" element={<InfrastructureBrickServicesPage />} />
              <Route path="/services/workforce" element={<WorkforceManagedServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/group-1" element={<ProjectsGroup1 />} />
              <Route path="/projects/group-2" element={<ProjectsGroup2 />} />
              <Route path="/projects/group-3" element={<ProjectsGroup3 />} />
              <Route path="/projects/major" element={<MajorProjects />} />
              <Route path="/projects/mid" element={<MidProjects />} />
              <Route path="/projects/large" element={<LargeProjects />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ScrollIndicator />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <AppContent />
    </Router>
  );
}

export default App;
