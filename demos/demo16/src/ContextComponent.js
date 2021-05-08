import React from 'react';
import { Button } from 'react-bootstrap';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
export const themes = {
  info: "info",
  dark: "dark",
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});

export default class ContextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.state = {
      theme: themes.info,
      toggleTheme: this.change,
    };
  }

  change() {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.info
          : themes.dark,
    }));
  }

  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  static contextType = ThemeContext;
  render() {
    return <Button variant={this.context.theme} onClick={this.context.toggleTheme}> ContextComponent </Button>;
  }
}
