import React, { useEffect, useState } from "react";
import {Link, Routes, Route } from "react-router-dom";
import ManageEvents from "./manageEvents";
import ManageUsers from "./ManageUsers";
import ManageChapters from "./manageChapters";

import './admin.css';


export default function Admin() {

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
            <Routes>
          <Route
            path="/"
            element={
              <div className="dashboard-cards">
                <div className="dashboard-card">
                  <h3>Total Members</h3>
                  <div className="card-value">120</div>
                </div>
                <div className="dashboard-card">
                  <h3>Total Chapters</h3>
                  <div className="card-value">6</div>
                </div>
                <div className="dashboard-card">
                  <h3>Upcoming Events</h3>
                  <div className="card-value">3</div>
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
