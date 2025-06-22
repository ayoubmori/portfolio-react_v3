import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { initEmailJS } from './utils/emailjs';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
      
//       {/* We are replacing all your components with a simple test message */}
//       <div style={{ color: 'white', padding: '50px', fontSize: '48px' }}>
//         It Works!
//       </div>

//     </ThemeProvider>
//   );
// }
export default App
