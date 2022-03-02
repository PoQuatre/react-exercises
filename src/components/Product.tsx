import { Component } from "react";

interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
}

export class Product extends Component<Props> {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.description}</td>
        <td>{this.props.price}€</td>
      </tr>
    );
  }
}
