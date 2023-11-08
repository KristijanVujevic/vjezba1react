import React from "react";

const Thirdchild = ({ age, name }) => {
  return (
    <div>
      <h2>Third Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>
        These are the props received: {age} and {name}
      </p>
    </div>
  );
};

export default Thirdchild;
