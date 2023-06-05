import { TotalMovieDetails, TotalResultsWithPages } from '@/types'
import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTM3YzAzMjFhMWQ0NzI4ZTA5ZTI3YjEyODczNjIxNSIsInN1YiI6IjYwMmJmNzY0NjNkOTM3MDAzZmNmMDZmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9xSWO2XlL-RmjClEN4U_6xRH8u57ZDYqWOH9pyxKrYM'

export const poster_size = 'https://image.tmdb.org/t/p/w780'
export const backdrop_size = 'https://image.tmdb.org/t/p/w1280'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export async function getPopularMovies(
  page: number = 1
): Promise<TotalResultsWithPages | undefined> {
  try {
    const { data }: { data: TotalResultsWithPages } = await api.get(
      `/movie/popular?language=en-US&page=${page}`
    )
    return data
  } catch (error) {
    return undefined
  }
}

export async function getTopRatedMovies(
  page: number = 1
): Promise<TotalResultsWithPages | undefined> {
  try {
    const { data }: { data: TotalResultsWithPages } = await api.get(
      `/movie/top_rated?language=en-US&page=${page}`
    )
    return data
  } catch (error) {
    return undefined
  }
}

export async function getUpcomingMovies(
  page: number = 1
): Promise<TotalResultsWithPages | undefined> {
  try {
    const { data }: { data: TotalResultsWithPages } = await api.get(
      `/movie/upcoming?language=en-US&page=${page}`
    )
    return data
  } catch (error) {
    return undefined
  }
}

export async function findUniqueMovie(
  id: number
): Promise<TotalMovieDetails | undefined> {
  try {
    const { data }: { data: TotalMovieDetails } = await api.get(
      `/movie/${id}?external_source=imdb_id`
    )
    return data
  } catch (error) {
    return undefined
  }
}

export async function getSimilarMoviesFrom(
  id: number,
  page: number = 1
): Promise<TotalResultsWithPages | undefined> {
  try {
    const { data }: { data: TotalResultsWithPages } = await api.get(
      `/movie/${id}/similar?&page=${page}`
    )
    return data
  } catch (error) {
    return undefined
  }
}

export async function getRecomendationsFrom(
  id: number,
  page: number = 1
): Promise<TotalResultsWithPages | undefined> {
  try {
    const { data }: { data: TotalResultsWithPages } = await api.get(
      `/movie/${id}/recommendations?&page=${page}`
    )
    return data
  } catch (error) {
    return undefined
  }
}

export async function getTrendingMovies(
  time: 'week' | 'day',
  page: number = 1
): Promise<TotalResultsWithPages | undefined> {
  try {
    const { data }: { data: TotalResultsWithPages } = await api.get(
      `/trending/movie/${time}?&page=${page}`
    )
    return data
  } catch (error) {
    return undefined
  }
}

export async function findManyMovies(
  query: string,
  page: number
): Promise<TotalResultsWithPages | undefined> {
  try {
    const { data }: { data: TotalResultsWithPages } = await api.get(
      `/search/movie?query=${query}&page=${page}`
    )
    return data
  } catch (error) {
    return undefined
  }
}

export async function findMoviesByGenre(
  genreId: number
): Promise<TotalResultsWithPages | undefined> {
  try {
    const { data }: { data: TotalResultsWithPages } = await api.get(
      `/discover/movie?with_genres=${genreId}`
    )
    return data
  } catch (error) {
    return undefined
  }
}
