import { BaseSyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
// Interfaces
import { IMovie } from 'interfaces/IMovie'
// Components
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
// Images
import { Dummy } from '@/assets/images'
// Icons
import { StarIcon } from '@heroicons/react/24/solid'

// Local Interfaces
interface IMovieCardProps {
  movie: IMovie
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  return (
    <>
      <Link
        to={`detail/${movie.id}`}
        className='w-full h-[300px] mb-3 rounded-xl'
      >
        {/* Image */}
        <LazyLoadImage
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          useIntersectionObserver={true}
          threshold={100}
          placeholderSrc={Dummy}
          onError={(event: BaseSyntheticEvent) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = Dummy
          }}
          width='100%'
          className='w-full h-[300px] object-center object-cover rounded-xl cursor-pointer'
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
        <p className='text-sm text-zinc-400'>
          {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}
        </p>

        <div className='flex justify-between items-center space-x-1'>
          <StarIcon className='w-4 h-4 text-yellow-600 -mt-[2px]' />
          <p className='text-sm text-zinc-400'>{movie.vote_average}</p>
        </div>
      </div>
    </>
  )
}

export default trackWindowScroll(MovieCard)
