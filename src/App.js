import React, {Component}from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import contact from './components/contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      isLoaded : false
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        isLoaded:true,
        items:json,
      })
    })
  }
  render(){
    var { isLoaded, items } = this.state;
    if (!isLoaded){
      return <div>Go fuck your self</div>
    }else{
      console.log(items);
  return (
  <div>
    <ul>
      {items.map( item => (
        <li key={item.id}> 
          {item.name}
         </li>
      ))}
    </ul>
  <BrowserRouter>
   
    <div>
      <Navbar/>
      <Route exact path='/' component={home}/>
      <Route path='/about' component={about}/>
      <Route path='/contact' component={contact}/>
    </div>
  </BrowserRouter>
  </div>
);

}
}
}

export default App;
