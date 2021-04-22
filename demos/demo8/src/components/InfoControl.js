import React from "react";
export default class InfoControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameNotControlled: 18,
      mark: "",
      marry: true,
      abc: 123
    };
  }
  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: name === "marry" ? e.target.checked : e.target.value
    });
  };
  handleSubmit3 = e => {
    alert(
      "Your input name is : " +
        this.state.name +
        " , and marriage status is : " +
        this.state.marry +
        "."
    );
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit3}>
          <div className="row">
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                Name controlled:
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                Name not controlled:
                <input
                  type="text"
                  className="form-control"
                  name="name"
                //   value={this.state.nameNotControlled}
                  defaultValue = "19"
                //   onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <button className="btn bg-info" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                Remark：
                <textarea
                  className="form-control"
                  name="mark"
                  value={this.state.mark}
                  onChange={this.handleChange}
                ></textarea>
              </label>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                If Married:
                <input
                  className="checkbox"
                  type="checkbox"
                  name="marry"
                  value={this.state.marry}
                  onChange={this.handleChange}
                  checked={this.state.marry}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
