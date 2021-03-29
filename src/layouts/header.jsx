import React from 'react'
import classNames from 'classnames'

export const Header = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <header className={classNames('header', className && className)}>
      {children}
    </header>
  )
})

Header.displayName = 'PageLayout.Header'
Header.propTypes = {}
Header.defaultProps = {}

export default Header