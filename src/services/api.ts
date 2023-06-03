import axios from 'axios'
import { headers } from 'next/dist/client/components/headers'

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTM3YzAzMjFhMWQ0NzI4ZTA5ZTI3YjEyODczNjIxNSIsInN1YiI6IjYwMmJmNzY0NjNkOTM3MDAzZmNmMDZmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9xSWO2XlL-RmjClEN4U_6xRH8u57ZDYqWOH9pyxKrYM'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export async function getPopularMovies(page: number = 1) {
  try {
    const { data } = await api.get(`/movie/popular?language=en-US&page=${page}`)
    return data
  } catch (error) {
    return null
  }
}

export async function getTopRatedMovies(page: number = 1) {
  try {
    const { data } = await api.get(
      `/movie/top_rated?language=en-US&page=${page}`
    )
    return data
  } catch (error) {
    return null
  }
}

export async function getUpcomingMovies(page: number = 1) {
  try {
    const { data } = await api.get(
      `/movie/upcoming?language=en-US&page=${page}`
    )
    return data
  } catch (error) {
    return null
  }
}
