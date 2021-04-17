function Title() {
  return (
    <div className="container-fluid">
      <div className="alert alert-light">
        <h1>State&生命周期</h1>
        <h6>不要直接修改 State</h6>
        <h6>State 的更新可能是异步的</h6>
        <h6>State 的更新会被合并</h6>
        <h6>数据是向下流动的</h6>
      </div>
    </div>
  );
}

export default Title;