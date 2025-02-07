import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonList from './components/LessonList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Interactive Chess Tutorial</h1>
        <Routes>
          <Route path="/" element={<LessonList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
