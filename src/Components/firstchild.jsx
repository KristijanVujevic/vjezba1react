import React, { Component } from 'react';

class Firstchild extends Component {
    render() {
        const { age, name } = this.props;

        return (
            <div>
                <h2>First Child Component</h2>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </div>
        );
    }
}

export default Firstchild;