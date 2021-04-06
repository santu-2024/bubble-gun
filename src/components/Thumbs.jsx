import React from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as PictureIcon} from '../assets/icons/icon-photo.svg'

const Thumbs = ({ models }) => {
  return (
    <div className='thumbs'>
      {
        (models && models.length > 0) &&
        models.map((actor, index) =>
          <div key={index} className='thumb'>
            <a href={actor.name} title={actor.name}>
              <div className='box-img'>
                <img className='thumb-img' alt={actor.name}
                  src={actor.thumb} />
              </div>
              <div className='box-info'>
                <div className='description'>{actor.name}</div>
                <ul className='list-info'>
                  <li className='item'>
                    <PictureIcon className='svg-icon'/>
                    <div className='value'>{actor.photos.count}</div>
                  </li>
                </ul>
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