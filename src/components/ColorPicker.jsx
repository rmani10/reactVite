import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  function updateColor(event) {
    setColor(event.target.value);
  }
  return (
    <div className="color-picker">
      <p>Color Picker</p>
      <p style={{ backgroundColor: color }}>Selected Color : {color}</p>
      <input type="color" onChange={updateColor} />
    </div>
  );
}

export default ColorPicker;
