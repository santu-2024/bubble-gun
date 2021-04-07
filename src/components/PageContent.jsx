import React from 'react'
import PropTypes from 'prop-types'

const PageContent = (props) => {
  return (
    <section className="section" role={props.role}>
      <div className='headline'>
        <h2 className='title upper'>{props.title}</h2>
      </div>
      {props.children}
    </section>
  )
}

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.string,
  children: PropTypes.node
}
PageContent.defaultProps = {
  role: 'contentinfo'
}

export default PageContent