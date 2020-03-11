import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { StyledNavigation } from '../styles/StyledNavigation'

export function Navigation({ movie }) {
  return (
    <StyledNavigation>
      <div className="navigation-content">
        <Link to="/">Home</Link>
        <p>|</p>
        <p>{movie}</p>
      </div>
    </StyledNavigation>
  )
}

Navigation.propTypes = {
  movie: PropTypes.string
}