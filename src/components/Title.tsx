import { Component } from "react";

interface Props {
  title?: string;
  message?: string;
  img?: string;
  imgAlt?: string;
}

export class Title extends Component<Props> {
  render() {
    return (
      <div>
        <h1>{this.props.title || "This is a heading"}</h1>
        <p>{this.props.message || "This is a paragraph"}</p>
        <img
          src={this.props.img || "/logo512.png"}
          alt={this.props.imgAlt || "React logo"}
        />
      </div>
    );
  }
}
