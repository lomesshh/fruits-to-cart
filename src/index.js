import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  state = {
    counter: 0,
    kiwi: 0,
    mango: 0,
    pineapple: 0,
    grapes: 0
  };

  oncombineaddkiwi = () => {
    this.setState({ kiwi: this.state.kiwi + 1 });
    this.setState({ counter: this.state.counter + 1 });
  };

  oncombinedelkiwi = () => {
    if (this.state.kiwi > 0) {
      this.setState({ kiwi: this.state.kiwi - 1 });
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  oncombineaddmango = () => {
    this.setState({ mango: this.state.mango + 1 });
    this.setState({ counter: this.state.counter + 1 });
  };

  oncombinedelmango = () => {
    if (this.state.mango > 0) {
      this.setState({ mango: this.state.mango - 1 });
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  oncombineaddpineapple = () => {
    this.setState({ pineapple: this.state.pineapple + 1 });
    this.setState({ counter: this.state.counter + 1 });
  };

  oncombinedelpineapple = () => {
    if (this.state.pineapple > 0) {
      this.setState({ pineapple: this.state.pineapple - 1 });
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  oncombineaddgrapes = () => {
    this.setState({ grapes: this.state.grapes + 1 });
    this.setState({ counter: this.state.counter + 1 });
  };

  oncombinedelgrapes = () => {
    if (this.state.grapes > 0) {
      this.setState({ grapes: this.state.grapes - 1 });
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div className="App">
        <div id="btn-container">
          <h1>Total Items in 🛒 : {this.state.counter} </h1>
          <br />
          <div>
            <h1>🥝</h1>
            <h3>Kiwis in cart : {this.state.kiwi} </h3>
            <button onClick={this.oncombineaddkiwi} class="btn btn-success">
              <span class="badge badge-light">Add </span> To cart
            </button>
            <span>&ensp;&ensp;</span>
            <button onClick={this.oncombinedelkiwi} class="btn btn-danger">
              <span class="badge badge-light">Remove</span> from cart
            </button>
            <br />
            <br />
          </div>
          <div>
            <h1>🥭</h1>
            <h3>Mongos in cart : {this.state.mango} </h3>
            <button onClick={this.oncombineaddmango} class="btn btn-success">
              <span class="badge badge-light">Add </span> To cart
            </button>
            <span>&ensp;&ensp;</span>
            <button onClick={this.oncombinedelmango} class="btn btn-danger">
              <span class="badge badge-light">Remove</span> from cart
            </button>
            <br />
            <br />
          </div>
          <div>
            <h1>🍍</h1>
            <h3>Pineapple in cart : {this.state.pineapple} </h3>
            <button
              onClick={this.oncombineaddpineapple}
              class="btn btn-success"
            >
              <span class="badge badge-light">Add </span> To cart
            </button>
            <span>&ensp;&ensp;</span>
            <button onClick={this.oncombinedelpineapple} class="btn btn-danger">
              <span class="badge badge-light">Remove</span> from cart
            </button>
            <br />
            <br />
          </div>
          <div>
            <h1>🍇</h1>
            <h3>Grapes in cart : {this.state.grapes} </h3>
            <button onClick={this.oncombineaddgrapes} class="btn btn-success">
              <span class="badge badge-light">Add </span> To cart
            </button>
            <span>&ensp;&ensp;</span>
            <button onClick={this.oncombinedelgrapes} class="btn btn-danger">
              <span class="badge badge-light">Remove</span> from cart
            </button>
            <br />
            <br />
            <br />
            <h6 className="name">MADE WITH ❤️ BY LOMESH</h6>
          </div>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
