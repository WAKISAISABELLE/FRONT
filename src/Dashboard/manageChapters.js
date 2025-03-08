import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminDashboard, updateChapter, deleteChapter } from '../apis/adminAPIS';
import './admin.css';

export default function ManageChapters() {
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAdminDashboard();
        setChapters(data.chapters);
      } catch (error) {
        console.error('Error fetching chapters:', error);
        navigate('/login');
      }
    };

    fetchData();
  }, [navigate]);

  const handleEditChapter = async (chapterId, updatedChapter) => {
    try {
      await updateChapter(chapterId, updatedChapter);
      const data = await getAdminDashboard();
      setChapters(data.chapters);
    } catch (error) {
      console.error('Error editing chapter:', error);
    }
  };

  const handleDeleteChapter = async (chapterId) => {
    try {
      await deleteChapter(chapterId);
      const data = await getAdminDashboard();
      setChapters(data.chapters);
    } catch (error) {
      console.error('Error deleting chapter:', error);
    }
  };

  return (
    <div className="content-section">
      <h2 className="section-title">Manage Chapters</h2>
      <div className="chapters-list">
        {chapters.map((chapter) => (
          <div className="chapter-item" key={chapter.id}>
            <div className="chapter-details">
              <h3>{chapter.name}</h3>
              <p>{chapter.description}</p>
              <p>Members: {chapter.members} • Events: {chapter.events}</p>
            </div>
            <button
              className="chapter-button edit-button"
              onClick={() => handleEditChapter(chapter.id, { name: 'Updated Chapter', description: 'Updated Description' })}
            >
              Edit
            </button>
            <button
              className="chapter-button delete-button"
              onClick={() => handleDeleteChapter(chapter.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}