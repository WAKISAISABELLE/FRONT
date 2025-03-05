import React from "react";

export default function Welcome(){
  return (
    <div className="container">
        <h1>CSE CHAPTER HUB</h1>
        <p>A comprehensive platform for managing chapter operations.</p>
        

        <div className="button-container">
        <a href="/login" className="button button-login">
          Log in
        </a>
        <a href="/signup" className="button button-signup">
          Sign up
        </a>
      </div>
    </div>
  );
}
