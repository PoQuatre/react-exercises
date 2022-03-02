import { Component } from "react";

interface State {
  foods: string[];
}

export class Foods extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      foods: ["rice", "pasta", "chocolate", "hamburger"],
    };
  }

  render() {
    return (
      <>
        {this.state.foods.length === 0 ? (
          <p>The list is empty</p>
        ) : (
          <ul>
            {this.state.foods.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
