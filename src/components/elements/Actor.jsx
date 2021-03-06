import React from 'react'
import PropTypes from 'prop-types'

import { StyledActor } from '../styles/StyledActor'

import NoImage from '../images/no_image.jpg'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'


export function Actor({ actor }) {
  return <StyledActor>
    <img
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
      }
      alt="actor thumb"
    />
    <span className="actor-name">{actor.name}</span>
    <span className="actor-character">{actor.character}</span>
  </StyledActor>
}

Actor.propTypes = {
  actor: PropTypes.object
}