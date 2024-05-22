import React from 'react';
import { Link } from 'react-router-dom';

//function component ive named it Loans that should output available loans and provide link for famers to apply for it
//it 
//ive commented here so coz i was failing to comment inside  
const Loans = () => {
  return (
    <div className="container mx-auto p-4 w-full bg-gray-100">
      <div className="bg-green-600 p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Available Agriculture Loans</h1>
      </div>
      <div className="p-4 text-center text-xl">
        <p>myfarm-malawi is here to help farmers and ranchers get the farming loan support they need to increase their farming production.</p>
        <p>Whether you’re a new farmer just getting started or a seasoned rancher in business for decades, we provide information about the available agriculture loan of fair interest options to help you meet your goals which is increasing productivity.</p>
        
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center">
          <div className="flex-1">
          
            <h2 className="text-3xl font-semibold">Money Loan</h2>
            <div className='text-2xl'>
            <p>Interest rate: 16.5%</p>
            <p>Minimum amount : Mk 50 000.00</p>
            <p>Maximum amount : Mk 500 000.00</p>
            <p>Loan duration: 1.5 - 3 years</p>
            </div>
          <a href="https://firstcapitalbank.co.mw/personal/lending-facilities/personal-loans/" >  <button  className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white-400 hover:shadow-lg transition duration-300 ease-in-out hover:font-bold w-80">Apply now</button></a>
             
          </div>
          <div className="w-100 h-700">
            <img src="https://th.bing.com/th/id/OIP.bBEzN-Drkhxji67YfCmkrAHaD4?rs=1&pid=ImgDetMain" alt="Money Loan" className="w-full h-full object-cover rounded-md "/>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold">Farm Equipment Loan</h2>
            <div className='text-2xl'>
            <p>Interest rate: 10.5%</p>
            <p>Minimum equipment value : Mk 250 000.00</p>
            <p>Maximum equipment value : Mk 10 000 000.00</p>
            <p>Loan duration:2 - 7 years</p>
            </div>
           <a href="https://firstcapitalbank.co.mw/personal/lending-facilities/personal-loans/"> <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white-400 hover:shadow-lg transition duration-300 ease-in-out hover:font-bold w-80">Apply now</button></a>
          </div>
          <div className="w-100 h-70">
            <img src="https://th.bing.com/th/id/OIP.3_gEehg_RQtGHrzCRvQyJQHaE8?rs=1&pid=ImgDetMain" alt="Farm Equipment Loan" className="w-full h-full object-cover rounded-md"></img>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold">Magulu Loan</h2>
            <div className='text-2xl'>
            <p>Interest rate: 5.5%</p>
            <p>Minimum amount : Mk 100 000.00</p>
            <p>Maximum amount : Mk 5 000 000.00</p>
            <p>Loan duration: 1.5 - 3 years</p>
            </div>
           <a href='https://ebrary.ifpri.org/digital/collection/p15738coll2/id/136709/#:~:text=Primary%20agricultural%20cooperatives%20in%20Malawi%2C%20in%20contrast%20to%20other%20farmer,the%20profit%20of%20their%20members.'> <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white-400 hover:shadow-lg transition duration-300 ease-in-out hover:font-bold w-80">Apply now</button></a>
          </div>
          <div className="h-70 w-100">
            <img src="https://th.bing.com/th/id/OIP.tGTVnwrTjJ-3kyhWgKnRzgHaEo?w=299&h=186&c=7&r=0&o=5&pid=1.7" alt="Money Loan" className="w-full h-full object-cover rounded-md "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
