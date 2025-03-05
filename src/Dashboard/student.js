import React from "react";
import './student.css';
export default function Student(){
    return (
       <div>
            <div class = "dashboard-container">
                <aside className ='sidebar'>
                  <h2> Student Dashboard</h2>
                  <ul>
                    <li><a href ='/'>Home</a></li>
                    <li><a href='/profile'>Profile</a></li>
                    <li><a href ='/settings'>Settings</a></li>
                    <li><a href ='/Logout'>Logout</a></li>
                  </ul>
                </aside>
                <main className="main-content">
                  <section className="events">
                    <h2>Your Events</h2>
                    <div className="event-card">
                      <h3>Guest Lecture</h3>
                      <p>Date: 2025-03-01</p>
                      <p>Location: Nkoyoyo Hall</p>
                      <p>Industry professionals to share insights and experiences.</p>
                    </div>
                    <div className="event-card">
                       <h3>Workshops</h3>
                       <p>Date: 2025-04-15</p>
                       <p>Location: Motiv, Bugolobi</p>
                       <p>Hands-on session on relevant topics.</p>
                    </div>
                  </section>
                  <section className="notifications">
                     <h2>Notifications</h2>
                     <ul>
                        <li>Notification 1: Event reminder.</li>
                        <li>Notification 2: New chapter added.</li>
                     </ul>
                  </section>
                  <section className="chapters">
                    <h2>Chapters</h2>
                      <div className="chapter-card">Data Science</div>
                    <div className="chapter-card">Robotics and AI</div>
                  </section>
                  <section className="calendar">
                      <h2>Event Calendar</h2>
                         <div className="calendar-grid">
            
                           <div className="calendar-day">1</div>
                           <div className="calendar-day">2</div>
                           <div className="calendar-day">3</div>
                           <div className="calendar-day">4</div>
                           <div className="calendar-day">5</div>
                           <div className="calendar-day">6</div>
                           <div className="calendar-day">7</div>
            
                         </div>
                  </section>
                
                    
            

                   
                 
                </main>
            </div>
            </div>
    );
};