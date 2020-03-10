import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Router } from '@reach/router'

import Movie from './Movie'
import NotFound from './NotFound'

import { Header } from './elements/Header'
import { Home } from './Home'

const App = () => <>
  <Header />

  <Router>
    <Home path="/" />
    <Movie path="/:movieId" />
    <NotFound default />
  </Router>
  <GlobalStyle />
</>

export default App;
