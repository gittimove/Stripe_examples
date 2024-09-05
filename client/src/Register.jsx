import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('matti.virta@example.com');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('api/create-customer', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then(r => r.json());

    navigate('/prices', { replace: false });
  };

  return (
    <main>
      <h1>Populon Coach Register</h1>

      <img src="https://www.populon.fi/static/uploads/shutterstock_380348869_1024x683.jpg" alt="picsum generated"  width="320" height="240" / >
    
      <p>
        Populon example web site
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </label>

        <button type="submit">
          Register
        </button>
      </form>
    </main>
  );
}

export default Register;
