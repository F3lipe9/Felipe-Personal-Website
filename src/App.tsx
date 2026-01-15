import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AllProjects from '@/pages/AllProjects';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300" style={{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-color)',
          minHeight: '100vh'
        }}>
          <Navigation />
          <Routes>
            <Route path="/" element={
              <main id="main-content">
                <Hero />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
              </main>
            } />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
