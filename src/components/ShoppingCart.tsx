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

const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
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

  incrementQuantity = (id: number) => {
    this.setState({
      cartProducts: this.state.cartProducts.map((product) =>
        product.id !== id
          ? product
          : {
              id,
              quantity: product.quantity + 1,
            }
      ),
    });
  };

  decrementQuantity = (id: number) => {
    this.setState({
      cartProducts: this.state.cartProducts.map((product) =>
        product.id !== id
          ? product
          : {
              id,
              quantity: product.quantity - 1,
            }
      ),
    });
  };

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
                  onIncrement={this.incrementQuantity}
                  onDecrement={this.decrementQuantity}
                />
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
