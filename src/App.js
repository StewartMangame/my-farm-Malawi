import './App.css';
import Home from './components/homepage/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loans from './components/loans/loans';
import Markets from './components/markets/markets';
import SubsidyApplicationForm from './components/subsidy-application/subsidyApplicationForm';
import Consultation from './components/consultation/consultation';
import Cooperatives from './components/cooperatives/cooperative';
import Home1 from './components/pages/home1';
import AboutD from './components/slider/aboutD';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='loans' element={<Loans/>}/>
        <Route path="markets" element={<Markets/>}/>
        <Route path="consultation" element={<Consultation/>}/>
        <Route path="cooperatives" element={<Cooperatives/>}/>
        <Route path="subsidy-application" element={<SubsidyApplicationForm/>}/>
      </Routes>
      <AboutD/>
      <Home1/>
      </BrowserRouter>
    </div>
  );
}

export default App;
