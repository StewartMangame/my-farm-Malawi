import './App.css';
import Home from './components/homepage/home';
import Loans from './components/loans/loans';
import Markets from './components/markets/markets';
import SubsidyApplicationForm from './components/subsidy-application/subsidyApplicationForm';
import Cooperatives from './components/cooperatives/cooperative';
import Consultation from './components/consultation/bookingForm';
import LandingPage from './components/consultation/consultation';

function App() {
  return (
    <div className="App">
      
        <Home/>
        <Loans/>
        <Markets/>
        <Consultation/>
        <LandingPage/>
        <Cooperatives/>
        <SubsidyApplicationForm/>
     
    </div>
  );
}

export default App;
