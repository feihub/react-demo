import React, { useEffect } from "react";

export default function Test5(props) {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      props.onSelect(null);
    }, 5000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [props.onSelect]);

  return (<div>{[1, 2, 3, 4].map(choice => (
    <button className="btn-info"
      key={choice}
      data-testid={choice}
      onClick={() => props.onSelect(choice)}
    >
      {choice}
    </button>
  ))
  }</div>);
}