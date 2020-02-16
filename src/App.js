import React from 'react';
import { DropDown } from './DropDown'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      age: 0,
      data1:[{item:'hassan',code:12},{item:'ali',code:32}],
      data2:[{item:'hassan-child1',code:12,parent:'hassan'},{item:'hassan-child2',code:12,parent:'hassan'},{item:'ali-child1',code:32,parent:'ali'}],
      codeDisplay1:0
    }
  }

  greet1(item) {

    // console.log(item, 'came from child component')
  
    var codeDisplay1 = this.state.data1.filter(obj=>obj.item===item)[0].code
    // console.log('code is ',code)

    console.log(this.state.data2)
    var data2=this.state.data2.filter(obj=>obj.parent===item)
    console.table(data2)
    console.log(`(${item})`)

    this.setState({codeDisplay1}) 
    this.setState({data2})
} // 
  greet2(name) {console.log(name, 'came from child2 component')}

  render() {

    return (

      <React.Fragment>
        <h1>HankerHank, my age is {this.state.age}</h1>
        <DropDown greet={this.greet1.bind(this)} data={['-',...this.state.data1]}  codeDisplay={this.state.codeDisplay1}/>
        <DropDown greet={this.greet2.bind(this)} data={['hassan', 'ali']}  />
        {/* handleChange={this.handleChange.bind(this)} */}
      </React.Fragment>
    )
  }
}

export default App;
