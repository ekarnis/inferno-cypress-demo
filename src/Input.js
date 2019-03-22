import { Component } from "inferno";

class Input extends Component {
  render() {
    return (
      <div id="input-main">
        {Array.from(Array(10)).map(index => index)}
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="sample3" />
          <label class="mdl-textfield__label" for="sample3">
            Text...
          </label>
        </div>
      </div>
    );
  }
}

export default Input;
