import { useEffect, useState } from 'react'
// Services
import { getPopular } from 'services/MovieApi'
// Interfaces
import type { IMovie } from 'interfaces/IMovie'
import type { IToggle } from '@/interfaces/IToggle'
import type { IGetListPayload } from '@/interfaces/IPayloads'
// Components
import MovieCard from 'components/MovieCard'
import MovieCardSkeleton from 'components/skeleton/MovieCardSkeleton'
import Toggle from 'components/Toggle'

const Popular = () => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const [firstLoad, setFirsLoad] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<IMovie[]>([])
  const [toggleActive, setToggleActive] = useState<string>('movie')
  const toggles: IToggle[] = [
    { id: 'movie', label: 'Movies' },
    { id: 'tv', label: 'TV' },
  ]

  // Get data
  const getData = async () => {
    const params: IGetListPayload = {
      api_key: apiKey,
      page: 1,
      language: 'en-US',
      region: 'ID',
    }

    setIsLoading(true)
    const { data } = await getPopular(toggleActive, params)
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
            What&apos;s Popular
          </h3>
          {/* Toggle */}
          <Toggle
            toggles={toggles}
            toggleActive={toggleActive}
            handleChangeToggle={setToggleActive}
          />
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

export default Popular
