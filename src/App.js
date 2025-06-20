import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <main className="flex justify-center items-center py-10">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;