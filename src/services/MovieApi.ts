import Api from 'services/BaseService'

const apiKey: string = import.meta.env.VITE_API_KEY

export const getPopular = async (type: string) => {
  const response = await Api().get(`/${type}/popular?api_key=${apiKey}&language=en-US`)
  return response
}

export const getTopRated = async (type: string) => {
  const response = await Api().get(`/${type}/top_rated?api_key=${apiKey}&language=en-US`)
  return response
}
