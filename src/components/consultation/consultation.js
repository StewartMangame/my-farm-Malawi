import React from "react";
import { Link } from "react-router-dom";
import Header from "../homepage/header";
import Footer from "../homepage/footer";

const Consultation = () => {
  return (
    <div>
      <Header />
    
    <div
      className="bg-cover bg-image: h-screen w-screen bg-image:object-cover"
      style={{
        backgroundImage: `URL(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="flex-grow flex flex-col justify-center items-center pt-[5%]">
        <h2 className="text-5xl font-bold text-green-500 text-center">
        CONSULT AGRICULTURAL EXPERTS 
        </h2>
        <p className="text-xl text-black font-bold mb-8 text-center pl-[10%] pr-[10%] pt-[8%]">
        Welcome, Farmers! Seeking expert guidance for your agricultural ventures? You've come to the right place. Our platform connects you with top-notch freelance consultants who can assist you with any aspect of your farming operations. Whether you need advice on crop management, soil analysis, pest control, or anything else, our knowledgeable experts are here to help. Feel at home and let's work together to ensure the success of your farming projects."
        </p>
        <p className="text-xl text-green-500 text-bold mb-12">
          
        </p>
        <div className="flex space-x-4">
          <Link to="/booking">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-700">
              Book appointment
            </button>
          </Link>
        </div>
      </div>
     
    </div>
    <Footer />
    </div>
  );
};

export default Consultation;
