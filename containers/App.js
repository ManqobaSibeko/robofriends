import './App.css';
import Hello from "../components/Hello"
import Searchbox from "../components/Searchbox"
import Cardlist from "../components/Cardlists"
import Scroll from "../components/Scroll"
import {robots} from "../components/robots"
import React,{ Component } from 'react';





class App extends Component {

  constructor(){

    super()

    this.state = {
      robots:robots,
      searhfield:''
    }
  }
 

  onSearchChange =(event)=>{
    this.setState({searhfield:event.target.value})


  }




  render() {

    const filterRobots = this.state.robots.filter(robots=> {
      return robots.name.toLocaleLowerCase().includes(this.state.searhfield.toLocaleLowerCase())
    })
     
    

    return (
      <div className="App tc">
        
        <Hello greet={'Robo Friends'}/>
        <Searchbox searchChange = {this.onSearchChange}/> 

        <Scroll>
         <Cardlist robots = {filterRobots}/>
        </Scroll>
       

      </div>
    );
  
  }
 

}

export default App;
