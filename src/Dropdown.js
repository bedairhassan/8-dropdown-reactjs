import React from 'react';
import './App.css';

export default class Dropdown extends React.Component {

    constructor(props) {

        super(props)


    }

    render() {

        return (

            <React.Fragment>
                <h2>dropdown {this.props.id}</h2>

                <button onClick={() => {
                    this.props.greet(20)
                }}>Click me</button>

            </React.Fragment>
        )
    }
}