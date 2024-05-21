import React from "react";
import "./loans.css";


const Loans=()=>{
  const loans=[
{id:1,
  name:'Money Loan',
  interestrate:16.5,
  value:500000,
  tenure:3,
  link:"https://firstcapitalbank.co.mw/personal/lending-facilities/personal-loans/",
  
},
{
id:2,
name:'Farm equipment Loan',
interestrate:10.5,
value:1000000,
tenure:2,
link:"https://www.natbank.co.mw/retail/personal-loan-facilities/farm-infrastructure-and-implements-loan",
},
{
  id:3,
  name:'Magulu Loan',
  interestrate:5,
  value:2000000,
  tenure:2,
  link:"https://ebrary.ifpri.org/digital/collection/p15738coll2/id/136709/#:~:text=Primary%20agricultural%20cooperatives%20in%20Malawi%2C%20in%20contrast%20to%20other%20farmer,the%20profit%20of%20their%20members.",


}

  ];

  return (
    <>
    <div className="container">
    <h1>
      Available Agriculture Loans
    </h1>
    <p>Welcome to Myfarm loan application site well we give you updates on the vailaible loans for farms and the links on how you can access then in different banksn around Malawi that have fair interest fees </p>
     <p>ts 100% online </p>
     <p>100% fair</p>
    <ul>
      
    <div className="card">
     {loans.map((loans) => (
      <li key={(loans.id)}>
      <h2>{loans.name}</h2>
      <p>interest rate: {loans.interestrate} %</p>
      <p>Maximum amount: {loans.value}</p>
      <p>Loan duration: {loans.tenure} years</p>
       <a href={loans.link}><button>Apply now</button></a>
      </li>

     ))}
      </div>
      <div className="card">
      </div>
    </ul>
    
    </div>
    </>
  );
};
export default Loans;

