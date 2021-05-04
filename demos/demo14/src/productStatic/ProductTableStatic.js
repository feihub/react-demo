import React from "react";
import ProductCategoryRowStatic from "./ProductCategoryRowStatic";
import ProductRowStatic from "./ProductRowStatic";
export default class ProductTableStatic extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.product.forEach((product, idx) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRowStatic
            category={product.category}
            key={product.category + idx}
          />
        );
      }
      rows.push(
        <ProductRowStatic
          stocked={product.stocked}
          name={product.name + idx}
          price={product.price}
          key={product.name + idx}
        />
      );
      lastCategory = product.category;
    });
    return (
      <div
        style={{
          display: "inline-block",
          border: "1px solid green",
          width: "200px"
        }}
      >
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
