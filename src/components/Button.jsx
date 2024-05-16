import React from "react";

function Button() {
  let count = 0;
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`you clicked me ${count} times`);
    } else {
      console.log(`${name} stop fucking me`);
    }
  };

  return <button onClick={() => handleClick(name)}>Click me</button>;
}

export default Button;
