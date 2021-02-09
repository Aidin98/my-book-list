import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from  "./components/Header.js"
import PraveForme from './components/PraveForme';


class App extends React.Component{
  render(){
    return(
      <div className='main'>
        <Header />
        <PraveForme />
        
      </div>
    )
  }
}

export default App;
