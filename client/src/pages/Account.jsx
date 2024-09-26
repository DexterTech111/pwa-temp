// src/pages/Account.js
import React from 'react';
import { Button, Typography, Card, CardBody, CardFooter, CardHeader  } from "@material-tailwind/react";

const Account = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="mb-20 flex flex-col items-center p-6 justify-start min-h-screen bg-white relative  border">
       <div className="absolute top-0 left-0 w-full h-2/5 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/images/noback.png')" }}>
       </div>
       
       
       <div className="rounded-lg w-full   pt-0  bg-transparent flex justify-start items-center flex-col  z-8 ">
      
        <Typography variant="h4" color="blue" className="font-bold text-primary z-10 ">
          Covered Club
        </Typography>
        <img
            height={100}
            width={100}
            src="/assets/covered.png"
            alt="lock image"
            className="mt-2 z-10"
          />
          
          
       <Card className='mt-10 w-full'>
        <CardHeader className="bg-primary text-white p-3">
          <Typography variant="h6">Account details</Typography>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col mb-4">
            <Typography variant="small" className="text-gray-700 text-sm">Phone:</Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="text-gray-900 text-sm">{user.phoneNumber}</Typography>
              <Button className='bg-primary text-white text-sm' size="sm">Edit</Button>
            </div>
          </div>
          <div className="flex flex-col">
            <Typography variant="small" className="text-gray-700">Email:</Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="text-gray-900">{user.email}</Typography>
              <Button className='bg-primary text-white text-sm' size="sm">Edit</Button>
            </div>
          </div>
        </CardBody>
      </Card>
      
      <Card className='mt-12 w-full '>
        <CardHeader className="bg-primary text-white p-3">
          <Typography variant="h6">User details</Typography>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col mb-4 mt-2">
            <Typography variant="small" className="text-gray-700 text-sm">Name</Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="text-gray-900 text-sm">{user.fullName}</Typography>
              
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <Typography variant="small" className="text-gray-700">D.O.B:</Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="text-gray-900">{user.dateOfBirth}</Typography>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <Typography variant="small" className="text-gray-700 text-sm">Address</Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="text-gray-900 text-sm">{user.address}</Typography>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <Typography variant="small" className="text-gray-700">Occupation</Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="text-gray-900">{user.occupation}</Typography>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <Typography variant="small" className="text-gray-700 text-sm">Licence</Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="text-gray-900 text-sm">{user.licenseNumber}</Typography>
             
            </div>
          </div>
          <div className="flex flex-col">
            <Typography variant="small" className="text-gray-700">Licence held for</Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6" className="text-gray-900">{user.licenseHeldFor}</Typography>
            </div>
          </div>
          
          <p className='text-primary mt-8'>
            Please check your details are correct. In order to process your application we will
            verify your identity and may check your details with credit reference and fraud
            prevention agencies. Entering incorrect data risks invalidating your policy.
          </p>
          
          
          
        <a href="/signout" className='w-full mb-5 mt-5'>
          <Button className="mt-4 bg-primary text-white p-2 rounded w-full mt-5">
                <Typography className='text-lg text-light-blue-50'>
                Logout
                </Typography>
          </Button>
        </a>
        
        </CardBody>
      </Card>
        
        
        
        
   
       
      </div>
    </div>
  );
};

export default Account;
