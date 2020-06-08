import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  componentdidmount(){
  axios.get('https://192.168.43.200:5000/users/')
        .then(response => {
            const data = response.data;
            for(let d of data)
            {
                    alert(d.username);
            }
  })
    .catch(err => alert(err))
  }
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );

}

export default App;
