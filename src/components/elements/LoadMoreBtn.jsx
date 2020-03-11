import React from 'react'
import PropTypes from 'prop-types'

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn'

export function LoadModeBtn({ text, callback }) {
  return <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
}

LoadModeBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
}