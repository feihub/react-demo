import React from "react";
import SearchBarStatic from "./SearchBarStatic";
import ProductTableStatic from "./ProductTableStatic";
export default class FilterableProductTableStatic extends React.Component {
  render() {
    return (
      <>
        <SearchBarStatic />
        <ProductTableStatic product={this.props.product} />
      </>
    );
  }
}
