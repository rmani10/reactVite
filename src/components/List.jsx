import React from "react";

function List() {
  const fruits = [
    { name: "apple", calories: 95 },
    { name: "orange", calories: 105 },
    { name: "banana", calories: 45 },
    { name: "watermelon", calories: 55 },
  ];
  const calorieLow = fruits.sort((a, b) => a.calories - b.calories);
  //   const alphaList = fruits.sort((a, b) => b.name.localeCompare(a.name));
  const fruitList = calorieLow.map((e) => (
    <li key={e.name}>
      {e.name}&nbsp;<b>{e.calories}</b>
    </li>
  ));
  return <ol>{fruitList}</ol>;
}

export default List;
