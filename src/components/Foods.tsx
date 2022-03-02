import { Component } from "react";

const foods = ["rice", "pasta", "chocolate", "hamburger"];

export class Foods extends Component {
  render() {
    return (
      <>
        {foods.length === 0 ? (
          <p>The list is empty</p>
        ) : (
          <ul>
            {foods.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
