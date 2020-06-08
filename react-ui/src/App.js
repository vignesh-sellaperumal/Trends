import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  axios.get('http://localhost:5000/users/')
        .then(response => {
            const data = response.data;
            for(let d of data)
            {
                    alert(d.username);
            }
  })
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );

}

export default App;
