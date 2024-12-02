import React from 'react';
import BannerSection from './components/BannerSection';
import AboutSection from './components/AboutSection';
import CompetitionOverview from './components/CompetitionOverview';
import CompetitionPhases from './components/CompetitionPhases';
import LegalInfoSection from './components/LegalInfoSection';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';  // import AOS styles
import { useEffect } from 'react';
import EvaluationCriteria from './components/EvaluationCriteria';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,    // Animation duration (ms)
      easing: 'ease-in-out', // Easing function
      once: false,       // Whether animation should only happen once
      mirror: true,      // Enable animation when scrolling from bottom to top
    });
  }, []);

  return (
    <div>
      <BannerSection />
      <AboutSection />
      <CompetitionOverview />
      <CompetitionPhases />
      <EvaluationCriteria />
      <LegalInfoSection />
      <Footer />
    </div>
  );
};

export default App;

