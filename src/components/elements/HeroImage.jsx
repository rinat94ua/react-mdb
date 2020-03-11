import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeroImage } from '../styles/StyledHeroImage'

export function HeroImage({ title, text, image }) {
  return (
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  )
}

HeroImage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
}