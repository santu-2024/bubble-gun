import React, { Component } from 'react'

class Footer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <footer className='footer'>
        {'&copy; The Bubble Gun Project 2021'}
      </footer>
    )
  }
}

export default Footer