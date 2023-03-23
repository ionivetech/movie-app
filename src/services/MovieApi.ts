import Api from 'services/BaseService'
// Interfaces
import { IGetListPayload } from 'interfaces/IGetListPayload'

export const getPopular = async (type: string, payload: IGetListPayload) => {
  const response = await Api().get(`/${type}/popular`, { params: payload })
  return response
}

export const getTopRated = async (type: string, payload: IGetListPayload) => {
  const response = await Api().get(`/${type}/top_rated`, { params: payload })
  return response
}

export const getDetail = async (type: string, id: number) => {
  const response = await Api().get(`/${type}/${id}`)
  return response
}
