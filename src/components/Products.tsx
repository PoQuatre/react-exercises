import { Product } from "./Product";
import { Component } from "react";

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Product 1's description",
    price: 1.23,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Product 2's description",
    price: 4.56,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Product 3's description",
    price: 7.89,
  },
];

export class Products extends Component {
  render() {
    return (
      <>
        {products.length === 0 ? (
          <p>The list is empty</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <Product {...product} />
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
