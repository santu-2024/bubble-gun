import React from 'react'
import classNames from 'classnames'
import './header.styles.css'

export const Header = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <header className={classNames('header')} role='navigation'>
      {children}
    </header>
  )
})

Header.displayName = 'PageLayout.Header'
Header.propTypes = {}
Header.defaultProps = {}

export default Header