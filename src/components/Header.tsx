import { FunctionComponent } from "react";

interface Props {
  title?: string;
  message?: string;
  img?: string;
  imgAlt?: string;
}

export const Header: FunctionComponent<Props> = ({
  title,
  message,
  img,
  imgAlt,
}) => {
  return (
    <header>
      <h1>{title || "This is a heading"}</h1>
      <p>{message || "This is a paragraph"}</p>
      <img src={img || "/logo512.png"} alt={imgAlt || "React logo"} />
    </header>
  );
};
