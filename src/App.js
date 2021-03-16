import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
