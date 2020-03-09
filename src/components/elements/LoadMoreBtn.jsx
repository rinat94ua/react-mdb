import React from 'react'

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn'

export function LoadModeBtn({ text, callback }) {
  return <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
}