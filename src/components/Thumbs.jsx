import React from 'react'
import PropTypes from 'prop-types'

const Thumbs = ({ models }) => {
  return (
    <div className='thumbs'>
      {
        models.map((actor, index) =>
          <div key={index} className='thumb'>
            <a href={actor.name} title={actor.name}>
              <div className='box-img'>
                <img className='thumb-img' alt={actor.name}
                  src={actor.thumb} />
              </div>
            </a>
          </div>
        )
      }
    </div>
  )
}
Thumbs.propTypes = {
  models: PropTypes.array.isRequired
}

export default Thumbs