
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Welcome from './components/welcome';
import './App.css';
import Admin from './Dashboard/admin';

import Student from './Dashboard/student.js';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/admin" component={Admin}/>
          <Route path="/student" component={Student} />
          {/* <Route path="/" component={Welcome} /> */}
      </Routes>
        
    </Router>

    
  );
}

export default App;
//  BrowserRouter enables routing,
// Route enables routing to different components