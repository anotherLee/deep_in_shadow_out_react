import React, { Component } from 'react';
import PropTypes from 'prop-types'
import store from "../store/Store"

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.onChange = this.onChange.bind(this)

    this.state = this.getOwnState()
  }

  componentDidMount() {
    store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    // store.unsubscribe(this.onChange)
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    }
  }

  onChange() {
    this.setState(this.getOwnState())
  }

  onClickIncrementButton() {
    this.updateCount(true);
  }

  onClickDecrementButton() {
    this.updateCount(false);
  }

  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

    this.setState({count: newValue})
    this.props.onUpdate(newValue, previousValue)
  }

  render() {
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
};

export default Counter;
