import { Component } from "inferno";
import { Link } from "inferno-router";

class Input extends Component {
  changeInput = index => event => {
    let input = { ...this.props.input };
    input[index] = event.target.value;
    this.props.changeInput(input);
  };

  render() {
    console.log("Rendering input");

    console.log(this.props.input);

    return (
      <div id="input-main">
        <li id="input-list">
          {Array.from(Array(10).keys()).map(index => (
            <ol class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                class="mdl-textfield__input"
                type="text"
                id={"input" + index}
                value={this.props.input[index]}
                onInput={this.changeInput(index)}
              />
            </ol>
          ))}
        </li>
      </div>
    );
  }
}

export default Input;
