import React, { Component } from 'react'

class ClickCounter extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.onClickButton = this.onClickButton.bind(this)
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  onClickButton() {
    let { count } = this.state
    this.setState({
      count: count + 1
    })
  }

  render() {
    console.log('render')
    const counterStyle = {
      margin: '16px'
    }
    return (
      <div style={counterStyle}>
        <button onClick={this.onClickButton}>Click me</button>
        <div>
          Click Count: { this.state.count }
        </div>
      </div>
    )
  }
}

export default ClickCounter
