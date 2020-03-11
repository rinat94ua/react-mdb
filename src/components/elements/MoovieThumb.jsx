import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { StyledMovieThumb } from '../styles/StyledMovieThumb'

export function MoovieThumb({ image, moovieId, clickable }) {
  return <StyledMovieThumb>

    {
      clickable ? (
        <Link to={`/${moovieId}`}>
          <img className="clickable" src={image} alt="moovieThumb" />
        </Link>
        ) : (
          <img className="clickable" src={image} alt="moovieThumb" />
        )
    }

  </StyledMovieThumb>
}

MoovieThumb.propTypes = {
  image: PropTypes.string,
  moovieId: PropTypes.number,
  clickable: PropTypes.bool
}