// Interfaces
import { IMovieDetail } from 'interfaces/IMovieDetail'
// Images
import { Dummy } from '@/assets/images'

// Local interface
interface IProps {
  movie: IMovieDetail
}

const DetailDescription = ({ movie }: IProps) => {
  // Variables
  const releaseDate: string | undefined = movie
    ? movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]
    : ''

  // Error image
  const onErrorImage = (e: any) => (e.target.src = Dummy)

  return (
    <>
      {/* Banner */}
      {movie.backdrop_path && (
        <div className='relative'>
          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
            alt={movie.name}
            className='w-full md:h-auto h-[296px] object-cover bg-center'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t dark:from-background from-background-light dark:via-background/90 via-background-light/20 dark:via-20% via-50% dark:to-background/10 to-background-light/5 to-70%' />
        </div>
      )}

      <div
        className={`relative container ${movie.backdrop_path ? 'md:-mt-52 -mt-28' : 'mt-32'} z-10`}
      >
        <div className='flex md:flex-row flex-col md:space-x-10 space-y-8'>
          {/* Poster */}
          <div className='relative'>
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt={movie.title || movie.name}
              className='rounded-xl xl:w-[220px] lg:w-[190px] md:w-[170px] w-[160px] xl:min-w-[220px] lg:min-w-[190px] md:min-w-[170px] min-w-[160px] xl:h-[330px] lg:h-[290px] md:h-[270px] h-[240px] xl:min-h-[330px] lg:min-h-[290px] md:min-h-[270px] min-h-[240px]'
              onError={onErrorImage}
            />
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt={movie.title || movie.name}
              className='absolute top-2 rounded-lg blur-lg -z-10 opacity-30 xl:w-[220px] lg:w-[190px] md:w-[170px] w-[160px] xl:min-w-[220px] lg:min-w-[190px] md:min-w-[170px] min-w-[160px] xl:h-[330px] lg:h-[290px] md:h-[270px] h-[240px] xl:min-h-[330px] lg:min-h-[290px] md:min-h-[270px] min-h-[240px]'
              onError={onErrorImage}
            />
          </div>

          {/* Title, release year, language, genres, description */}
          <div className='flex flex-col mt-16 space-y-3'>
            {/* Title */}
            <h1 className='tracking-wide font-bold xl:text-3xl md:text-2xl text-slate-950 dark:text-slate-100'>
              {movie.original_name || movie.original_title}
            </h1>

            {/* Release year & language */}
            {movie.spoken_languages.length > 0 && (
              <p className='font-medium text-sm text-slate-950 dark:text-slate-100'>
                {releaseDate} &#9679; {movie.spoken_languages[0].english_name}{' '}
                {movie.first_air_date && <>&#9679; {movie.number_of_episodes} Episode</>}
              </p>
            )}

            {/* Genres */}
            <div className='flex space-x-2 overflow-x-auto no-scrollbar'>
              {movie.genres.map((genre) => (
                <div
                  key={genre.id}
                  className='px-3 py-1 dark:bg-slate-700/50 bg-slate-400/50 font-medium text-xs tracking-wide rounded dark:text-slate-100 text-slate-950 whitespace-nowrap'
                >
                  {genre.name}
                </div>
              ))}
            </div>

            {/* Description */}
            <p className='xl:max-w-[60%] lg:max-w-[70%] font-normal text-sm text-slate-950 dark:text-slate-100 leading-loose'>
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailDescription
