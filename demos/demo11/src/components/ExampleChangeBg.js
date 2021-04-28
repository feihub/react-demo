import React, { useState } from "react";
import useColor from "./useColor";
function ExampleChangeBg() {
  const [colorStatus, setColorStatus] = useState(false);
  const color = useColor(colorStatus);
  return (
    <div className="row">
      <div>
        <button
          className="btn"
          style={{ backgroundColor: color }}
          onClick={() => setColorStatus(!colorStatus)}
        >
          点我改变背景色
        </button>
      </div>
    </div>
  );
}
export default ExampleChangeBg;
