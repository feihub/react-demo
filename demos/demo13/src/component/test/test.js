import React from "react";

export default function Test(props) {
  if (props.name) {
    return <h1>你好，{props.name}！</h1>;
  } else {
    return <div><span>嘿，陌生人</span></div>;
  }
}