import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Typography } from "@material-tailwind/react";
import { formatDateTime, formatDate2 } from "../utils/functions"; // Ensure these functions are properly imported if they are moved to a utils file

const AdminDashboard = () => {
  const [user, setUser] = useState({
    pincode: '',
    phoneNumber: '',
    email: '',
    fullName: '',
    dateOfBirth: '',
    occupation: '',
    address: '',
    licenseNumber: '',
    licenseHeldFor: '',
    regNumber: '',
    makeAndModel: '',
    endDateAndTime: '',
    policyHolderName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'endDateAndTime') {
      formattedValue = formatDateTime(value);
    }
    
    if (name === 'dateOfBirth') {
      formattedValue = formatDate2(value);
    }

    setUser((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}create-user`, user);
      alert('User created successfully');
    } catch (error) {
      alert('Error creating user');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-primary p-4">
        <div className="flex justify-between items-center">
          <Typography className='text-lg text-light-blue-50'>
            Admin Dashboard
          </Typography>
          {/*<button className="text-white">Menu</button>*/}
        </div>
        <ul className="mt-4 text-white">
          <li className="mb-4">
            <a href="/#">
              <Typography className='text-lg text-light-blue-50'>
                Create User
              </Typography>
            </a>
          </li>
          <li>
            <a href="/signout">
              <Typography className='text-lg text-light-blue-50'>
                Signout
              </Typography>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sidebar Navigation */}
      <nav className="hidden lg:flex lg:flex-col lg:w-64 bg-primary h-screen p-4 fixed top-0 left-0">
      <div className="flex justify-between items-center mb-7">
          <Typography variant="h2" className='text-lg text-light-blue-50'>
            Admin Dashboard
          </Typography>
          {/*<button className="text-white">Menu</button>*/}
        </div>
        <ul className="text-white">
          <li className="mb-4">
            <a href="/#">
              <Typography className='text-lg text-light-blue-50'>
                Create User
              </Typography>
            </a>
          </li>
          <li>
            <a href="/signout">
              <Typography className='text-lg text-light-blue-50'>
                Signout
              </Typography>
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex-1 lg:ml-64 p-8">
        <Typography className="text-2xl text-primary mb-4">Create User</Typography>
        <form onSubmit={handleSubmit} className='flex w-full flex-col items-end gap-4'>
          <Input variant="standard" value={user.pincode} onChange={handleChange} maxLength={6} label="Pin" name="pincode" />
          <Input variant="standard" value={user.phoneNumber} onChange={handleChange} label="Phone number" name="phoneNumber" />
          <Input variant="standard" value={user.email} onChange={handleChange} label="Email" name="email" />
          <Input variant="standard" value={user.fullName} onChange={handleChange} label="Full name" name="fullName" />
          <Input variant="standard" value={user.dateOfBirth} onChange={handleChange} label="Date of Birth" name="dateOfBirth" />
          <Input variant="standard" value={user.occupation} onChange={handleChange} label="Occupation" name="occupation" />
          <Input variant="standard" value={user.address} onChange={handleChange} label="Address" name="address" />
          <Input variant="standard" value={user.licenseNumber} onChange={handleChange} label="License Number" name="licenseNumber" />
          <Input variant="standard" value={user.licenseHeldFor} onChange={handleChange} label="License Held For" name="licenseHeldFor" />
          <Input variant="standard" value={user.regNumber} onChange={handleChange} label="Reg Number" name="regNumber" />
          <Input variant="standard" value={user.makeAndModel} onChange={handleChange} label="Make and Model" name="makeAndModel" />
          <Input variant="standard" value={user.endDateAndTime} onChange={handleChange} label="End Date and Time" name="endDateAndTime" />
          <Input variant="standard" value={user.policyHolderName} onChange={handleChange} label="Policy Holder Name" name="policyHolderName" />
          
          <Button className="bg-primary text-white p-3 w-full rounded" type='submit'>
            <Typography className="text-lg text-white">
              Create User
            </Typography>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
