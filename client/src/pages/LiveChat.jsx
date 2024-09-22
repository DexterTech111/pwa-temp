// src/pages/LiveChat.js
import React from 'react';
import { Button, Typography, Spinner  } from "@material-tailwind/react";


const LiveChat = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white relative min-w-fit border">
    
      <div className="absolute top-0 left-0 w-full h-2/5 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/images/noback.png')" }}>
      </div>
      <div className="rounded-lg w-full max-w-md p-8 pt-0  bg-transparent flex justify-start items-center flex-col  z-10 mt-8">
      
        <div className="bg-transparent p-2 rounded-lg shadow-md ">
        <Typography variant="h6" color="blue" className="font-bold text-primary text-center">
          
            Live chat is currently unavailable. Please try again later.
        </Typography>
        </div>
      </div> 
    </div>
  );
};

export default LiveChat;
