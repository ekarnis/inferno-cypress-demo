import { Component } from "inferno";
import { BrowserRouter, Route } from "inferno-router";

import Header from "./Header";
import Menu from "./Menu";
import Input from "./Input";
import Output from "./Output";
import "./App.css";

class App extends Component {
  state = {
    input: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }
  };
  changeInput = input => {
    console.log(input);
    this.setState({ input });
  };

  render() {
    console.log("Rendering App");
    return (
      <div className="App">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <BrowserRouter>
            <Header />
            <Menu />

            <Route
              exact
              path="/input"
              render={() => (
                <Input
                  input={this.state.input}
                  changeInput={this.changeInput}
                />
              )}
            />
            <Route
              exact
              path="/output"
              render={() => (
                <Output
                  input={this.state.input}
                  changeInput={this.changeInput}
                />
              )}
            />
          </BrowserRouter>
        </div>
        );
      </div>
    );
  }
}

export default App;
