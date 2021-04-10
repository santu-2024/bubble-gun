import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as PhotoIcon } from '../assets/icons/icon-photo.svg'

const Thumbs = ({ data }) => {
  return (
    <div className='thumbs'>
      {
        data && data.length > 0 &&
        data.map((entry, index) =>
          <div key={index} className='thumb'>
            <a href={entry.href} title={entry.name}>
              <div className='box-img'>
                <img className='thumb-img'
                  alt={entry.name}
                  src={entry.photo} />
              </div>
              <div className='box-info'>
                <div className='description'>{entry.name}</div>
                <ul className='list-info'>
                  <li className='item'>
                    <PhotoIcon className='svg-icon' />
                    <div className='value'>{entry.count}</div>
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
  data: PropTypes.array.isRequired
}

export default Thumbs