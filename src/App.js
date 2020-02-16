import React from 'react';
import DropDown from './Dropdown'

import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state={

      age:0
    }
  }

  greet(name){

    console.log(name,'came from child component')
    // set state
    this.setState({age:20})
  }

  render(){

    return(

      <React.Fragment>
        <h1>HankerHank, my age is {this.state.age}</h1>
        <DropDown id={64} greet={this.greet.bind(this)}/>
      </React.Fragment>
    )
  }
}

export default App;
