import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const C = {
  bg: '#f4f2ef',
  bgAlt: '#edeae6',
  white: '#ffffff',
  bgDark: '#e8e4df',
  red: '#c0392b',
  redLight: '#f8eeec',
  redDeep: '#922b21',
  text: '#1e1e1e',
  textMid: '#4a4a4a',
  textMuted: '#888888',
  border: '#ddd9d4',
  borderDark: '#c8c4be',
};

export const NAV_LINKS = ['Services', 'About', 'Projects', 'Clients', 'Contact'];

export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function useScrollSpy() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const handler = () => {
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].toLowerCase());
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(NAV_LINKS[i]);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return active;
}

export default function App() {
  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Barlow', sans-serif", minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
