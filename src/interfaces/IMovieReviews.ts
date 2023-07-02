export interface IMovieReviews {
  author: string
  author_details: IAuthorDetails
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
  read_more: boolean
}

interface IAuthorDetails {
  avatar_path: string | null
  name: string
  rating: number | null
  username: string
}
