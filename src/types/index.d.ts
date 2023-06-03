// Total results types dependencies
export type TotalResultsWithPages = {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export type Result = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: OriginalLanguage
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type OriginalLanguage = 'en' | 'fi' | 'ko'

// Unique movie type dependencies
export type TotalMovieDetails = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type BelongsToCollection = {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export type Genre = {
  id: number
  name: string
}

export type ProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type ProductionCountry = {
  iso_3166_1: string
  name: string
}

export type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}
