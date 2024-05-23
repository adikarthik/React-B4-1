import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FAQ from './components/Accordion/FAQ';
import Footer from './components/Footer/Footer';
import Team from "./components/Team/Team";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import './App.css';


function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<><LoginSignup /></>} />
          <Route path='/team' element={<><FAQ /><Team /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
