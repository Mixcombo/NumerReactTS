import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Bisection from './RootOfEquations/Bisection';
import Falsepos from './RootOfEquations/Falseposition';
import Onepoint from './RootOfEquations/Onepoint';
import Newton from './RootOfEquations/NewtonRaph';
import Secant from './RootOfEquations/Secant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bisection" element={<Bisection/>} />
          <Route path="/falseposition" element={<Falsepos/>} />
          <Route path="/onepoint" element={<Onepoint/>} />
          <Route path="/newtonraphson" element={<Newton/>} />
          <Route path="/secant" element={<Secant/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
