import { useEffect, useState } from 'react'
// Stores
import { useAppSelector } from 'stores/Hooks'
import { getTabActive } from 'stores/MovieSlice'
// Services
import { getPopular } from 'services/MovieApi'
// Interfaces
import { IMovie } from 'interfaces/IMovie'
// Components
import { MovieCard } from 'components/MovieCard'
import { MovieCardSkeleton } from 'components/skeleton/MovieCardSkeleton'

const Movie = () => {
  // Variables
  const tabActive: string = useAppSelector(getTabActive)
  const [firstLoad, setFirsLoad] = useState<boolean>(true)
  const [movies, setMovies] = useState<IMovie[]>([])

  // Get data popular
  const getData = async () => {
    const { data } = await getPopular(tabActive)
    if (data) {
      setMovies(data.results)
      setFirsLoad(false)
    }
  }

  // Get data popular when tab is change
  useEffect(() => {
    if (!firstLoad) getData()
  }, [tabActive])

  // Mounted
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='grid grid-cols-movie gap-x-5 gap-y-10'>
      {movies && movies.length > 0 ? (
        movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className='flex flex-col'
            >
              <MovieCard movie={movie} />
            </div>
          )
        })
      ) : (
        <MovieCardSkeleton />
      )}
    </div>
  )
}

export default Movie
