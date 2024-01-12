import { Component } from "react";
import ShopDisplay from "./ShopDisplay";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.inventory = [
      { item_name: "Rolex watch", price: 400000 },
      { item_name: "Refrigerator", price: 15000 },
      { item_name: "Hulkbuster", price: 50000 },
      { item_name: "Laptop", price: 80000 },
    ];
  }
  render() {
    return (
      <div class="container">
        <h1>Items for sale:</h1>
        <ShopDisplay items={this.inventory} />
      </div>
    );
  }
}

export default Shop;
