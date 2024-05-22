
import './App.css';
import Home from './components/homepage/home';
import Loans from './components/loans/loans';

import Loans from './components/loans/loanshome';

import Markets from './components/markets/markets';
import SubsidyApplicationForm from './components/subsidy-application/subsidyApplicationForm';
import Consultation from './components/consultation/consultation';
import Cooperatives from './components/cooperatives/cooperative';

import Cooperativeform from './components/cooperatives/cooperativeform';


const App = () => {
 


import Login from './components/login/login';

 
  
  return (
    <div className="App">

        <Home/>
        <Loans/>
        <Markets/>
     <Consultation/>
      <Cooperatives/>
       <Cooperativeform  />
        <SubsidyApplicationForm/>
     
    </div>
  );
}

export default App;