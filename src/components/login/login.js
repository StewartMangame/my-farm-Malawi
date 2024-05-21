import React , { useState  } from 'react';
import { Link } from 'react-router-dom';

const Login=() =>{
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [error,setError]=useState(null);
    
    const handleSubmit =(event)=>{
           
        console.log('Username:',username);
        console.log('password:', password);

        setError('invalid username or password');
    };
    return(
        <div className="flex flex-col bg-green-500 gap-4 justify-center h-screen">
            <form onSubmit={handleSubmit} className=" flex flex-col  text-xl gap-4 w-1/3  mx-auto ">
                <h2 className="flex flex-col items-center  text-4xl font-bold ">Login</h2>
                <label className= "flex flex-col  w-[500px]" >Username:
                <input type="text" placeholder='Enter username...' value={username} onChange={(event)=>setUsername(event.target.value)}
                className="border border-black rounded-1xl py-2" />

                </label>
                <label className="flex flex-col  w-[500px]">password:
                <input type="password" placeholder='..................' value={password} onChange={(event)=>setPassword(event.target.value)} 
                className=" border border-black rounded-1xl py-2" />
                </label>
                <div className=' flex justify-center hover:underline'> Forgot password?</div>
                <button type="submit" className=" flex flex-col w-[500px] items-center bg-orange-500 hover:bg-orange-700 text-black font-hold py-2 px-2
                 rounded">
                    Login
                </button>
                { error &&(
                        <p className="text-red-500 text-sm ">{error}</p>
                    )}
                    <Link to="/register">
                     <div className="register--link">
                        <p className='flex flex-col items-center'> Or <a href=" " className='flex flex-col items-center hover:underline'> Sign up</a></p>
                    </div>
                    </Link>
            </form>
        </div>
    );
};

export default Login;