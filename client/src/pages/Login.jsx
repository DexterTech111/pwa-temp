import React, { useState } from 'react';
import axios from 'axios';
import { Input, Typography } from "@material-tailwind/react";
import { LockClosedIcon } from '@heroicons/react/24/solid';

const Login = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (value) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}check-pin`, { pincode: value });
      localStorage.setItem('user', JSON.stringify(res.data));
      window.location.href = '/dashboard';
    } catch (error) {
      setError("Sorry, that's not quite right. Please try again.");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPin(value);
    if (value.length === 6) {
      handleLogin(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white relative">
      <div className="absolute top-0 left-0 w-full h-2/5 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/images/noback.png')" }}>
      </div>
      <div className="w-full max-w-md p-8 space-y-8 bg-transparent rounded-lg z-10 mt-20">
        <div className="flex flex-col items-center">
          <Typography variant="h4" color="blue" className="font-bold text-primary">
            Login
          </Typography>
          <img
            height={120}
            width={120}
            src="/assets/lock.png"
            alt="lock image"
            className="mt-2"
          />
          <Typography variant="h6" color="blue" className="text-primary mt-8 text-2xl">
            Please enter your pin
          </Typography>
          <div className='mt-2 w-5/6'>
          <Input
            type="password"
            maxLength={6}
            value={pin}
            onChange={handleChange}
            label="Pin"
            color="blue"
            className=""
          /> 
          </div>
          
          {error && <Typography color="red" className="mt-2">{error}</Typography>}
          <Typography variant="small" className="mt-4 text-base cursor-pointer text-primary">
            Forgotten pin? Tap here
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
