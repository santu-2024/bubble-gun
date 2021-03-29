import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const PageLayout = ({ children }) => (
  <div className={classNames('container', 'text-center')}>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout