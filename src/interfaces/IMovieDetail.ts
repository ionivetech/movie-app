export interface IMovieDetail {
  adult: boolean
  backdrop_path: string
  budget?: number
  created_by?: ICreatedBy[]
  episode_run_time?: number[]
  first_air_date?: string
  genres: IGenres[]
  homepage: string
  id: number
  in_production?: boolean
  imdb_id?: string
  languages?: string[]
  last_air_date?: string
  last_episode_to_air?: ILastEpisodeAir
  name?: string
  network?: INetwork[]
  number_of_episodes?: number
  number_of_seasons?: number
  origin_country?: string[]
  original_language: string
  original_title?: string
  original_name?: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompanies[]
  production_countries: IProductionCountries[]
  release_date: string
  revenue: number
  runtime: number
  seasons?: ISeasons[]
  spoken_languages: ISpokenLanguages[]
  status: string
  tagline: string
  title?: string
  type?: string
  video?: boolean
  vote_average: number
  vote_count: number
}

interface IGenres {
  id: number
  name: string
}

interface IProductionCompanies {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface IProductionCountries {
  iso_3166_1: string
  name: string
}

interface ISpokenLanguages {
  english_name: string
  iso_639_1: string
  name: string
}

interface ICreatedBy {
  credit_id: string
  gender: number
  id: number
  name: string
  profile_path: string
}

interface ILastEpisodeAir {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
  vote_average: number
  vote_count: number
}

interface INetwork {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface ISeasons {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}
