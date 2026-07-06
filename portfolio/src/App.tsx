import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ExperienceDetail from './components/ExperienceDetail';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Interests />
      <Skills />
      <Projects />
      <Education />
      <Experience />
    </>
  );
}

function App() {
  const location = useLocation();

  useScrollReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet/:slug" element={<ProjectDetail />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <Analytics />
    </>
  );
}

export default App;
