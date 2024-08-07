import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import Redflags from './Components/Redflags/Redflags';
import Interventions from './Components/Interventions/Interventions';
import ResolvedCases from './Components/ResolvedCases/ResolvedCases';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/redflags" element={<Redflags />} />
            <Route path="/interventions" element={<Interventions />} />
            <Route path="/resolved-cases" element={<ResolvedCases />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
