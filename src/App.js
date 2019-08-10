import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import contact from './components/contact';

class App extends Component
 {
render(){
  
  return (
  <BrowserRouter>
    <div>
      <Navbar/>
      <Route exact path='/' component={home}/>
      <Route path='/about' component={about}/>
      <Route path='/contact' component={contact}/>
    </div>
  </BrowserRouter>

);
  }
}

export default App;
