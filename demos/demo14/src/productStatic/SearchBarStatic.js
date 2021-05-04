import React from "react";
export default class SearchBarStatic extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-4 col-lg-4">
            <input type="text" placeholder="Search..."/>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-4 col-lg-4">
            <label>
              <input type="checkbox" />
            </label>
            Only show products in stock
          </div>
        </div>
      </>
    );
  }
}
