import React, { useState } from "react";

function ArrayUpdate() {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function addfood(event) {
    const foodVal = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";
    setFoods((food) => [...food, foodVal]);
  }

  function removeinput(index) {
    setFoods(foods.filter((e, i) => i !== index));
  }
  return (
    <div>
      <ul>
        {foods.map((food, index) => (
          <li onClick={() => removeinput(index)} key={index}>
            {food}
          </li>
        ))}
      </ul>
      <input id="foodinput" type="text" />
      <button onClick={addfood}>Add</button>
    </div>
  );
}

export default ArrayUpdate;
