export interface IMovie {
  adult?: boolean
  backdrop_path: string
  genre_ids: Array<number>
  id: number
  original_language: string
  original_title: string
  original_name?: string
  origin_country?: Array<number>
  overview: string
  popularity: string | number
  poster_path: string
  release_date?: string
  first_air_date?: string
  title?: string
  name?: string
  video?: boolean
  vote_average: string | number
  vote_count: number
}
