import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserSelection from './components/UserSelection';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<UserSelection />} />
          <Route path="/browse" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;