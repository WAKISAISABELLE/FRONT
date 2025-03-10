import React from "react";
import "./welcome.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Welcome() {
  return (
    <div className="container text-center mt-5">
      <h1>CSE CHAPTER HUB</h1>
      <p>A comprehensive platform for managing chapter operations.</p>
      <div className="button-container mt-4">
        <a href="/login" className="btn btn-primary me-2">
          Log in
        </a>
        <a href="/signup" className="btn btn-secondary">
          Sign up
        </a>
      </div>
    </div>
  );
}