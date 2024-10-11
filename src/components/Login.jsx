import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-100">
      <h1 className="text-4xl font-bold mb-10">Welcome to InternLink</h1>
      <div className="space-x-4">
        <button
          onClick={() => onLogin('Intern')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Log in as Intern
        </button>
        <button
          onClick={() => onLogin('Recruiter')}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          Log in as Recruiter
        </button>
      </div>
    </div>
  );
};

export default Login;
