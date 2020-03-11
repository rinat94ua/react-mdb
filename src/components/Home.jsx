import React, { useState } from 'react'

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, SEARCH_BASE_URL, POPULAR_BASE_URL } from '../config'

import { HeroImage } from './elements/HeroImage'
import { SearchBar } from './elements/SearchBar'
import { MoovieThumb } from './elements/MoovieThumb'
import { Grid } from './elements/Grid'
import { LoadModeBtn } from './elements/LoadMoreBtn'
import { Spinner } from './elements/Spinner'

import { useHomeFetch } from './hooks/useHomeFetch'

import NoImage from './images/no_image.jpg'


export function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [
    { 
      state: { moovies, currentPage, totalPages, heroImage },
      loading,
      error
    }, fetchMoovies] = useHomeFetch(searchTerm)

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL

    setSearchTerm(search)
    fetchMoovies(endpoint)
  }

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint

    fetchMoovies(endpoint)
  }

  if(error) return <div>Something went wrong...</div>
  if(moovies[0]) return <Spinner />

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? 'Search result' : 'Popular Moovies'}>
        {moovies.map(movie => (
          <MoovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage}
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading (
        <LoadModeBtn text="Load more" callback={loadMoreMovies} />
      )}
    </>
  )
}