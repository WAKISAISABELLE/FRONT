import React, { useState, useEffect } from 'react';
import './president.css';

export default function President() {
  const [selectedContent, setSelectedContent] = useState('dashboard');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  useEffect(() => {
    if (selectedContent === 'dashboard') {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.onload = () => {
        window.google.charts.load('current', { packages: ['corechart'] });
        window.google.charts.setOnLoadCallback(drawCharts);
      };
      document.body.appendChild(script);

      const chartScript = document.createElement('script');
      chartScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js';
      chartScript.onload = () => {
        drawLineChart();
      };
      document.body.appendChild(chartScript);

      window.addEventListener('resize', drawCharts);
      return () => {
        window.removeEventListener('resize', drawCharts);
        document.body.removeChild(chartScript);
      };
    }
  }, [selectedContent]);

  const drawCharts = () => {
    const data = window.google.visualization.arrayToDataTable([
      ['Chapter', 'Data science'],
      ['Attendence', 60],
      ['Engagements', 30],
      ['Performance', 44],
      ['Participation', 24],
      ['Projects', 35]
    ]);

    const options = {
      title: 'Statistics Overview Pie Chart',
      width: '100%',
      height: '100%',
    };

    const pieChart = new window.google.visualization.PieChart(document.getElementById('myChart'));
    pieChart.draw(data, options);

    const options2 = {
      title: 'Statistics Overview Bar Chart',
      width: '100%',
      height: '100%',
    };

    const barChart = new window.google.visualization.BarChart(document.getElementById('myChart2'));
    barChart.draw(data, options2);
  };

  const drawLineChart = () => {
    const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    new window.Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          borderColor: "red",
          fill: false
        }, {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          borderColor: "green",
          fill: false
        }, {
          data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
          borderColor: "blue",
          fill: false
        }]
      },
      options: {
        legend: { display: false }
      }
    });
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
          <li><a href="#chapter1" onClick={() => handleContentChange('chapter1')}>Progress</a></li>
          <li><a href="#chapter2" onClick={() => handleContentChange('chapter2')}>Engagement</a></li>
          <li><a href="#chapter3" onClick={() => handleContentChange('chapter3')}>Events</a></li>
          <li><a href="#chapter4" onClick={() => handleContentChange('chapter4')}>Reports</a></li>
        </ul>
      </aside>
      <div className="content">
        {selectedContent === 'dashboard' && (
          <div className="dashboard">
            <div className="card small-card">
              <h2><i className="fas fa-chart-line"></i> Jan-Feb pie chart stats 2025</h2>
              <div id="myChart" className="chart-container"></div>
            </div>
            <div className="card small-card">
              <h2><i className="fas fa-file-alt"></i> Jan-Feb bar chart stats 2025</h2>
              <div id="myChart2" className="chart-container"></div>
            </div>
            <div className="card small-card">
              <h2><i className="fas fa-file-alt"></i> Annual Report 2024</h2>
              <div className="semi-card-container">
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedContent === 'chapter2' && (
          <section id="chapter2">
            <h2>Progress</h2>
            <div className="card small-card">
              <h2><i className="fas fa-trophy"></i> Achievements</h2>
              <div className="semi-card-container">
                <div className="semi-card">
                  <h3><i className="fas fa-award"></i> Best Chapter Award</h3>
                  <p>Received for outstanding performance in 2024.</p>
                </div>
                <div className="semi-card">
                  <h3><i className="fas fa-hand-holding-usd"></i> Top Fundraiser</h3>
                  <p>Raised $10,000 for local charities.</p>
                </div>
              </div>
            </div>
          </section>
        )}
        {selectedContent === 'chapter1' && (
          <section id="chapter1">
            <div className='card-content'>
              <div className='sem-card-container'>
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
                        50% Complete 
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-secondary text-white m-2">
                    <i className="fas fa-glass-cheers"></i> Social Events
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
                        60% Complete
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-secondary text-white m-2">
                    <i className="fas fa-hands-helping"></i> Volunteer Programs
                    <div className="progress mt-2">
                      <div className="progress-bar progress-bar-primary progress-bar-striped" role="progressbar"
                        aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                        70% Complete 
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
              </div>
              <div className="sem-card-container">
                <div className="sem-card">
                  <h2><i className="fas fa-calendar-alt"></i> Projects</h2>
                  <ul>
                    <li>Credit Risk Assessment</li>
                    <li>Sentiment Analysis</li>
                    <li>Customer Segmentation</li>
                    <li>Predictive Maintenance</li>
                    <li>Recommendation Systems</li>
                  </ul>
                </div>
                <div className="sem-card">
                  <h2><i className="fas fa-calendar-alt"></i> Worked on Projects</h2>
                  <ul>
                    <li>Annual Gala - March 15, 2025</li>
                    <li>Spring Workshop - April 10, 2025</li>
                    <li>Summer Picnic - June 20, 2025</li>
                  </ul>
                </div>
                <div className="sem-card">
                  <h2><i className="fas fa-calendar-alt"></i> Pending Projects</h2>
                  <ul>
                    <li>Machine Learning (Agriculture Based)</li>
                    <li>Data Correction (Northern Regions)</li>
                    <li>Artificial Intelligence Research</li>
                  </ul>
                </div>
                <div className="sem-card">
                  <div>
                    <canvas id="myChart" style={{ width: '100%', maxWidth: '700px' }}></canvas>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {selectedContent === 'chapter3' && (
          <section id="chapter3">
            <h2>Events</h2>
            <div className="card small-card">
              <h2><i className="fas fa-calendar-alt"></i> Upcoming Events</h2>
              <ul>
                <li>Annual Gala - March 15, 2025</li>
                <li>Spring Workshop - April 10, 2025</li>
                <li>Summer Picnic - June 20, 2025</li>
              </ul>
            </div>
            <div className="semi-card-container">
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
            <div className="card small-card">
              <h2><i className="fas fa-file-alt"></i> Annual Report 2024</h2>
              <p>Summary of activities, financials, and achievements for the year 2024.</p>
            </div>
            <div className="card small-card">
              <h2><i className="fas fa-file-alt"></i> Quarterly Report Q1 2025</h2>
              <p>Overview of the first quarter's performance and financials.</p>
              <p>Membership Growth</p>
              <p>Active members: 40% of the current Attendance</p>
              <p>Non Active members: 20% of the current Attendance</p>
              <p>Non Active members with reasons: 10% of the current Attendance</p>
              <p>Pending members: 30% of the total</p>
              <p>Total: 100%</p>
            </div>
            <div className="card small-card">
              <h2><i className="fas fa-chart-line"></i> Overview</h2>
              <div className="semi-card-container">
                <div className="semi-card">
                  <h2><i className="fas fa-chart-line"></i> Chapter Overview</h2>
                  <p>Membership Growth</p>
                  <p>Active members: 40% of the current Attendance</p>
                  <p>Non Active members: 20% of the current Attendance</p>
                  <p>Non Active members with reasons: 10% of the current Attendance</p>
                  <p>Pending members: 30% of the total</p>
                  <p>Total: 100%</p>
                </div>
              </div>
            </div>
            <div className="card small-card">
              <h2><i className="fas fa-dollar-sign"></i> Attendance Overview</h2>
              <p>Current Attendance: 70% of the total</p>
              <p>Active members: 40% of the current Attendance</p>
              <p>Non Active members: 20% of the current Attendance</p>
              <p>Non Active members with reasons: 10% of the current Attendance</p>
              <p>Pending members: 30% of the total</p>
              <p>Total: 100%</p>
              <div className="semi-card-container">
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
                <div className="semi-card">
                  <p>Membership Growth</p>
                  <p>20 students</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}