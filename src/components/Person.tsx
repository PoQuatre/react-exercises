import { ChangeEvent, Component } from "react";

interface State {
  firstName: string;
}

export class Person extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      firstName: "",
    };
  }

  changeName = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ firstName: e.target.value });
  };

  render() {
    return (
      <>
        <p>{this.state.firstName}</p>
        <input
          type="text"
          value={this.state.firstName}
          onChange={this.changeName}
        />
      </>
    );
  }
}
