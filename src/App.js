import './App.css';
import logo from "./thomasite_logo2.png"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import MainPage from "./components/MainPage"

function App() {
  return (
    <div className="page-container">
          <div className="content-wrapper">
            <div className="grid-container">
        <Router>
          <Routes>
             <Route path="/" element={ <WelcomePage logo={logo} /> } />
             <Route path="main" element={ <MainPage /> } />
          </Routes> 
        </Router>
            </div>
          </div>
        </div>
    
    
  );
}

export default App;
