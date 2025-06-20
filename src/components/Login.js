import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
      <p className="text-center text-gray-600 mb-6">Welcome back to ECOMMERCE</p>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <div className="relative">
            <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter" />
            <button type="button" className="absolute inset-y-0 right-0 px-3 text-gray-600">Show</button>
          </div>
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md">LOGIN</button>
      </form>
      <p className="text-center mt-4">Don't have an Account? <a href="/signup" className="font-bold">SIGN UP</a></p>
    </div>
  );
};

export default Login;