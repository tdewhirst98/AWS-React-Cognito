import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SuccessPage from './SuccessPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SuccessPage" element={<SuccessPage />} /> 
        </Routes>
    </Router>
  );
};

export default App;
