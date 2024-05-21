
import './App.css';
import Home from './components/homepage/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loans from './components/loans/loans';
import Markets from './components/markets/markets';
import SubsidyApplicationForm from './components/subsidy-application/subsidyApplicationForm';
import Consultation from './components/consultation/consultation';
import Cooperatives from './components/cooperatives/cooperative';
import Cooperativeform from './components/cooperatives/cooperativeform';


const App = () => {
  const handleAddCooperative = (data) => {
    console.log('Cooperative added:', data);
  };



  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='loans' element={<Loans/>}/>
        <Route path="markets" element={<Markets/>}/>
        <Route path="consultation" element={<Consultation/>}/>
        <Route path="Cooperatives" element={<Cooperatives/>}/>
        <Route path="Cooperativeform" element={<Cooperativeform onAddCooperative={handleAddCooperative} />} />
        <Route path="subsidy-application" element={<SubsidyApplicationForm/>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
