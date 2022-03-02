import { Component } from "react";
import { CartProduct } from "./CartProduct";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const products: Product[] = [
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

const getProductById = (id: number): Product | null => {
  const res = products.filter((product) => product.id === id);
  return res.length === 1 ? res[0] : null;
};

interface State {
  cartProducts: {
    id: number;
    quantity: number;
  }[];
}

export class ShoppingCart extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      cartProducts: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 3 },
        { id: 5, quantity: 3 },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.cartProducts.length === 0 ? (
          <p>The list is empty</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cartProducts.map((cartProduct) => (
                <CartProduct
                  product={getProductById(cartProduct.id)}
                  quantity={cartProduct.quantity}
                />
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
