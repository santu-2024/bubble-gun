import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  return (
    <main className='main'>
      <div className='container'>{props.children}</div>
    </main>
  )
}

Main.protoTypes = {
  children: PropTypes.node
}

export default Main;