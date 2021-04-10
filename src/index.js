import React from 'react'
import ReactDOM from 'react-dom'

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const AppContainer = require('./containers/AppContainer').default

  ReactDOM.render(
    <React.StrictMode>
      <AppContainer />
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