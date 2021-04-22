import React from "react";
export default class InfoNotControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      nameNotControlled: 18
    };
    this.fileInput = React.createRef();
    this.ageInput = React.createRef();
  }
  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: name === "marry" ? e.target.checked : e.target.value
    });
  };
  handleSubmit3 = e => {
    alert(
      `Selected file - ${this.fileInput.current.files[0].name} and your age is ${this.ageInput.current.value} .`
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
                Name not controlled:
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  //   value={this.state.nameNotControlled}
                  defaultValue="19"
                  ref={this.ageInput}
                  //   onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="col-12 col-sm-4 col-lg-4">
              <div class="form-group">
                <label for="inputfile">Upload</label>
                <input type="file" id="inputfile" ref={this.fileInput} />
              </div>
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
