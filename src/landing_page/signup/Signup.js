import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../utils'

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSignupInfo({ ...signupInfo, [name]: value });
  }

  console.log('signup Info', signupInfo);

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError('Name, email, and password are required');
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json(); // Call response.json() as a function
      const { success, message, error } = result;
      console.log(result);
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/signup');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details || message);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <div className='form-main-container'>
      <div className="form_container">
        <h2>Signup Account</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your username"
              value={signupInfo.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Already have an account? <Link to={'/signup/login'}>Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Signup
