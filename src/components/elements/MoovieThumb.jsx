import React from 'react'

import { StyledMovieThumb } from '../styles/StyledMovieThumb'

export function MoovieThumb({ image, moovieId, clickable }) {
  return <StyledMovieThumb>

    {
      clickable ? (
        <img className="clickable" src={image} alt="moovieThumb" />
        ) : (
          <img className="clickable" src={image} alt="moovieThumb" />
        )
    }

  </StyledMovieThumb>
}