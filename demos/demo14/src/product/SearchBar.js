import React from "react";
export default class SearchBar extends React.Component {
  changeFilterText = e => {
    this.props.onFilterTextChange(e.target.value);
  };
  changeStockOnly = e => {
    this.props.onInStockChange(e.target.checked);
  };
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-4 col-lg-4">
            <input
              type="text"
              placeholder="Search..."
              value={filterText}
              onChange={this.changeFilterText}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-4 col-lg-4">
            <label>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={this.changeStockOnly}
              />
            </label>
            Only show products in stock
          </div>
        </div>
      </>
    );
  }
}
