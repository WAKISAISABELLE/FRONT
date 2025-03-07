import React, { useState } from 'react';
import './president.css';

export default function President() {
  const [selectedContent, setSelectedContent] = useState('dashboard');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile">
          <img src="/img/prof.png" alt="Profile" className="profile-pic" />
          <p>President</p>
        </div>
        <ul>
          <li><a href="#dashboard" onClick={() => handleContentChange('dashboard')}>Dashboard</a></li>
          <li><a href="#chapter1" onClick={() => handleContentChange('chapter1')}>Performance</a></li>
          <li><a href="#chapter2" onClick={() => handleContentChange('chapter2')}>Member Engagement</a></li>
          <li><a href="#chapter3" onClick={() => handleContentChange('chapter3')}>Events</a></li>
          <li><a href="#chapter4" onClick={() => handleContentChange('chapter4')}>Reports</a></li>
        </ul>
      </aside>
      <div className="content">
        {selectedContent === 'dashboard' && (
          <div className="dashboard">
            <div className="card">
              <h2><i className="fas fa-chart-line"></i> Chapter Performance Metrics</h2>
              <div className="semi-card">
                <p>Membership Growth</p>
                <p>20 students</p>
                {/* <Bar data={barData} /> */}
              </div>
              <div className="semi-card">
                <p>Engagement Rate</p>
                <p>34%</p>
                {/* <Bar data={barData} /> */}
              </div>
            </div>
            <div className="card">
              <h2><i className="fas fa-dollar-sign"></i> Financial Overview</h2>
              <p>Current Balance: $5,000</p>
              <p>Expenses: $1,200</p>
              <p>Revenue: $6,500</p>
              {/* <Pie data={pieData} /> */}
            </div>
            <div className="card">
              <h2><i className="fas fa-chart-pie"></i> Statistics Overview</h2>
              {/* Add your statistics overview content here */}
            </div>
          </div>
        )}
        {selectedContent === 'chapter1' && (
          <section id="chapter1">
            <h2>Performance</h2>
            <div className="card">
              <h2><i className="fas fa-tasks"></i> Activities in the Chapter</h2>
              <ul>
                <li>Monthly Meetings</li>
                <li>Workshops</li>
                <li>Community Service</li>
              </ul>
            </div>
            <div className="card">
              <h2><i className="fas fa-trophy"></i> Achievements</h2>
              <div className="semi-card">
                <h3><i className="fas fa-award"></i> Best Chapter Award</h3>
                <p>Received for outstanding performance in 2024.</p>
              </div>
              <div className="semi-card">
                <h3><i className="fas fa-hand-holding-usd"></i> Top Fundraiser</h3>
                <p>Raised $10,000 for local charities.</p>
              </div>
            </div>
          </section>
        )}
        {selectedContent === 'chapter2' && (
          <section id="chapter2">
            <h2>Member Engagement</h2>
            <div className="box">
              <div className="p-2 bg-secondary text-white m-2">
                <i className="fas fa-chalkboard-teacher"></i> Workshops
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                    40% Complete (success)
                  </div>
                </div>
              </div>
              <div className="p-2 bg-secondary text-white m-2">
                <i className="fas fa-users"></i> Seminars
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                    50% Complete (info)
                  </div>
                </div>
              </div>
              <div className="p-2 bg-secondary text-white m-2">
                <i className="fas fa-glass-cheers"></i> Social Events
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
                    60% Complete (warning)
                  </div>
                </div>
              </div>
              <div className="p-2 bg-secondary text-white m-2">
                <i className="fas fa-hands-helping"></i> Volunteer Programs
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
                    aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                    70% Complete (danger)
                  </div>
                </div>
              </div>
              <div className="p-2 bg-secondary text-white m-2">
                <i className="fas fa-network-wired"></i> Networking Sessions
                <div className="progress mt-2">
                  <div className="progress-bar progress-bar-primary progress-bar-striped" role="progressbar"
                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                    80% Complete (primary)
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {selectedContent === 'chapter3' && (
          <section id="chapter3">
            <h2>Events</h2>
            <div className="card">
              <h2><i className="fas fa-calendar-alt"></i> Upcoming Events</h2>
              <ul>
                <li>Annual Gala - March 15, 2025</li>
                <li>Spring Workshop - April 10, 2025</li>
                <li>Summer Picnic - June 20, 2025</li>
              </ul>
            </div>
            <div className="card">
              <h2><i className="fas fa-history"></i> Past Events</h2>
              <ul>
                <li>Winter Fundraiser - December 5, 2024</li>
                <li>Fall Conference - October 12, 2024</li>
                <li>Community Cleanup - August 18, 2024</li>
              </ul>
            </div>
          </section>
        )}
        {selectedContent === 'chapter4' && (
          <section id="chapter4">
            <h2>Reports</h2>
            <div className="card">
              <h2><i className="fas fa-file-alt"></i> Annual Report 2024</h2>
              <p>Summary of activities, financials, and achievements for the year 2024.</p>
            </div>
            <div className="card">
              <h2><i className="fas fa-file-alt"></i> Quarterly Report Q1 2025</h2>
              <p>Overview of the first quarter's performance and financials.</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}