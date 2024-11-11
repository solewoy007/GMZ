import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RatingsPage from './pages/RatingsPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ratings" element={<RatingsPage />} />
      </Routes>
    </div>
  );
}

export default App;