import React from 'react'

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

export default PageContent