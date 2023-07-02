import Api from 'services/BaseService'
// Interfaces
import { IGetListPayload, IDetailPayload } from '@/interfaces/IPayloads'

export const getTrending = async (type: string, payload: object) => {
  const response = await Api().get(`/trending/all/${type}`, { params: payload })
  return response
}

export const getNewRelease = async (type: string, payload: IGetListPayload) => {
  const response = await Api().get(`/${type}/latest`, { params: payload })
  return response
}

export const getPopular = async (type: string, payload: IGetListPayload) => {
  const response = await Api().get(`/${type}/popular`, { params: payload })
  return response
}

export const getTopRated = async (type: string, payload: IGetListPayload) => {
  const response = await Api().get(`/${type}/top_rated`, { params: payload })
  return response
}

export const getNowPlaying = async (payload: IGetListPayload) => {
  const response = await Api().get('/movie/now_playing', { params: payload })
  return response
}

export const getUpcoming = async (payload: IGetListPayload) => {
  const response = await Api().get('/movie/upcoming', { params: payload })
  return response
}

export const getAiringToday = async (payload: IGetListPayload) => {
  const response = await Api().get('/tv/airing_today', { params: payload })
  return response
}

export const getOnTheAir = async (payload: IGetListPayload) => {
  const response = await Api().get('/tv/on_the_air', { params: payload })
  return response
}

export const getDetail = async (type: string, id: string, payload: IDetailPayload) => {
  const response = await Api().get(`/${type}/${id}`, { params: payload })
  return response
}

export const getCredits = async (type: string, id: string, payload: IDetailPayload) => {
  const response = await Api().get(`/${type}/${id}/credits`, { params: payload })
  return response
}

export const getTrailers = async (type: string, id: string, payload: IDetailPayload) => {
  const response = await Api().get(`/${type}/${id}/videos`, { params: payload })
  return response
}

export const getReviews = async (type: string, id: string, payload: IDetailPayload) => {
  const response = await Api().get(`/${type}/${id}/reviews`, { params: payload })
  return response
}

export const getRecommendation = async (type: string, id: string, payload: IDetailPayload) => {
  const response = await Api().get(`/${type}/${id}/recommendations`, { params: payload })
  return response
}

export const searchFilm = async (payload: object) => {
  const response = await Api().get(`search/movie`, { params: payload })
  return response
}

export const searchTv = async (payload: object) => {
  const response = await Api().get(`search/tv`, { params: payload })
  return response
}
