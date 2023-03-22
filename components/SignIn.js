import React from 'react';
import { signInUser } from '../utils/auth';

function SignIn() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <button type="button" size="lg" className="copy-btn" onClick={signInUser}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
