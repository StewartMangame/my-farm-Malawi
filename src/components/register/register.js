
import React,{ useState } from "react";

const Register =()=>{
    const [firstname,setfirstname]=useState('');
    const [lastname, setlastname]=useState('');
    const [phonenumber, setphonenumber]=useState('');
    const [password, setPassword]=useState('');
    const [emailaddress, setemailaddress]=useState('');
    
    const handleSubmit =(event)=>{
           
        console.log('firstname:',firstname);
        console.log('lastname:',lastname);
        console.log('phonenumber:', phonenumber);
        console.log('password:', password);
        console.log('emailaddress:', emailaddress);
    };
return(
            <>
        <div className="bg-green-500">
            <p className="text-center  text-2xl"> JOINING MY FARM</p>
            <div className="flex flec-col bg-green-500 items-center justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[500px]">
                    <label htmlFor="fname" id="fnamelabel" className="text-lg">First Name <span className="text-red-700">*</span></label>

                    <input type="text" name="fname" id="fName" placeholder="Enter your fisrt name: " className="border border-black rounded-1xl py-2"value={firstname} onChange={(event)=>setfirstname(event.target.value)} />

                    <label htmlFor="Iname" id="Inamelabel" className="text-lg">Last Name<span className="text-red-700">*</span></label>
                    <input type="text" name="Iname" id="IName" placeholder="Enter lastname" className="rounded-1xl py-2 border  border-black " value={lastname} onChange={(event)=>setlastname(event.target.value)} />

                    <label htmlFor="phonenumber" id="phonenumberlabel" className="text-lg">Phonenumber<span className="text-red-700">*</span></label>
                    <input type="tel" name="phonenumber" id="phonenumber" placeholder="Enter phonenumber" className="rounded-1 xl py-2 border border-black "value={phonenumber} onChange={(event)=>setphonenumber(event.target.value)}  />
                    <label htmlFor="email" id="emaillabel" className="text-lg">Email  Address</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email address" className="rounded-1xl py-2 border border-black "value={emailaddress} onChange={(event)=>setemailaddress(event.target.value)}  />

                    <label htmlFor="password" id="passwordlabel" className="text-lg">Password <span className="text-red-700">*</span></label>
                    <input type="password" name="password" id="password" placeholder="Enter password" className="rounded-1xl py-2 border border-black "value={password} onChange={(event)=>setPassword(event.target.value)}  />

                    <button type="submit" className="bg-orange-500 hover:bg-orange-700  text-white font-hold py-2 px-2 rounded">
                        Join securely
                    </button>
                    <div><p>By proceeding to open an account: i accept My Farm <strong>Terms and conditions.</strong> i have read and understood My Farm <strong>Privacy policy & cookies Policy</strong> as published on the site and confirm iam 18 years of age or over.</p></div>
                </form>
            </div>
            </div>
        </>
    );
};
export default Register;