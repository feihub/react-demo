import React, { useContext } from "react";

function ExampleColor() {
  const ThemeBtn = () => {
    const theme = useContext(ThemeContext);
    return (
      <button
        className="btn"
        style={{ background: theme.background, color: theme.foreground }}
      >
        看我颜色
      </button>
    );
  };
  const ToolBar = () => {
    return (
      <div>
        <ThemeBtn />
      </div>
    );
  };

  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  const ThemeContext = React.createContext(themes.light);

  return (
    <div className="row">
      <ThemeContext.Provider value={themes.dark}>
        <ToolBar />
      </ThemeContext.Provider>
    </div>
  );
}
/**
 * useContext(myContext) 参数是 myContext = React.createContext(defaultValue)的结果 // defaultValue是默认值
 * 与.provider 共同使用，可以进行多层组件传值，如果不传value，默认defaultValue，传value，就是value的值，如栗子中的themes.dark
 * useContext(myContext) 即为value中的值
 */
export default ExampleColor;
