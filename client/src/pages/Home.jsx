// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Spinner  } from "@material-tailwind/react";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const pincode = JSON.parse(localStorage.getItem('user')).pincode;
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}check-pin`, { pincode });
      setUser(res.data);
    };
    fetchUserData();
  }, []);

  
  
  if (!user) {
    return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner  />   
    </div>
  )
  };

  return (
    <div className="mb-20 flex flex-col items-center justify-start min-h-screen bg-white relative min-w-fit border">
      <div className="absolute top-0 left-0 w-full h-2/5 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/images/noback.png')" }}>
      </div>
      <div className=" rounded-lg w-full max-w-md p-8 pt-0  bg-transparent flex justify-start items-center flex-col  z-10 mt-8">
          <Typography variant="h4" color="blue" className="font-bold text-primary">
          Policies
          </Typography>
          <img
            height={120}
            width={120}
            src="/assets/policy.png"
            alt="lock image"
            className="mt-2"
          />
        <div className="w-full p-4 border rounded-t-lg border-primary bg-white mt-4">
        <Typography  color="blue" className="font-semibold text-primary text-sm">
          Ref: {user.regNumber}
        </Typography>
          <p className="text-sm text-gray-500">{user.fullName}</p>
          <Typography  color="blue" className="font-semibold text-primary text-sm">
          Reg: <span className="text-black">{user.regNumber}</span>
          </Typography>
        </div>
        <div className="w-full p-4 border-y-0 border  border-primary bg-white">
          <Typography  color="blue" className="font-semibold text-primary text-sm">
            Start date & time: 
          </Typography>
          {/*<p>{user.startDateAndTime}</p>*/}
          <p className="text-sm text-gray-500">{user.endDateAndTime}</p>
          
          <Typography  color="blue" className="font-semibold text-primary text-sm">
            End date & time: 
          </Typography>
          <p className="text-sm text-gray-500">{user.endDateAndTime}</p>
        </div>
        <div className="w-full p-4 border rounded-b-lg  border-primary  bg-white">
          <Typography  color="blue" className="font-semibold text-primary text-sm">
            Policy Status
          </Typography>
          <p className="text-gray-600 text-sm">ACTIVE</p>
        </div>
        <Button className="mt-4 bg-white border-primary text-white p-2 rounded " variant="outlined">
        <Typography variant="small" color="white" className="font-medium text-sm text-primary">
        View Documents
        </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Home;
