import React from 'react'

export default function HeroContent({ title }) {
  return (
    <section className='hero is-homepage'>
      <div className='hero-inner'>
        <div className='hero-main-content-wrapper'>
          <div className='hero-main-content'>
            <h1 className='hero-title'>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}