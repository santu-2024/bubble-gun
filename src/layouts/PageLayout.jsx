import React from 'react'
import PropTypes from 'prop-types'

export const PageLayout = ({ children }) => (

  <section className='page'>
    {children}
  </section>
)
PageLayout.propTypes = {
  children: PropTypes.node
}
PageLayout.defaultProps = {
  children: PropTypes.node
}

export default PageLayout