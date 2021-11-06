import React from 'react';
import { GlobalStyle } from './globalStyles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Feature from './components/Features';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </Router>
  );
}

export default App;
