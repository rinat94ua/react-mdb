import React from 'react'

import { StyledGrid, StylesGridContent } from '../styles/StyledGrid'

export function Grid({ header, children }) {
  return <StyledGrid>
    <h1>{header}</h1>
    <StylesGridContent>
      {children}
    </StylesGridContent>
  </StyledGrid>
}