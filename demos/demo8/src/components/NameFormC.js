import React from "react";
export default class NameFormC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 18,
      mark: "你好， 这是在 text area 里的文本",
      hobby: "coconut"
    };
  }
  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeAge = e => {
    this.setState({ age: e.target.value });
  };
  handleChangeMark = e => {
    this.setState({ mark: e.target.value });
  };
  handleChangeHobby = e => {
    this.setState({ hobby: e.target.value });
  };
  handleSubmit2 = e => {
    alert(
      "Your input name is : " +
        this.state.name +
        " , and age is : " +
        this.state.age +
        "."
    );
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit2}>
          <div className="row">
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                Name:
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChangeName}
                />
              </label>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                age:
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChangeAge}
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
                Remark
                <textarea
                  className="form-control"
                  name="mark"
                  value={this.state.mark}
                  onChange={this.handleChangeMark}
                ></textarea>
              </label>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                Hobby
                <select
                  className="form-control"
                  name="hobby"
                  value={this.state.hobby}
                  onChange={this.handleChangeHobby}
                >
                  <option value="" disabled>
                    --Please Select--
                  </option>
                  <option value="grapefruit">葡萄柚</option>
                  <option value="lime">酸橙</option>
                  <option value="coconut">
                    椰子
                  </option>
                  <option value="mango">芒果</option>
                </select>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
