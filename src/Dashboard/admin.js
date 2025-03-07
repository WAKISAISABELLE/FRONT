import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './admin.css';
import { getAdminDashboardData } from '../apis/adminAPIS';

export default function Admin() {
    const [dashboardData, setDashboardData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('fetching admin dashboard data..')
                const data = await getAdminDashboardData();
                console.log('data:', data);
                setDashboardData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                navigate('/login');
            }
        };

        fetchData();
    }, [navigate]);
        
    if (!dashboardData) return <div>Loading...</div>;
    const { stats, events, users } = dashboardData;

    return (
        <div className="admin-dashboard">
            <input type="checkbox" id="sidebar-toggle" className="sidebar-checkbox" />
            <div className="sidebar">
                <label htmlFor="sidebar-toggle" className="sidebar-toggle">Ξ</label>
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
                        {events.map((event) => (
                            <div className="event-item" key={event.id}>
                                <div className="event-details">
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
                        {users.map((user) => (
                            <div className="user-item" key={user.id}>
                                <div className="user-details">
                                    <h3>{user.name}</h3>
                                    <p>Role: {user.role}. Chapter: {user.chapter}</p>
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



