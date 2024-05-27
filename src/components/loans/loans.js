import React from "react";
import { Link } from "react-router-dom";
import Header from "../homepage/header";
import Footer from "../homepage/footer";

const Loans=()=>{
    return(
    <div className="bg-gray-300" >
        <Header/>
<div>
    
<h1 className="text-4xl font-bold p-4 text-center text-4xl underline underline-offset-8 text-green-600">Loans</h1>
</div>
<div  className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center">
<div className="flex-1 text-2xl">

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
          <a href="https://www.natbank.co.mw/banknet/index.php/personal/personal-loan-facilities/consumer-loans" >  <button  className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white-400 hover:shadow-lg transition duration-300 ease-in-out hover:font-bold w-80">Apply </button></a>
             
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
           <a href="https://www.natbank.co.mw/retail/personal-loan-facilities/farm-infrastructure-and-implements-loan"> <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white-400 hover:shadow-lg transition duration-300 ease-in-out hover:font-bold w-80">Apply </button></a>
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
           <a href='https://www.neef.mw/co-operative-loans/'> <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white-400 hover:shadow-lg transition duration-300 ease-in-out hover:font-bold w-80">Apply </button></a>
          </div>
          <div className="w-100 h-70">
            <img src="https://th.bing.com/th/id/OIP.se3AlVxXZ5f6jo1Dv2eEyAHaFa?rs=1&pid=ImgDetMain" alt="Money Loan" className="w-full h-full object-cover rounded-md "/>
          </div>
        </div>
      </div>


    </div>


 
<div w-100 h-90>
    <img src="https://th.bing.com/th/id/OIP.pePcKGGA2nMcrYCNZ0s6oAHaFU?rs=1&pid=ImgDetMain" alt="NBS Bank Loans"></img>
</div>
</div>

<Footer/>
</div>
)}
export default Loans;

