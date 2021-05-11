//高阶组件（HOC）它是一种基于 React 的组合特性而形成的设计模式。
//高阶组件是参数为组件，返回值为新组件的函数。

function InputComponent(){
    return <h4>This is InputComponent</h4>
}

function logProps(InputComponent) {
    InputComponent.prototype.componentDidUpdate = function(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    };
    // 返回原始的 input 组件，暗示它已经被修改。
    return InputComponent;
  }
  
// 每次调用 logProps 时，增强组件都会有 log 输出。
const EnhancedComponent = logProps(InputComponent);

const Example5 = () => {
    return <EnhancedComponent/>;
}

export default Example5;
