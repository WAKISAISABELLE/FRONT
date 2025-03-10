import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Admin from './Dashboard/admin';
import President from './Dashboard/president';
import Student from './Dashboard/student';
import LoginPage from './components/login';
import Welcome from './components/welcome';
import SignupPage from './components/signup';

function App() {
  return (
    <Router>
      <div>
        <header className="app-header">
          <nav>
            <Link to="/admin"><button>Admin</button></Link>
            <Link to="/president"><button>President</button></Link>
            <Link to="/student"><button>Student</button></Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/welcome"><button>Welcome</button></Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/president" element={<President />} />
            <Route path="/student" element={<Student />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Welcome />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;