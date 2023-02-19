import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Router from "./router/router";
import UserProvider from './Context/UserContext';
import './App.scss';


function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
