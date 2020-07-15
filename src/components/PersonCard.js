import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }
    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div className="container">
                <h2> {lastName}, {firstName}</h2>
                <ul>
                    <li>Age: {this.state.age}</li>
                    <li>Hair Color: {hairColor}</li>
                </ul>
                <button onClick = { ()=> this.setState({age: this.state.age +=1})}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;