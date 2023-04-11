import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// Services
import { getDetail } from 'services/MovieApi'
// Interfaces
import { IDetailPayload } from 'interfaces/IPayloads'
import { IMovieDetail } from 'interfaces/IMovieDetail'

const Detail = () => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const { pathname } = useLocation()
  const [detail, setDetail] = useState<IMovieDetail | null>(null)

  // Get Detail Movie
  const getDetailMovie = async () => {
    const type: string = pathname.split('/')[1]
    const id: string = pathname.split('/').slice(-1)[0]
    const payload: IDetailPayload = {
      api_key: apiKey,
      language: 'en-US',
    }
    const { data } = await getDetail(type, id, payload)
    if (data) setDetail(data)
  }

  // Mounted
  useEffect(() => {
    getDetailMovie()
  }, [])

  return (
    <div>
      {detail && (
        <>
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${detail.backdrop_path}`}
            alt={detail.title || detail.name}
          />

          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.poster_path}`}
            alt={detail.name}
          />
        </>
      )}
    </div>
  )
}

export default Detail
