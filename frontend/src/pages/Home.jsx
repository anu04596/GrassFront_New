import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Process from '../components/sections/Process';
import Capabilities from '../components/sections/Capabilities';
import Industries from '../components/sections/Industries';
import Projects from '../components/sections/Projects';
import Testimonials from '../components/sections/Testimonials';
import Stats from '../components/sections/Stats';
import Contact from '../components/sections/Contact';
import Trusted from '../components/sections/Trusted';
import Problems from '../components/sections/Problems';
import Why from '../components/sections/Why';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  // Initialize scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with .reveal on initial load + re-check after mount
    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    };

    observe();
    // Small delay to catch elements rendered after first pass
    const timer = setTimeout(observe, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <Hero />
      <Trusted />
      <Problems />
      <About />
      <Capabilities />
      <Industries />
      <Projects />
      <Why />
      <Process />
      <Testimonials />
      <Stats />
      <FAQ />
      <Contact />
    </main>
  );
}
