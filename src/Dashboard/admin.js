import React from "react";
import './admin.css';

export default function Admin(){
    const stats = {
        totalMembers: 150,
        totalChapters: 5,
        upcomingEvents: 3
    };

    const events = [
        { id: 1, title: "Algorithm Competition", date: "2023-06-15", location: "CS Building" },
        { id: 2, title: "Web Dev Workshop", date: "2023-06-20", location: "Engineering Hall" },
        { id: 3, title: "Cybersecurity Seminar", date: "2023-06-25", location: "Online" }
    ];

    const users = [
        { id: 1, name: "John Doe", role: "Member", chapter: "ACM" },
        { id: 2, name: "Jane Smith", role: "Admin", chapter: "Cybersecurity" },
        { id: 3, name: "Bob Johnson", role: "Secretary", chapter: "ACM" }
    ];

return(


    <div className ="admin-dashboard">
        <input type ="checkbox" id="sidebar-toggle" className="sidebar-checkbox"/>
        <div className = "sidebar">
            <label htmlFor ="sidebar-toggle" className="sidebar-toggle">Ξ</label>
            <div className="sidebar-header"> 
                <h2>Admin Panel</h2>
            </div>
            <ul className="sidebar-menu">
                <li>Manage Events</li>
                <li>Manage Users</li>
                <li>Manage Chapters</li>
                <li>Notifications</li>
            </ul>
        </div>

        <div className="dashboard-content">
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h3>Total members</h3>
                    <div className="card-value">{stats.totalMembers}</div>
                </div>
                <div className="dashboard-card">
                    <h3>Total Chapters</h3>
                    <div className="card-value">{stats.totalChapters}</div>
                </div>
                <div className="dashboard-card">
                    <h3>Upcoming events</h3>
                    <div className="card-value">{stats.upcomingEvents}</div>
                </div>
            </div>


            <div className="content-section">
                <h2 className="section-title">Manage Events</h2>
                <div className="events-list">
                    {events.map((event)=>(
                        <div className="event-item" key={event.id}>
                            <div className ="event-details">
                                <h3>{event.title}</h3>
                                <p>{event.date}. {event.location}</p>
                            </div>
                            <button className="event-button">Edit</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="content-section">
                <h2 className="section-title">Manage Users</h2>
                <div className="users-list">
                    {users.map((user)=>(
                        <div className="user-item" key={user.id}>
                            <div className ="user-details">
                                <h3>{user.name}</h3>
                                <p>Role: {user.role}. Chapter:{user.chapter}</p>
                            </div>
                            <button className="user-button">Edit</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
);
}


    
            