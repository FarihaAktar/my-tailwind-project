import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Footer from './components/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/contact' component={Contact}/>
        </Switch>
  
      <Footer></Footer>
    </div>
  );
}

export default App;
