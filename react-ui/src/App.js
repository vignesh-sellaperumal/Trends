import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route } from 'react-dom';
import HomeComponent from './pages/HomeComponent';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={"/"} component={HomeComponent} />
    </BrowserRouter>
  );

}

export default App;
