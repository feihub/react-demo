// import logo from './logo.svg';
import "./App.css";
import FilterableProductTableStatic from "./productStatic/FilterableProductTableStatic";
import FilterableProductTable from "./product/FilterableProductTable";

function App() {
  const products = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ];

  return (
    <>
      <div>
        <h3 className="bg-info App">react 哲学-第一步静态页面无交互</h3>
        <FilterableProductTableStatic product={products} />
      </div>

      <div>
        <h3 className="bg-info App">react 哲学-添加交互</h3>
        <FilterableProductTable product={products} />
      </div>
    </>
  );
}

export default App;

/**
 * 你可以自上而下或者自下而上构建应用：
 * 自上而下意味着首先编写层级较高的组件（比如 FilterableProductTable）;
 * 自下而上意味着从最基本的组件开始编写（比如 ProductRow）。
 * 当你的应用比较简单时，使用自上而下的方式更方便；
 * 对于较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式。
 *
 * 第一步：将设计好的 UI 划分为组件层级:
 * FilterableProductTable
 *    SearchBar
 *    ProductTable
 *        ProductCategoryRow
 *        ProductRow
 *
 * 第二步：用 React 创建一个静态版本
 *
 * 第三步：确定 UI state 的最小（且完整）表示
 *
 * 第四步：确定 state 放置的位置
 *
 * 第五步：添加反向数据流
 */
