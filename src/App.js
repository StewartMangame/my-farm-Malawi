
import './App.css';
import Home from './components/homepage/home';
import Loans from './components/loans/loans';
import Markets from './components/markets/markets';
import SubsidyApplicationForm from './components/subsidy-application/subsidyApplicationForm';
import Consultation from './components/consultation/consultation';
import Cooperatives from './components/cooperatives/cooperative';
import Cooperativeform from './components/cooperatives/cooperativeform';


const App = () => {
 


 
  
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
