import React, { useState } from 'react'

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, API_KEY, API_URL } from '../config'

import { HeroImage } from './elements/HeroImage'
import { SearchBar } from './elements/SearchBar'
import { MoovieThumb } from './elements/MoovieThumb'
import { Grid } from './elements/Grid'
import { LoadModeBtn } from './elements/LoadMoreBtn'
import { Spinner } from './elements/Spinner'

import { useHomeFetch } from './hooks/useHomeFetch'

import NoImage from './images/no_image.png'


export function Home() {
  const [
    { 
      state: { moovies, currentPage, totalPages, heroImage },
      loading,
      error
    }, fetchMoovies] = useHomeFetch
  const [searchTerm, setSearchTerm] = useState('')

  const loadMoreMovies = () => {
    const searchEndpoint = `${API_URL}search/moovie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`
    const popularEndpoint = `${API_URL}moovie/popular?api_key=${API_KEY}&page=${currentPage + 1}`

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint

    fetchMoovies(endpoint)
  }

  if(error) return <div>Something went wrong...</div>
  if(moovies[0]) return <Spinner />

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
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