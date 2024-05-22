
import './App.css';
import Home from './components/homepage/home';
import Loans from './components/loans/loans';

import Loans from './components/loans/loanshome';

import Markets from './components/markets/markets';
import SubsidyApplicationForm from './components/subsidy-application/subsidyApplicationForm';
import Cooperatives from './components/cooperatives/cooperative';
import Consultation from './components/consultation/bookingForm';
import LandingPage from './components/consultation/consultation';


//import Login from './components/login/login';

import Cooperativeform from './components/cooperatives/cooperativeform';



const App = () => {
  
  
  return (
    <div className="App">


        <Home/>
        <Loans/>
        <Markets/>
      <LandingPage/>
      <Consultation/>
      <Cooperatives/>
       <Cooperativeform/>
        <SubsidyApplicationForm/>
        {/* <Login />
        <Register/> */}
     
    </div>
  );
}

export default App;