import { ICategoryStore } from '@/interfaces/CategoryInterface';
import { IMovie } from '@/interfaces/MovieInterface';
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore({
  id: 'category',

  state: (): ICategoryStore => ({
    categoryMovie: [
      {
        key: 'top_rated',
        title: 'Top Rated Movie',
        list: []
      },
      {
        key: 'upcoming',
        title: 'Upcoming Movie',
        list: []
      },
      {
        key: 'now_playing',
        title: 'Now Playing Movie',
        list: []
      },
      {
        key: 'popular',
        title: 'Popular Movie',
        list: []
      },
    ],
    categoryTV: [
      {
        key: 'popular',
        title: 'Popular TV Shows',
        list: []
      },
      {
        key: 'top_rated',
        title: 'Top Rated TV Shows',
        list: []
      },
      {
        key: 'on_the_air',
        title: 'On The Air TV Shows',
        list: []
      },
      {
        key: 'airing_today',
        title: 'Airing Today TV Shows',
        list: []
      },
    ]
  }),

  getters: {
    getCategoryMovie: state => state.categoryMovie,
    getCategoryTV: state => state.categoryTV,
  },

  actions: {
    setListCategory(type: string, key: string, list: IMovie[]) {
      const categoryType = type === 'movie' ? this.categoryMovie : this.categoryTV
      
      categoryType.forEach(type => {
        if (key === type.key) {
          type.list = list
        }
      })
      
    }
  },
});
