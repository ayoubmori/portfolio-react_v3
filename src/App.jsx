import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Analytics } from "@vercel/analytics/react";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Ayoub Taouabi | Portfolio - Data Analyst | AI & Automation Developer</title>
          <meta name="description" content="Official portfolio of Ayoub Taouabi. Data Scientist specializing in Python, SQL, Machine Learning, and Data Visualization." />
          <meta name="keywords" content="Data Scientist, AI, Python, Portfolio, Ayoub Taouabi, Machine Learning" />
        </Helmet>
        <GlobalStyle />
        <Analytics />
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;