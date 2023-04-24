import { useMemo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Stores
import { useAppSelector } from 'stores/Hooks'
import { getMenuActive } from 'stores/MovieSlice'
// Services
import {
  getPopular,
  getTopRated,
  getNowPlaying,
  getUpcoming,
  getAiringToday,
  getOnTheAir,
} from 'services/MovieApi'
// Interfaces
import { IMovie } from 'interfaces/IMovie'
import { IGetListPayload } from '@/interfaces/IPayloads'
// Components
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import MovieCardSkeleton from 'components/skeleton/MovieCardSkeleton'

const Movie = () => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const urlParams = useParams()
  const menuActive: string = useAppSelector(getMenuActive)
  const [firstLoad, setFirsLoad] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isUSeTypeMenu, setIsUseTypeMenu] = useState<boolean>(false)
  const [movies, setMovies] = useState<IMovie[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)

  // Set menu service
  const [menu, menuService] = useMemo((): any => {
    const title: string = urlParams.menu ? urlParams.menu.replaceAll('-', ' ') : ''

    switch (urlParams.menu) {
      case 'popular':
        setIsUseTypeMenu(true)
        return [title, getPopular]
      case 'now-playing':
        setIsUseTypeMenu(false)
        return [title, getNowPlaying]
      case 'top-rated':
        setIsUseTypeMenu(true)
        return [title, getTopRated]
      case 'upcoming':
        setIsUseTypeMenu(false)
        return [title, getUpcoming]
      case 'airing-today':
        setIsUseTypeMenu(false)
        return [title, getAiringToday]
      case 'on-the-air':
        setIsUseTypeMenu(false)
        return [title, getOnTheAir]
    }
  }, [urlParams])

  // Get data popular
  const getData = async () => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    const params: IGetListPayload = {
      api_key: apiKey,
      page,
      language: 'en-US',
      region: 'ID',
    }

    const { data } = isUSeTypeMenu
      ? await menuService(urlParams.type, params)
      : await menuService(params)

    if (data) {
      setMovies(data.results || [])
      setIsLoading(false)
      setTotalPages(data.total_pages)
      if (firstLoad) setFirsLoad(false)
    }
  }

  // Handle change page
  const handleChangePage = (page: number) => setPage(page + 1)

  // Get data when tab and route is change
  useEffect(() => {
    if (!firstLoad) {
      if (page !== 1) setPage(1)
      else getData()
    }
  }, [urlParams])

  // Get data when page is change
  useEffect(() => {
    if (!firstLoad) getData()
  }, [page])

  // Mounted
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h3 className='font-semibold text-lg lg:text-xl text-slate-900 dark:text-slate-100 capitalize mb-4'>
        {menu}
      </h3>
      <div className='grid lg:grid-cols-movie md:grid-cols-movie-md sm:grid-cols-movie-sm grid-cols-movie-xs gap-x-5 md:gap-y-10 gap-y-5 mb-10'>
        {/* If not loading & have data */}
        {!isLoading &&
          movies.length > 0 &&
          movies.map((movie) => {
            return (
              <div
                key={movie.id}
                className='flex flex-col'
              >
                <MovieCard
                  movie={movie}
                  menuActive={menuActive}
                />
              </div>
            )
          })}

        {/* If not loading & data is null */}
        {!isLoading && movies.length === 0 && (
          <p className='text-lg text-white'>There are no data</p>
        )}

        {/* If loading */}
        {isLoading && <MovieCardSkeleton />}
      </div>

      {/* Pagination */}
      {!isLoading && movies.length > 0 && (
        <div className='flex justify-end'>
          <Pagination
            page={page}
            totalPages={totalPages}
            handleChangePage={handleChangePage}
          />
        </div>
      )}
    </>
  )
}

export default Movie
