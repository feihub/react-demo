import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };
  }
  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText
    });
  };

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly
    });
  };
  render() {
    return (
      <>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          product={this.props.product}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </>
    );
  }
}
