import { Link } from 'react-router-dom'
// Stores
import { useAppSelector } from 'stores/Hooks'
import { getTabActive } from 'stores/MovieSlice'
// Interfaces
import { IMovie } from 'interfaces/IMovie'
// Icons
import { StarIcon } from '@heroicons/react/24/solid'

// Local Interfaces
interface IMovieCardProps {
  movie: IMovie
}

export const MovieCard = ({ movie }: IMovieCardProps) => {
  // Variables
  const tabActive: string = useAppSelector(getTabActive)

  return (
    <>
      <Link
        to={`detail/${movie.id}}`}
        className='group w-full h-[312px] mb-3 rounded-xl overflow-hidden'
      >
        {/* Image */}
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          className='w-full object-center object-cover rounded-xl cursor-pointer transition ease-in-out duration-300 group-hover:scale-110'
        />
      </Link>
      {/* Movie name */}
      <Link
        to={`detail/${movie.id}}`}
        className='text-base text-slate-100 text-ellipsis mb-2 line-clamp-1 cursor-pointer'
      >
        {movie.title || movie.name}
      </Link>
      {/* Release date & rating */}
      <div className='flex justify-between items-center'>
        <p className='text-sm text-zinc-400'>{movie.release_date?.split('-')[0]}</p>

        <div className='flex justify-between items-center space-x-1'>
          <StarIcon className='w-4 h-4 text-yellow-600 -mt-[2px]' />
          <p className='text-sm text-zinc-400'>{movie.vote_average}</p>
        </div>
      </div>
    </>
  )
}
