import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const Example3 = () => {
  const ref = React.createRef();
  return <FancyButton ref={ref}>Click me!</FancyButton>;
}

export default Example3;
