import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Advice from './interfaces/interface';
import getData from './dataservices/dataservice';
import HomeComponent from './components/HomeComponent';

function App() {


  return (
    <div>
      <HomeComponent />
    </div>
  );
}

export default App;