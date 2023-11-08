import React from 'react';

const Secondchild = ({age,name}) => {
    return (
        <div>
            <h2>Second Child Component</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default Secondchild;
