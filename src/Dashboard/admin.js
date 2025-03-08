import React, { useEffect, useState } from "react";
import {Link, Routes, Route } from "react-router-dom";
import ManageEvents from "./manageEvents";
import ManageUsers from "./ManageUsers";
import ManageChapters from "./manageChapters";
import { useNavigate } from "react-router-dom";
import { getAdminDashboard } from '../apis/adminAPIS';

import './admin.css';



export default function Admin() {
    const [dashboardData, setDashboardData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching admin dashboard...');
        const data = await getAdminDashboard('irene', '1101'); // Hardcoded credentials
        console.log('Data:', data);
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching admin dashboard:', error);
        setErrorMessage('Failed to load admin dashboard. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      }
    };
    fetchData();
  }, [navigate]);

  if (errorMessage) return <div style={{ color: 'red' }}>{errorMessage}</div>;
  if (!dashboardData) return <div>Loading...</div>;
  const { chapters, events, users} = dashboardData;

    return (
        <div className="admin-dashboard">
            <input type="checkbox" id="sidebar-toggle" className="sidebar-checkbox" />
            <div className="sidebar">
                <label htmlFor="sidebar-toggle" className="sidebar-toggle">Ξ</label>
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                </div>
                <ul className="sidebar-menu">
                    <li><Link to ="/admin">Dashboard</Link></li>
                    <li><Link to="/admin/manage-events">Manage Events</Link></li>
                    <li><Link to ="/admin/manage-users">Manage Users</Link></li>
                    <li><Link to="/admin/manage-chapters">Manage Chapters</Link></li>
                    <li><Link to="/admin/notifications">Notifications</Link></li>
                </ul>
            </div>

            <div className="dashboard-content">
                <h1>Welcome, Admin!</h1>
                <p>Manage your chapters, events, and users</p>
            <Routes>
          <Route
            path="/"
            element={
              <div className="dashboard-cards">
                <div className="dashboard-card">
                  <h3>Total Members</h3>
                  <div className="card-value">{users.length}</div>
                  
                </div>
                <div className="dashboard-card">
                  <h3>Total Chapters</h3>
                  <div className="card-value">{chapters.length}</div>
                  <p>Active chapters</p>
                </div>
                <div className="dashboard-card">
                  <h3>Upcoming Events</h3>
                  <div className="card-value">{events.length}</div>
                </div>
              </div>
            }
          />
          <Route path="/manage-events" element={<ManageEvents />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-chapters" element={<ManageChapters />} />
          <Route path="/notifications" element={<div>Notifications Page</div>} />
        </Routes>
      </div>
    </div>
  );
}
