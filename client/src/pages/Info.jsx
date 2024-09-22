// src/pages/Info.js
import React from 'react';
import { Button, Typography, Spinner  } from "@material-tailwind/react";



const Info = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-start min-h-screen bg-white relative min-w-fit border">
    
    <div className="absolute top-0 left-0 w-full h-2/5 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/images/noback.png')" }}>
    </div>
    
    <div className="rounded-lg w-full max-w-md p-8 pt-0  bg-transparent flex justify-start items-center flex-col  z-10 mt-8">
      
        <Typography variant="h4" color="blue" className="font-bold text-primary">
        Information
        </Typography>
        <img
            height={100}
            width={100}
            src="/assets/info.png"
            alt="lock image"
            className="mt-2"
          />
       <Typography variant="small"  className="text-base gap-3 text-primary mt-5">
       
          Here are a few key pieces of information about our products, services and how we process your data.
       </Typography>
       <Typography variant="small"  className="text-base gap-3 text-primary mt-5">
          If you need further assistance, please get in touch via Live Chat in app or Email:
        </Typography>
        <a href="mailto:contactus@tempcover.co.uk" className="text-primary my-5">contactus@tempcover.co.uk</a>
        <div className="mt-4">
          <button className="text-base font-semibold border border-primary p-3 rounded w-full mb-2 text-primary hover:bg-primary hover:text-white">APP FAQS</button>
          <button className="text-base font-semibold border border-primary p-3 rounded w-full mb-2 text-primary hover:bg-primary hover:text-white">ELIGIBILITY</button>
          <button className="text-base font-semibold border border-primary p-3 rounded w-full mb-2 text-primary hover:bg-primary hover:text-white"> CLAIMS</button>
          <button className="text-base font-semibold border border-primary p-3 rounded w-full mb-2 text-primary hover:bg-primary hover:text-white">REFUND POLICY</button>
          <button className="text-base font-semibold border border-primary p-3 rounded w-full mb-2 text-primary hover:bg-primary hover:text-white">PRIVACY POLICY</button>
          <button className="text-base font-semibold border border-primary p-3 rounded w-full mb-2 text-primary hover:bg-primary hover:text-white">CUSTOMER TERMS</button>
          <button className="text-base font-semibold border border-primary p-3 rounded w-full mb-2 text-primary hover:bg-primary hover:text-white">APP CONDITIONS OF USE</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
