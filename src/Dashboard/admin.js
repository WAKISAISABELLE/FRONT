import React from "react";
import './admin.css';

export default function admin(){
    return(
        <div className ='admin-dashboard'>
            <h1> Admin Dashboard</h1>
            <div className ="stats">
                <div className="stat-card">
                   <h2> Total members</h2>
                   <p> 150</p>
                </div>
                <div className="stat-card">
                    <h2>Upcoming Events</h2>
                    <p>5</p>
                </div>
                <div className="stat-card">
                    <h2>Notifications</h2>
                    <p>3</p>
                </div>
            </div>
            <h2> Manage Events</h2>
            <button className="add-event-button">Add event</button>
            <table className ='event-table'>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                        
                
                </thead>
                <tbody>
                    <tr>
                        <td>Workshop</td>
                        <td>2025-03-02</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Manage users</h2>
            <table className ='user-table'>
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Isabelle Wakisa</td>
                        <td>isabellewakisa992@gmail.com</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Notifications</h2>
            <button className="add-notification-button">Add Notification</button>
            <ul className ="notification-list">
                <li>Event reminder on Workshop.</li>
            </ul>
        </div>

    );
};