import React from 'react'
import PropTypes from 'prop-types'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Page Layout</h1>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout