import { Component } from "inferno";

import Header from "./Header";
import Menu from "./Menu";
import Router from "./Router";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <Menu />
          <main class="mdl-layout__content">
            <div class="page-content">
              <Router />
            </div>
          </main>
        </div>
        );
      </div>
    );
  }
}

export default App;
