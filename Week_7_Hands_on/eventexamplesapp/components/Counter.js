import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.incrementAndGreet = this.incrementAndGreet.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayHello() {
    alert("Hello! This is a static message.");
  }

  incrementAndGreet() {
    this.increment();
    this.sayHello();
  }

  sayWelcome = (message) => {
    alert(message);
  }

  handleClick = (event) => {
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ marginBottom: '30px' }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementAndGreet}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button><br /><br />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button><br /><br />

        <button onClick={this.handleClick}>Synthetic Event Button</button>
      </div>
    );
  }
}

export default Counter;
