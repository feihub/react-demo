import React from "react";
export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (e) => {
    alert("You clicked Submit!");
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                Name:
                <input type="text" className="form-control" name="name" />
              </label>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <label>
                age:
                <input type="text" className="form-control" name="age" />
              </label>
            </div>
            <div className="col-12 col-sm-4 col-lg-4">
              <button className="btn bg-info" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
