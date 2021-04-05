import React from 'react'
import ReactDOM from 'react-dom'

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./app').default

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    MOUNT_NODE
  )
}

if (module.hot) {
  module.hot.accept()
}

// Let's Go!
// ------------------------------------
render()