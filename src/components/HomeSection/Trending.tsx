import { useEffect, useState } from 'react'
// Services
import { getTrending } from 'services/MovieApi'
// Interfaces
import type { IMovie } from 'interfaces/IMovie'
import type { IToggle } from '@/interfaces/IToggle'
// Components
import MovieCard from 'components/MovieCard'
import MovieCardSkeleton from 'components/skeleton/MovieCardSkeleton'

const TrendingSection = () => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const [firstLoad, setFirsLoad] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<IMovie[]>([])
  const [toggleActive, setToggleActive] = useState<string>('day')
  const toggles: IToggle[] = [
    { id: 'day', label: 'Today' },
    { id: 'week', label: 'This Week' },
  ]

  // Get data
  const getData = async () => {
    setIsLoading(true)
    const { data } = await getTrending(toggleActive, { api_key: apiKey })
    if (data) {
      setMovies(data.results || [])
      setIsLoading(false)
      if (firstLoad) setFirsLoad(false)
    }
  }

  // Get data when toggle is change
  useEffect(() => {
    if (!firstLoad) getData()
  }, [toggleActive])

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
            Trending
          </h3>
          {/* Toggle */}
          <div className='flex items-center space-x-2'>
            {toggles.map((toggle, index) => {
              return (
                <div
                  key={toggle.id}
                  className={`px-3 md:px-4 py-1 md:py-[6px] rounded-full bg-slate-300 dark:bg-slate-600 text-xs md:text-sm text-slate-600 dark:text-slate-100 tracking-wide whitespace-nowrap transition ease-in-out duration-200
                    ${
                      toggleActive === toggle.id
                        ? '!bg-blue-500 dark:!bg-blue-600 !text-slate-50 cursor-default'
                        : 'cursor-pointer'
                    }
                  `}
                  tabIndex={index}
                  role='button'
                  onClick={() => setToggleActive(toggle.id)}
                >
                  {toggle.label}
                </div>
              )
            })}
          </div>
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

export default TrendingSection
