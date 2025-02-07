import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';

const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/lessons')
      .then(response => setLessons(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {lessons.map(lesson => (
        <LessonCard key={lesson.id} id={lesson.id} title={lesson.title} content={lesson.content} quiz={lesson.quiz} images={lesson.images} />
      ))}
    </div>
  );
};

export default LessonList;
