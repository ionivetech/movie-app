import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Services
import { getDetail } from 'services/MovieApi'
// Interfaces
import { IDetailPayload } from 'interfaces/IPayloads'
import { IMovieDetail } from 'interfaces/IMovieDetail'

const Detail = () => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const { type, id } = useParams()
  const [detail, setDetail] = useState<IMovieDetail | null>(null)
  const releaseDate: string | undefined = detail
    ? detail.release_date?.split('-')[0] || detail.first_air_date?.split('-')[0]
    : ''
  const isMovie: boolean = detail && detail.release_date ? true : false

  // Get Detail Movie
  const getDetailMovie = async () => {
    const payload: IDetailPayload = {
      api_key: apiKey,
      language: 'en-US',
    }
    const { data } = await getDetail(type || '', id || '', payload)
    if (data) setDetail(data)
  }

  // Mounted
  useEffect(() => {
    getDetailMovie()
  }, [])

  return (
    detail && (
      <>
        {/* Banner */}
        <div className='relative'>
          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}`}
            alt={detail.name}
            className='w-full h-auto object-cover bg-center'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t dark:from-background from-background-light dark:via-background/90 via-background-light/20 dark:via-20% via-50% dark:to-background/10 to-background-light/5 to-70%' />
        </div>

        <div className='relative container -mt-52 z-10'>
          <div className='flex space-x-10'>
            {/* Poster */}
            <div className='relative'>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${detail.poster_path}`}
                alt={detail.title || detail.name}
                className='rounded-xl w-[220px] min-w-[220px] h-[330px] min-h-[330px]'
              />
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${detail.poster_path}`}
                alt={detail.title || detail.name}
                className='absolute top-2 rounded-lg blur-lg -z-10 opacity-30'
              />
            </div>

            {/* Title, release year, language, genres, description */}
            <div className='flex flex-col mt-16 space-y-3'>
              {/* Title */}
              <h1 className='tracking-wide font-bold xl:text-3xl md:text-2xl text-slate-950 dark:text-slate-100'>
                {detail.original_name || detail.original_title}
              </h1>

              {/* Release year & language */}
              <p className='font-medium text-sm text-slate-950 dark:text-slate-100'>
                {releaseDate} &#9679; {detail.spoken_languages[0].english_name}
              </p>

              {/* Genres */}
              <div className='flex space-x-2'>
                {detail.genres.map((genre) => (
                  <div
                    key={genre.id}
                    className='px-3 py-1 dark:bg-slate-700/50 bg-slate-400/50 font-medium text-xs tracking-wide rounded dark:text-slate-100 text-slate-950'
                  >
                    {genre.name}
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className='xl:max-w-[60%] lg:max-w-[70%] font-normal text-sm text-slate-950 dark:text-slate-100 leading-relaxed'>
                {detail.overview}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default Detail
