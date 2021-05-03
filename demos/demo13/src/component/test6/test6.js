import React from "react";

export default function Test6(props) {
  if (props.name) {
    return <h1>你好，{props.name}！6</h1>;
  } else {
    return <div><span>嘿，陌生人6</span></div>;
  }
}