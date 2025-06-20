import React, { useState } from 'react';

const SignUp = () => {
  const [isVerified, setIsVerified] = useState(false);

  if (isVerified) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Verify your email</h2>
        <p className="text-center text-gray-600 mb-6">Enter the 8 digit code you have received on dev***@revispy.com</p>
        <div className="flex justify-center space-x-2 mb-6">
          {[...Array(8)].map((_, i) => (
            <input key={i} type="text" maxLength="1" className="w-10 h-10 text-center border rounded-md" />
          ))}
        </div>
        <button className="w-full bg-black text-white py-2 rounded-md">VERIFY</button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">Create your account</h2>
      <form onSubmit={() => setIsVerified(true)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" placeholder="Enter" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" placeholder="Enter" />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md">CREATE ACCOUNT</button>
      </form>
      <p className="text-center mt-4">Have an Account? <a href="/login" className="font-bold">LOGIN</a></p>
    </div>
  );
};

export default SignUp;