import { BrowserRouter, Route } from "inferno-router";
import Input from "./Input";
import Output from "./Output";

import { Component } from "inferno";

class Router extends Component {
  state = {
    input: []
  };
  changeInput = input => {
    this.setState({ input });
  };
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/input"
          render={() => (
            <Input input={this.state.input} changeInput={this.changeInput} />
          )}
        />
        <Route
          exact
          path="/output"
          render={() => (
            <Output input={this.state.input} changeInput={this.changeInput} />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default Router;
