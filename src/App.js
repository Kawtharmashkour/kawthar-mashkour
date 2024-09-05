import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarOffCanvas from './components/NavBarOffCanvas'
import './App.css';
import Home from './components/Home';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router basename="/kawthar-mashkour">
    <NavBarOffCanvas/>
    <Home/>
    <Footer/>
  </Router>
  );
}

export default App;
