import React, { useState } from 'react';
import ImageSlider from './ImageSlider';

const LessonCard = ({ id, title, content, quiz, images }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = async () => {
    if (!selectedAnswer) {
      alert('Please select an answer');
      return;
    }

    const response = await fetch('http://localhost:5000/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 1, lessonId: id, selectedAnswer }),
    });

    const data = await response.json();
    setQuizResult(data.isCorrect ? 'Correct!' : 'Wrong Answer');
  };

  return (
    <div className="lesson-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <ImageSlider images={images} />

      {quiz && (
        <div className="quiz-section">
          <h3>{quiz.question}</h3>
          {quiz.options.map((option, index) => (
            <label key={index} className="option">
              <input
                type="radio"
                name={`quiz-${id}`}
                value={option}
                onChange={() => setSelectedAnswer(option)}
              />
              {option}
            </label>
          ))}
          <button onClick={handleQuizSubmit} disabled={!selectedAnswer}>Submit Answer</button>
          {quizResult && <p>{quizResult}</p>}
        </div>
      )}
    </div>
  );
};

export default LessonCard;
