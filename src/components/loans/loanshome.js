import React from "react";
import { Link } from "react-router-dom";

const Loanshome=()=>{
    return(
    <div className="bg-gray-300" >
<div>
    
<h1 className="text-4xl font-bold p-4 text-center text-4xl underline underline-offset-8 text-green-600">Loans</h1>
</div>
<div  className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center">
<div className="flex-1 text-2xl">

<p className="text-3xl">National bank of malawi</p>
<p>The nation of Malawi plc opens a window for farmers</p>
<p>The bank is offering loans to its citizens at a fair</p>
<p>and affordable .......</p>
<button className="mt-2 bg-blue-300 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white-400 hover:shadow-lg transition duration-300 ease-in-out hover:font-bold w-30">
<Link to="/loans" >
    visit &gt;</Link> 
    </button>
    </div>
    

    <div  >
    <img src="https://th.bing.com/th?id=OIP.fGZ-VlTu8ehr-K_8QzZiLQHaEA&w=339&h=183&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="National Bank of Malawi Loans"></img>
</div>


</div>

<div className="bg-white p-4 rounded-lg shadow-md flex flex-row items-center">
    <div className="flex-1 text-2xl">
<p className="text-3xl">NBS Bank plc</p>
<p>The NBS Bank plc has acquire a 10-year Five</p>
<p>million US dollar loan from the international Fund for</p>
<p>Agriculture Development(IFAD)to enable farmers improve there productivity in malawi....</p>
<button className="mt-2 bg-blue-300 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white-400 hover:shadow-lg transition duration-300 ease-in-out hover:font-bold w-30">
<Link to="/loans" >
    visit  &gt; </Link> 
    </button>
    </div>


 
<div w-100 h-90>
    <img src="https://th.bing.com/th/id/OIP.pePcKGGA2nMcrYCNZ0s6oAHaFU?rs=1&pid=ImgDetMain" alt="NBS Bank Loans"></img>
</div>
</div>


</div>
)}
export default Loanshome;

