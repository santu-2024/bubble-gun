import React from 'react'
import classNames from 'classnames'

export const Header = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <header id='app-nav-bar' className={classNames('header', 'z-100')} role='navigation'>
      <div className='spacer'>&nbsp;</div>
      <div className='navbar'>
        <div className='navbar inner transition--all transition--fast absolute fixed:md z-1'>
          <div className='navbar holder px-2:md px-0:xl max-w-desktop-large:md width-full mx-auto'>

            <div className='navbar left flex-no-shrink width-full'>
              <div className='logo direction-row justify-center justify-start:md w-auto:md'>
                <a href='/' className='flex items-center direction-row u-position-relative h-11 h-auto:md' role='button' tabIndex='-1' title='Back to timeline'>
                  <span className='flex justify-center items-center w-19 w-auto:md' />
                </a>
              </div>
            </div>

            <div className='navbar center z-10 flex-1 justify-center'>
              <div className='relative'>
                <div className='flex direction-row items-center border-1 bg-white-ultra text-center rounded-full rounded:md relative transition--all'>
                  <span className='absolute pin-l ml-2 cursor-pointer' />
                  <input id='search' className='search-select-search color-darkest border-0 flex-1 block h-11 h-14:md text-s color-medium bg-transparent' placeholder='Search' />
                </div>
              </div>
            </div>

            <div className='navbar right' />

            {children}
          </div>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'PageLayout.Header'
Header.propTypes = {}
Header.defaultProps = {}

export default Header