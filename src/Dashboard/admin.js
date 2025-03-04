import React from "react";
import './admin.css';

export default function admin(){
    return(
        <div class ='dashboard'>
            <div class ="dahsboard-header">
                <div>
                   <h1> Admin Dashboard</h1>
                   <p> Manage your chapter activities</p>
                </div>
                <button class = 'button'> + Add new</button>
            </div>
            <div class="overview-cards">
                <div class="card">
                    <div class ="card-header">
                        <span class ="card-icon">🧚‍♀️</span>
                        <span class="card-count">32</span>
                    </div>
                   <h3> Total members</h3>
                   <p>Active chapter participants:150</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <span class="card-icon">🗓️</span>
                        <span class="card-count">7</span>
                    </div>
                    <h3>Upcoming Events</h3>
                    <p>Planned Chapter activities</p>
                </div>

                <div class="card">
                    <div class ="card-header">
                        <span class="card-icon">🔔</span>
                        <span class="card-count">1</span>
                    </div>
                    <h3>Notifications</h3>
                    <p>Recent updates</p>
                </div>
            </div>

            <div class="dashboard-content">
                <div class="section">
                    <div class ="section-header">
                         <h2> Manage Events</h2>
                         <button class="button">+Add event</button>
                    </div>
                    <div class ="events-list">
                        <div class ="event-item">
                            <div>
                                <h3>Guest Lecture</h3>
                                <p>Date: 2025-03-01/Location: Nkoyoyo Hall</p>
                            </div>
                        </div>
                        <div class ="event-item">
                            <div>
                                <h3>Worksops</h3>
                                <p>Date: 2025-04-15/Location: Motiv, Bugolobi</p>
                            </div>
                        </div>
                        <div>
                            <button class="button">Edit</button>
                            <button class=" button button-delete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class ="section">
                <div class ="section-header">
                    <h2>Member management</h2>
                    <button class ="button">+Add button</button>
                </div>
                <div class ="members-list">
                    <div class ="member-item">
                        <div>
                            <h3>Isabelle</h3>
                            <p>isabellewakisa992@gmail.com</p>
                            <span class="member-role">Member</span>
                        </div>
                        <button class ="button button=delete">Remove</button>
                        <div>
                            <div class ="member-item">
                                <div>
                                    <h3>Hnery</h3>
                                    <p>henry@gmsil.com</p>
                                    <span class="member-role">Leader</span>
                                </div>
                                <button class ="button button=delete">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};