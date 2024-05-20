import React from 'react'
import './about.css';
import pic from './pic.png'

function About(){
    return(
        <div className='About'>
            <img className='pic' src={pic} alt='pic'/>
            <h1 className='wel'>WELCOME TO MY FARM</h1>
            <p className='mission'>Our mission is to empower local farmers and producers by providing them with access to innovatives<br></br>
               tools, news, markets, loans, accesing consultation, registering Cooperatives and applying for subsidy.<br></br>
               We aim to to foster a supportive community that encourage collaborations and knowledge sharing,    <br></br>
               Ultimatery enhasing the productivity and profitability of agriculture venture across Malawi. 
            </p>
        </div>

    );
}
export default About;