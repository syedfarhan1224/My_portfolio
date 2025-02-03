import { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experiance from './components/Experiance';
import Projects from './components/project';
import Footer from './components/Footer';
import ContactMe from './components/contact';

function App() { 
  const aboutRef = useRef(null);
  const experianceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 h-auto w-full overflow-hidden">
      <Navbar 
        scrollToSection={scrollToSection} 
        aboutRef={aboutRef} 
        experianceRef={experianceRef} 
        projectsRef={projectsRef} 
        contactRef={contactRef} 
      />
      <Home />
      <section ref={aboutRef}><About /></section>
      <section ref={experianceRef}><Experiance /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={contactRef}><ContactMe /></section>
      <Footer />
    </div>
  );
}

export default App;
