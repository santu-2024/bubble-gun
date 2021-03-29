import React from 'react'
import ReactDOM from 'react-dom'

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/app').default

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    MOUNT_NODE
  )
}

if (module.hot) {
  
}

// Let's Go!
// ------------------------------------
render()