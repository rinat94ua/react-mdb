import { useState, useEffect } from "react";
import { POPULAR_BASE_URL } from "../../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ moovies: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMoovies = async endpoint => {
    setError(false)
    setLoading(true)

    const isLoadMore = endpoint.search('page')
    
    try {
      const result = await (await fetch(endpoint)).json()
      
      setState(prevState => ({
        ...prevState,
        moovies: isLoadMore !== -1
          ? [...prevState.movies, ...result.results]
          : [...result.results],
        heroImage: prevState.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }))
    } catch (err) {
      setError(true)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchMoovies(POPULAR_BASE_URL)
  }, [])

  return [{ state, loading, error }, fetchMoovies]
}

