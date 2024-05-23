import React from "react";
import { Link } from "react-router-dom";
import Header from "../homepage/header";
import Footer from "../homepage/footer";

const Consultation = () => {
  return (
    <div className="bg-gray-300"
    
      // className="bg-cover bg-image: h-screen w-screen bg-image:object-cover"
      // style={{
      //   backgroundImage: `URL(https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,backgroundSize:'cover',backgroundPosition: 'center'
      // }}
    >
      <Header/>
      <div className="flex-grow flex flex-col justify-center items-center pb-[10%]">
        <h1 className="text-5xl font-bold text-green-900">
          Consult different Agricultural Expert Here
        </h1>
        <p className="text-xl text-gray-800 text-bold mb-8">
          find expert consultants for your agriculture projects <br />
          more than 100 freelance top agriculture experts available
        </p>
        <p className="text-xl text-green-500 text-bold mb-12">
          different agriculture expert are aavailable here free free to consult
          any field you will get assisted <br />
          every problem has solution just seak help to relavant people
        </p>
        <div className="flex space-x-4">
          <Link to="/booking">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-700">
              Book appointment
            </button>
          </Link>
          <Link to="#">
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300">
              Search for Experts
            </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>

  
  );
};

export default Consultation;
