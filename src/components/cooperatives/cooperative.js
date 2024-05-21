import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Cooperatives = () => {
  const [cooperatives] = useState([
    { id: 1, name: ' Demera Paprika Cooperative', location: 'Dedza', aim: 'Easy access to markets and make profits ', structure: 'Committee based', numMembers: 10 },
    { id: 2, name: 'Tithetse Umphawi Cooperative', location: 'Ntchisi', aim: 'Producing high quality Cassava flour', structure: 'Committee based', numMembers: 20 },
    { id: 3, name: 'Milindi Cooperative', location: 'Chiradzulu', aim: 'Producing high quality legumes', structure: 'Committee based ', numMembers: 7 },
    { id: 4, name: 'Ngolowindo Cooperative', location: 'Salima', aim: 'Improving Horticulture', structure: 'Committee based', numMembers: 13 },
    { id: 5, name: 'Umodzi Cooperative', location: 'Ntcheu', aim: 'Have access to inputs', structure: 'Committee based', numMembers: 29 },
  ]);

  const [selectedCooperative, setSelectedCooperative] = useState(null);

  const handleCooperativeClick = (coop) => {
    setSelectedCooperative(coop);
  };

  return (
    <div className="Cooperative-page bg-gray-300 min-h-screen p-4">
      <header className="cooperative-header bg-green-500 text-white p-4">
        <h1 className="text-8xl text-center text-black font-bold">Cooperatives</h1>
      </header>
      <main className="cooperative-content mt-4">
        <div className='flex justify-between items-center mb-4'>
          
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cooperatives.slice(0, 3).map(coop => (
            <div
              key={coop.id}
              className="cooperative-item border border-solid rounded-10px m-2.5 p-5 shadow-xl cursor-pointer"
              onClick={() => handleCooperativeClick(coop)}
            >
              <h2 className="cooperative-name text-center text-4xl font-semibold">{coop.name}</h2>
              <p className="cooperative-location text-gray-600 text-xl text-center">{coop.location}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {cooperatives.slice(3, 5).map(coop => (
            <div
              key={coop.id}
              className="cooperative-item border border-solid rounded-10px m-2.5 p-5 shadow-lg cursor-pointer"
              onClick={() => handleCooperativeClick(coop)}
            >
              <h2 className="cooperative-name text-center  text-4xl font-semibold">{coop.name}</h2>
              <p className="cooperative-location text-gray-600 text-xl text-center">{coop.location}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center mt-4' >
        <Link to="/cooperativeform" className="register-button mt-4 inline-block bg-orange-500 text-black py-2 px-4 rounded ">
          Register New Cooperative
        </Link> 
        </div>
      </main>
      {selectedCooperative && (
        <div className="cooperative-details bg-green text-red text-center p-4 shadow-md rounded-md mt-4">
          <h2 className="text-lg font-semibold">{selectedCooperative.name}</h2>
          <p>Location: {selectedCooperative.location}</p>
          <p>Aim: {selectedCooperative.aim}</p>
          <p>Structure: {selectedCooperative.structure}</p>
          <p>Number of Members: {selectedCooperative.numMembers}</p></div>
       
      )}
    </div>
  );
};

export default Cooperatives ;

