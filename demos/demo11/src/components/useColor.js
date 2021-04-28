import { useState, useEffect } from "react";
function useColor(colorStatus) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    // effect
    setColor("red");
  }, [color]);

  return colorStatus ? color : "green";
}

/**自定义 Hook
 * 自定义 Hook 必须以 “use” 开头
 * 在两个组件中使用相同的 Hook 不会共享 state 
 */
export default useColor;
