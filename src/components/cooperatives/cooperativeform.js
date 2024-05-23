
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../homepage/header";




const Cooperativeform = ({ onAddCooperative }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    aim: '',
    structure: '',
    numMembers: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCooperative({ ...formData, id: Date.now() });
    navigate('/');
  };

  return (
    <div className="bg-green-500 " >
    
    <div className="bg-green-500 border border-gray-300 rounded-md p-5 mx-auto my-5 max-w-lg ">
      <header className="text-center mb-5">
        <h1 className="text-3xl font-bold">Cooperative Registration</h1>
      </header>
      <h2 className="text-center text-2xl font-bold mb-5">Create Cooperative</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block mb-2 font-bold text-left">Cooperative Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="location" className="block mb-2 font-bold bg-black-400 text-left">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="aim" className="block mb-2 font-bold text-left">Aim of Cooperative:</label>
          <textarea 
            name="aim"
            id="aim"
            value={formData.aim}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="structure" className="block mb-3 font-bold text-left">Type of Cooperative:</label>
          <select 
            name="structure" 
            id="structure" 
            value={formData.structure} 
            onChange={handleChange} 
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Choose an option</option>
            <option value="democratic">A cassava growing Cooperative</option>
            <option value="worker">Legume Production based Cooperative</option>
            <option value="consumer">Housing Cooperative</option>
            <option value="consumer">Financial Cooperative</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="numMembers" className="block mb-2 font-bold text-left">Number of Members:</label>
          <input
            type="number"
            name="numMembers"
            id="numMembers"
            value={formData.numMembers}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-center items-center">
        <button 
          type="submit" 
          className="bg-[orange] text-black py-2 px-5 border-none rounded-md w-full cursor-pointer text-center"
        >
          Register
        </button></div>
      </form>
    </div></div>
  );
};

export default Cooperativeform;