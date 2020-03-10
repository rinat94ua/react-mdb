import React from 'react'
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