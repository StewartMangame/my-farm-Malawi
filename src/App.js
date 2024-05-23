import "./App.css";
import Home from "./components/homepage/home";
import Markets from "./components/markets/markets";
import Footer from "./components/homepage/footer";
import Loans from './components/loans/loans';
import Loans from './components/loans/loanshome';
import SubsidyApplicationForm from './components/subsidy-application/subsidyApplicationForm';
import Cooperatives from './components/cooperatives/cooperative';
import Consultation from './components/consultation/bookingForm';
import LandingPage from './components/consultation/consultation';


//import Login from './components/login/login';

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
