import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Admin from './Dashboard/Admin.js';
import Student from './Dashboard/Student.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        {/* <Route path="/" element={<Welcome />} /> */}
      </Routes>
    </Router>
  );
}

export default App;