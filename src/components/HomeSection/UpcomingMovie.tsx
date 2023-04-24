import { useEffect, useState } from 'react'
// Services
import { getUpcoming } from 'services/MovieApi'
// Interfaces
import type { IMovie } from 'interfaces/IMovie'
import type { IGetListPayload } from '@/interfaces/IPayloads'
// Components
import MovieCard from 'components/MovieCard'
import MovieCardSkeleton from 'components/skeleton/MovieCardSkeleton'

const UpcomingMovie = () => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<IMovie[]>([])

  // Get data
  const getData = async () => {
    const params: IGetListPayload = {
      api_key: apiKey,
      page: 1,
      language: 'en-US',
      region: 'ID',
    }

    setIsLoading(true)
    const { data } = await getUpcoming(params)
    if (data) {
      setMovies(data.results || [])
      setIsLoading(false)
    }
  }

  // Mounted
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>
        <div className='flex justify-between mb-4'>
          {/* Title */}
          <h3 className='text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50 tracking-wide antialiased'>
            Upcoming Movies
          </h3>
        </div>

        {/* Movie List */}
        <div className='flex space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth'>
          {/* If not loading & have data */}
          {!isLoading &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className='min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col'
                >
                  <MovieCard movie={movie} />
                </div>
              )
            })}

          {/* If loading */}
          {isLoading && <MovieCardSkeleton isHorizontal={true} />}
        </div>
      </div>
    </>
  )
}

export default UpcomingMovie
