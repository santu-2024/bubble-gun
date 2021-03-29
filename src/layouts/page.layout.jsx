import React from 'react'
import PropTypes from 'prop-types'

export const PageLayout = ({ className, children }) => (
  <section className={className}>
    {children}
  </section>
)
PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout