import React from 'react'
import pic from './pic.png'

function About(){
    return(
        <div className='@apply bg-[rgb(226,214,214)] text-center'>
            <img className='@apply w-full h-[500px] object-cover' src={pic} alt='pic'/>
            <h1 className='@apply text-[green] font-bold text-4xl m-0 pt-[3%] p-0'>WELCOME TO MY FARM</h1>
            <p className='@apply text-2xl m-0 pt-[1.5%] p-0'>Our mission is to empower local farmers and producers by providing them with access to innovatives<br></br>
               tools, news, markets, loans, accesing consultation, registering Cooperatives and applying for subsidy.<br></br>
               We aim to to foster a supportive community that encourage collaborations and knowledge sharing,    <br></br>
               Ultimatery enhasing the productivity and profitability of agriculture venture across Malawi. 
            </p>
        </div>

    );
}
export default About;