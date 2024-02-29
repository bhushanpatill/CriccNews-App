import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {

  render() {
    return (
      // style = {{backgroundColor:"#390339",color:"white"}}
      <div style = {{backgroundColor:"#390339",color:"white"}}>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

