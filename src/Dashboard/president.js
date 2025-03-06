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
          <li><a href="#chapter1" onClick={() => handleContentChange('chapter1')}>Chapter 1</a></li>
          <li><a href="#chapter2" onClick={() => handleContentChange('chapter2')}>Chapter 2</a></li>
          <li><a href="#chapter3" onClick={() => handleContentChange('chapter3')}>Chapter 3</a></li>
          <li><a href="#chapter4" onClick={() => handleContentChange('chapter4')}>Chapter 4</a></li>
        </ul>
      </aside>
      <div className="content">
        {selectedContent === 'dashboard' && (
          <div className="dashboard">
            <div className="card">
              <h2>Pie Chart</h2>
              {/* <Pie data={pieData} /> */}
            </div>
            <div className="card">
              <h2>Bar Chart</h2>
              {/* <Bar data={barData} /> */}
            </div>
          </div>
        )}
        {selectedContent === 'chapter1' && (
          <section id="chapter1">
            <h2>Chapter 1</h2>
            <section className="card">
              <h2>Activities in the Chapter</h2>
              <ul>
                <li>Chapter meeting</li>
                <li>Chapter meeting</li>
                <li>Chapter meeting</li>
              </ul>
            </section>
            <section className="card">
              <h2>we are done</h2>
              <div className="semi-card">
                <h3>run for yr life</h3>
                <p>run</p>
              </div>
              <div className="semi-card">
                <h3>run</h3>
                <p></p>
              </div>
            </section>
          </section>
        )}
        {selectedContent === 'chapter2' && (
          <section id="chapter2">
            <div className="box">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>

            </div>
          </section>
        )}
        {selectedContent === 'chapter3' && (
          <section id="chapter3">
            <h2>Chapter 3</h2>
            <p>Content for Chapter 3...</p>
          </section>
        )}
        {selectedContent === 'chapter4' && (
          <section id="chapter4">
            <h2>Chapter 4</h2>
            <p>Content for Chapter 4...</p>
          </section>
        )}
      </div>
    </div>
  );
}