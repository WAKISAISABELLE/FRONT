
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getStudentDashboard} from '../apis/studentAPIS';
import './student.css';

export default function Student() {
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStudentDashboard('priscilla', '2222');
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching student dashboard:', error);
        // navigate('/login');
      }
    };
    fetchData();
      }, [navigate]);
      if(!dashboardData){
        return <div>Loading...</div>;
      }
      const {myChapters, upcomingEvents, notifications} = dashboardData;

return (
       
          <div className = "student-dashboard">
              <nav className ="top-navbar">
                <div className = "nav-logo">
                  {/* <link href ="/"><div className ="logo">CS</div></link> */}
                  <span>CS Chapter Hub</span>
                </div>

                <div className ="nav-icons">
                  <div className ="nav-icon" title ="Notifications">
                    <i className="icon-bell">🔔</i>
                    <span className = "notification-badge">3</span>
                  </div>
                  <div className ="nav-icon" title ="Settings">
                    <i className="icon-settings">⚙️</i>
                  </div>
                  <div className ="nav-icon profile-icon" title ="Profile">
                    <i className="icon-user">🧚‍♀️</i>
                  </div>
                </div>
              </nav>



              {/* main content */}
              <div className="dashboard-content">
                <div className ="welcome-section">
                  <h1>Welcome, Student!</h1>
                  <p>Here's what's happening in your chapters</p>
                </div>


                {/* Dashboard stats */}
                <div className="dashboard-cards">
                   <div className ="dashboard-card">
                     <h3>My chapters</h3>
                     <div className="card-value">{myChapters.length}</div>
                     <p>Active Memberships</p>
                   </div>
                   <div className="dashboard-card">
                     <h3>My chapters</h3>
                     <div className="card-value">{upcomingEvents.length}</div>
                     <p>In the next 30 days.</p>
                   </div>
                   <div className="dashboard-card">
                    <h3>Notifications</h3>
                    <div className="card-value">{notifications.length}</div>
                  </div>

                  {/* Events */}
                  <div className="content-section">
                     <h2 className="section-title">Upcoming Events</h2>
                     <div className="events-list">
                         {upcomingEvents.map((event) => (
                           <div className="event-item" key={event.id}>
                             <div className="event-date">
                                <span>{event.date} Date</span>
                                <span>{event.time}</span>
                             </div>
                             <div className="event-details">
                                <h3>{event.title}</h3>
                                <p>
                                   {event.time} • {event.location}
                                </p>
                             </div>
                             <button className="event-button">View</button>
                          </div>
                        ))}
                      </div>
                    </div>
           

     
       
        {/* Chapters Section */}
                    <div className="content-section">
                       <h2 className="section-title">My Chapters</h2>
                       <div className="my-chapters-list">
                          {myChapters.map((chapter) => (
                            <div className="chapter-item" key={chapter.id}>
                               <h3>{chapter.name}</h3>
                               <div className="chapter-details">
                                 <span className="chapter-role">{chapter.role || 'Member'}</span>
                                 <span className="chapter-events">{chapter.events} upcoming events</span>
                               </div>
                               <button className="chapter-view-button">View Details</button>
                             </div>
                            ))}
                         </div>
                     </div>

        {/* Calendar Section */}
                     <div className="content-section">
                         <h2 className="section-title">Events Calendar</h2>
                         <div className="calendar-container">
                             <div className="calendar-header">
                                <button className="calendar-nav-button">◀</button>
                                <h3>June 2023</h3>
                                <button className="calendar-nav-button">▶</button>
                             </div>
                             <div className="calendar-grid">
                                <div className="calendar-weekdays">
                                   <div>Sun</div>
                                   <div>Mon</div>
                                   <div>Tue</div>
                                   <div>Wed</div>
                                   <div>Thu</div>
                                   <div>Fri</div>
                                   <div>Sat</div>
                                </div>
                                <div className="calendar-days">
                {/* First row */}
                                  <div className="calendar-day prev-month">28</div>
                                  <div className="calendar-day prev-month">29</div>
                                  <div className="calendar-day prev-month">30</div>
                                  <div className="calendar-day prev-month">31</div>
                                  <div className="calendar-day">1</div>
                                  <div className="calendar-day">2</div>
                                  <div className="calendar-day">3</div>

                {/* Second row */}
                                  <div className="calendar-day">4</div>
                                  <div className="calendar-day">5</div>
                                  <div className="calendar-day">6</div>
                                  <div className="calendar-day">7</div>
                                  <div className="calendar-day">8</div>
                                  <div className="calendar-day">9</div>
                                  <div className="calendar-day">10</div>

                {/* Third row */}
                                  <div className="calendar-day">11</div>
                                  <div className="calendar-day">12</div>
                                  <div className="calendar-day">13</div>
                                  <div className="calendar-day">14</div>
                                  <div className="calendar-day has-event">15</div>
                                  <div className="calendar-day">16</div>
                                  <div className="calendar-day">17</div>

                {/* Fourth row */}
                                  <div className="calendar-day">18</div>
                                  <div className="calendar-day">19</div>
                                  <div className="calendar-day has-event">20</div>
                                  <div className="calendar-day">21</div>
                                  <div className="calendar-day">22</div>
                                  <div className="calendar-day">23</div>
                                  <div className="calendar-day">24</div>

                {/* Fifth row */}
                                  <div className="calendar-day has-event">25</div>
                                  <div className="calendar-day">26</div>
                                  <div className="calendar-day">27</div>
                                  <div className="calendar-day">28</div>
                                  <div className="calendar-day">29</div>
                                  <div className="calendar-day">30</div>
                                  <div className="calendar-day next-month">1</div>
                              </div>
                            </div>
                         </div>
                       </div>

        {/* Notifications Section */}
                       <div className="content-section">
                          <h2 className="section-title">Recent Notifications</h2>
                          <div className="notifications-list">
                             {notifications.map((notification) => (
                                <div className="notification-item" key={notification.id}>
                                  <div className="notification-icon">📣</div>
                                  <div className="notification-details">
                                    <p>{notification.message}</p>
                                    <span className="notification-time">{notification.time}</span>
                                 </div>
                               </div>
                              ))}
                           </div>
                        </div>
                     </div>
            </div>
          </div>
    );
}

// Dont render arrays directly, so i corrected the error with .length
                
                   

                   
                      
              
                  







                    
            
                           
            

                   
                 
                
  
