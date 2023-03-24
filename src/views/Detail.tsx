import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// Services
import { getDetail } from 'services/MovieApi'
// Interfaces
import { IDetailPayload } from 'interfaces/IPayloads'

const Detail = () => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const { pathname } = useLocation()

  // Get Detail Movie
  const getDetailMovie = async () => {
    const type: string = pathname.split('/')[1]
    const id: string = pathname.split('/').slice(-1)[0]
    const payload: IDetailPayload = {
      api_key: apiKey,
      language: 'en-US',
    }
    const { data } = await getDetail(type, id, payload)
    console.log(data)
  }

  // Mounted
  useEffect(() => {
    getDetailMovie()
  }, [])

  return <div>haloo</div>
}

export default Detail
