import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
//  import Admin from './Dashboard/Admin.js';
// import Student from './Dashboard/student.js';
import Welcome from './components/welcome.js'; // Ensure this matches the actual file name

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/admin" element={<Admin />} />   */}
          {/* <Route path="/student" element={<Student />}  */}
         <Route path="/welcome" element={<Welcome />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;