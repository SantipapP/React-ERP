// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import HRDashboard from './components/HR/Dashboard';
import PUDashboard from './components/Purchasing/Dashboard';
import EmployeeTable from './components/HR/EmployeeTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hr/dashboard" element={<HRDashboard />} />
        <Route path="/purchasing/dashboard" element={<PUDashboard />} />
        <Route path="/hr/EmployeeTable" element={<EmployeeTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;
