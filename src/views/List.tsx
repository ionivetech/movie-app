import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// Stores
import { useAppSelector } from 'stores/Hooks'
import { getTabActive, getMenuActive } from 'stores/MovieSlice'
// Services
import { getPopular, getTopRated } from 'services/MovieApi'
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
  const location = useLocation()
  const tabActive: string = useAppSelector(getTabActive)
  const menuActive: string = useAppSelector(getMenuActive)
  const [firstLoad, setFirsLoad] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<IMovie[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)

  // Get data popular
  const getData = async () => {
    window.scrollTo(0, 0)
    let service

    setIsLoading(true)
    const params: IGetListPayload = {
      api_key: apiKey,
      page,
      language: 'en-US',
      region: 'ID',
    }

    // Set service function
    if (menuActive === '/') service = getPopular
    else if (menuActive === 'top-rated') service = getTopRated

    if (service) {
      const { data } = await service(tabActive, params)
      if (data) {
        setMovies(data.results || [])
        setIsLoading(false)
        setTotalPages(data.total_pages)
        if (firstLoad) setFirsLoad(false)
      }
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
  }, [tabActive, location.pathname])

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
      <div className='grid md:grid-cols-movie grid-cols-movie-sm gap-x-5 gap-y-10 mb-10'>
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
