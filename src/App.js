import React from 'react';
// import Button from 'react-bootstrap/Button';
// import { Grid, Row, Col } from 'react-bootstrap';
import Navigation from './components/partials/navbar/Navigation';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Navigation />
      <Home />


    </div>
  );
}

export default App;
