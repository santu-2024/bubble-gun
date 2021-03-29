import React from 'react'
import PropTypes from 'prop-types'

export const PageLayout = ({ children }) => (
  <section className='min-height-full'>
    {children}
  </section>
)
PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout