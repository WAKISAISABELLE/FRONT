import React from "react";
import './student.css';
export default function Student(){
    return(
        <div>
            <div class = "dashboard-header"><h2> Student Dashboard</h2></div>
            <p>Welcome back! Here's what is happening in your chapters</p>

            <div className="button-container">
            <a href="/Notifications" className= "button button-Notifications"> Notifications</a>
            <a href ="/My Events" className="button button-My-Events">My Events</a>
            
            </div>

            <div class="card">
            <div class="card-body">
            <h5 class="card-title">Chapters</h5>
    
             <p class="card-text">Data science, Robotics and AI</p>
            </div>
            </div>
        </div>

    );
};