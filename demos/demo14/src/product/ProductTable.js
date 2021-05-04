import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;
    this.props.product.forEach((product, idx) => {
      if (
        product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ||
        (inStockOnly && !product.stocked)
      ) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category + idx}
          />
        );
      }
      rows.push(
        <ProductRow
          stocked={product.stocked}
          name={product.name + idx}
          price={product.price}
          key={product.name + idx}
        />
      );
      lastCategory = product.category;
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
