import { BaseSyntheticEvent } from 'react'
// Interfaces
import { IMovie } from 'interfaces/IMovie'
// Components
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
// Images
import { Dummy } from '@/assets/images'

// Local Interfaces
interface IProps {
  movie: IMovie
  isRecent: boolean
  handleClick(item: IMovie, isRecent: boolean): unknown
}

const MovieListSearch = (props: IProps) => {
  const { movie, isRecent = false, handleClick } = props

  return (
    <div
      role='button'
      tabIndex={0}
      className='flex justify-between cursor-pointer'
      onClick={() => handleClick(movie, isRecent)}
    >
      <div className='flex space-x-2'>
        {/* Image */}
        <LazyLoadImage
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.title || movie.original_title || movie.original_name}
          useIntersectionObserver={true}
          threshold={100}
          placeholderSrc={<div className='bg-slate-300 dark:bg-slate-800 animate-pulse' />}
          onError={(event: BaseSyntheticEvent) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = Dummy
          }}
          className='w-12 min-w-[48px] h-[72px] object-center object-cover rounded shadow-lg'
        />

        {/* Title & release year */}
        <div className='flex flex-col'>
          <p className='text-slate-900 dark:text-slate-100 line-clamp-1'>
            {movie.title || movie.name}
          </p>
          <p className='text-sm text-slate-600 dark:text-zinc-400'>
            {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}
          </p>
        </div>
      </div>

      <div
        className={`flex justify-center items-center md:text-xs text-[10px] text-slate-100 md:min-w-[68px] min-w-[60px] md:max-w-[68px] max-w-[60px] md:h-7 h-5 mx-2 rounded-full ${
          movie.first_air_date ? 'bg-blue-600' : 'bg-violet-600'
        }`}
      >
        {movie.first_air_date ? 'TV Show' : 'Movie'}
      </div>
    </div>
  )
}

export default trackWindowScroll(MovieListSearch)
