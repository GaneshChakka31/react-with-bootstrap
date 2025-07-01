import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', {
      mode: isLogin ? 'Login' : 'Create Account',
      emailOrPhone,
      keepSignedIn,
    });
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark text-white mt-5">
      <div className="p-4 rounded" style={{ maxWidth: 400, width: '100%' }}>
        <div className="d-flex justify-content-between mb-4 border border-light rounded-pill p-1 text-center">
          <div
            className={`flex-fill py-2 rounded-pill ${isLogin ? 'bg-light text-dark' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setIsLogin(true)}
          >
            Login
          </div>
          <div className="px-2 d-flex align-items-center">OR</div>
          <div
            className={`flex-fill py-2 rounded-pill ${!isLogin ? 'bg-light text-dark' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setIsLogin(false)}
          >
            Create Account
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <p className="text-center mb-3">Please enter your Email ID or Phone number</p>

          <input
            type="text"
            className="form-control mb-3 bg-dark text-white border-light"
            placeholder="Enter your Email ID or phone number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
           />

           <div className="form-check mb-3 d-flex align-items-center">
            <input
              className="form-check-input me-2 bg-success border-success"
              type="checkbox"
              checked={keepSignedIn}
              onChange={() => setKeepSignedIn(!keepSignedIn)}
              id="keepSignedIn"
            />
            <label className="form-check-label" htmlFor="keepSignedIn">
              Keep me signed in
            </label>
           </div>

           <p className="text-muted small text-light">
           <strong className='text-light'> By continuing you agree to our</strong>
            <a href="#" className="text-info text-decoration-none">Terms of Use</a> &{' '}
            <a href="#" className="text-info text-decoration-none">Privacy Policy</a>
           </p>

           <button type="submit" className="btn btn-success w-100 rounded-pill py-2">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
