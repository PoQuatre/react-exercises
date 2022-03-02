import { FunctionComponent } from "react";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
  } | null;
  quantity: number;
}

export const CartProduct: FunctionComponent<Props> = ({
  product,
  quantity,
}) => {
  return (
    <>
      {product === null ? (
        <tr>
          <td colSpan={5}>Invalid Product</td>
        </tr>
      ) : (
        <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
          </td>
          <td>{product.price}</td>
          <td>{product.price * quantity}</td>
        </tr>
      )}
    </>
  );
};
