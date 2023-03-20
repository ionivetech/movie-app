import Api from '@/services/BaseService'

const apiKey: string = import.meta.env.VITE_API_KEY

export default {
  async getPopular(type: string) {
    const response = await Api().get(`/${type}/popular?api_key=${apiKey}&language=en-US`)
    return response
  },

  async getTopRated(type: string) {
    const response = await Api().get(`/${type}/top_rated?api_key=${apiKey}&language=en-US`)
    return response
  },
}
