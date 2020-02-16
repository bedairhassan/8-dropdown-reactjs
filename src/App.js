import React from 'react';
import { DropDown } from './DropDown'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      age: 0
    }
  }

  greet(name) {console.log(name, 'came from child component')} // 
  greet2(name) {console.log(name, 'came from child2 component')}

  render() {

    return (

      <React.Fragment>
        <h1>HankerHank, my age is {this.state.age}</h1>
        <DropDown greet={this.greet.bind(this)} data={['hassan', 'ali']}  />
        <DropDown greet={this.greet2.bind(this)} data={['hassan', 'ali']}  />
        {/* handleChange={this.handleChange.bind(this)} */}
      </React.Fragment>
    )
  }
}

export default App;
