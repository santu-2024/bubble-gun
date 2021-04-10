import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Header.Styles.css'

export const Header = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <header className={classNames('header')} role='navigation'>
      {children}
    </header>
  )
})

Header.displayName = 'PageLayout.Header'
Header.propTypes = {
  children: PropTypes.node
}
Header.defaultProps = {}

export default Header