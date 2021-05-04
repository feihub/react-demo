import React, { useState } from "react";

export default function Toggle(props) {
  const [state, setState] = useState(false);
  return (<div>
    <button className="btn-info"
      onClick={() => {
        setState(previousState => !previousState);
        props.onChange(!state);
      }}
      data-testid="toggle"
    >
      {state === true ? "Turn off" : "Turn on"}
    </button></div>
  );
}