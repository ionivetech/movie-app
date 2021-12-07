import api from "./BaseService";

const baseUrl = import.meta.env.VITE_BASE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export default {
    async getFilm(type: string, category: string) {
        return await api().get(`${baseUrl}/${type}/${category}?api_key=${apiKey}`).then(response => response.data)
    },

    async searchFilm(type: string, query: string) {
        return await api().get(`${baseUrl}/search/${type}?query=${query}&api_key=${apiKey}`).then(response => response.data)
    }
}