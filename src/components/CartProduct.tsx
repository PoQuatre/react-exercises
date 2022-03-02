import { FunctionComponent } from "react";

interface Props {
  product?: {
    id: number;
    title: string;
    price: number;
  };
  quantity: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

export const CartProduct: FunctionComponent<Props> = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      {product === undefined ? (
        <tr>
          <td colSpan={5}>Invalid Product</td>
        </tr>
      ) : (
        <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>
            <button onClick={() => onDecrement(product.id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => onIncrement(product.id)}>+</button>
          </td>
          <td>{product.price}</td>
          <td>{(product.price * quantity).toFixed(2)}</td>
        </tr>
      )}
    </>
  );
};
