import React from 'react';
import LoginForm from '../components/login/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);

  return (
    <div>
      <p>Welcome!! Enter your password</p>
      <div className="bg-blue-400 w-3/6">
        <h2>Test Data</h2>
        <p>jorgeAnciel@gmail.com</p>
        <p>luis31443400</p>
      </div>
      <LoginForm />
      {isUserLogged && <Navigate to="/" replace />}
    </div>
  );
};

export default Login;
