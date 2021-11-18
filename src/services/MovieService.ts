import { environment } from "../environments/environment";
import api from "./BaseService";

export default {
    async getFilm(type: string, category: string) {
        return await api().get(`${environment.baseUrl}/${type}/${category}?api_key=${environment.apiKey}`).then(response => response.data)
    },

    async searchFilm(type: string, query: string) {
        return await api().get(`${environment.baseUrl}/search/${type}?query=${query}&api_key=${environment.apiKey}`).then(response => response.data)
    }
}