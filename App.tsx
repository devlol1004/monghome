
import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Insight from './sections/Insight';
import Solution from './sections/Solution';
import HowItWorks from './sections/HowItWorks';
import DigitalPassport from './sections/DigitalPassport';
import CarbonTraceability from './sections/CarbonTraceability';
import AeoSeo from './sections/AeoSeo';
import Compliance from './sections/Compliance';
import UseCase from './sections/UseCase';
import Patents from './sections/Patents';
import Outcomes from './sections/Outcomes';
import Footer from './sections/Footer';
import Navbar from './components/Navbar';
import Service from './pages/Service';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'service' | 'faq' | 'login' | 'signup'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'service': return <Service />;
      case 'faq': return <FAQ />;
      case 'login': return <Login setView={setView} />;
      case 'signup': return <Signup setView={setView} />;
      default: return (
        <>
          {/* 1. 브랜드의 선언 (Hero) */}
          <Hero />
          
          {/* 2. 시장의 한계와 관점의 전환 (Problem & Insight) */}
          <Problem />
          <Insight />
          
          {/* 3. 해결책과 프로세스 (Solution & How It Works) */}
          <Solution />
          <HowItWorks />
          
          {/* 4. 기술적 실체와 규제 대응 (Modules & Compliance) */}
          <DigitalPassport />
          <CarbonTraceability />
          <AeoSeo />
          <Compliance />
          
          {/* 5. 활용 사례와 기술적 권위 (Market Fit & Authority) */}
          <UseCase />
          <Patents />
          
          {/* 6. 최종 시스템 검증 (Validation) */}
          <Outcomes />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar setView={setView} currentView={view} />
      <main>
        {renderView()}
        <Footer />
      </main>
    </div>
  );
};

export default App;
