import { Component } from "inferno";

class Output extends Component {
  render() {
    console.log("Rendering Output");

    console.log(this.props.input);

    return (
      <div id="output-main">
        <li>
          {Array.from(Array(10).keys()).map(index => (
            <ul>{this.props.input[index] * this.props.input[index]}</ul>
          ))}
        </li>
      </div>
    );
  }
}

export default Output;
