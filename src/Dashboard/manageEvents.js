import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminDashboard, updateEvent, deleteEvent } from '../apis/adminAPIS';
import './admin.css';

export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('fetching events...')
        setLoading(true);
        const data = await getAdminDashboard('irene', '1101');
        console.log('ManageEvents - API Response:', data);
        setEvents(data.events);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Failed to load events. Please try again.');
        setLoading(false);
        // navigate('/login');
      }
    };

    fetchData();
  }, [navigate]);

  const handleEditEvent = async (eventId, updatedEvent) => {
    try {
      await updateEvent(eventId, updatedEvent);
      const data = await getAdminDashboard('irene', '1101');
      setEvents(data.events);
    } catch (error) {
      console.error('Error editing event:', error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteEvent(eventId);
      const data = await getAdminDashboard('irene', '1101');
      setEvents(data.events);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };
   //use loading state
  if (loading) return <div>Loading events...</div>;
  // Use error state to show errors
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="content-section">
      <h2 className="section-title">Manage Events</h2>
      <div className="events-list">
        {events.map((event) => (
          <div className="event-item" key={event.id}>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.date} • {event.location}</p>
            </div>
            <button
              className="event-button edit-button"
              onClick={() => handleEditEvent(event.id, { title: 'Updated Title', date: '2023-07-01', time: '3:00 PM', location: 'New Location' })}
            >
              Edit
            </button>
            <button
              className="event-button delete-button"
              onClick={() => handleDeleteEvent(event.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}